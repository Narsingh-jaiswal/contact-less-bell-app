import {
  Box,
  Button,
  Input,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../../../../services/firebase/firebase";
import Loader from "../../../../../../Loader";

const useStyle = makeStyles({
  modalContainer: {
    position: "absolute",
    backgroundColor: "#121212e0",
    width: "100%",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  fieldContainer: {
    backgroundColor: "white",
    height: 200,
    display: "flex",
    justifyContent: "center",
    borderRadius: 25,
    padding: 20,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});

const AddMemberForm = ({ toggleAddMemberForm, cabinData }) => {
  const [allUserData, setAllUserData] = useState();
  const [selectedMember, setSelectedMember] = useState({});
  const [employeType, setEmployeeType] = useState("Professional staff");
  const [isLoading, setIsLoading] = useState(false);
  const style = useStyle();

  useEffect(() => {
    const userRef = collection(db, "users");
    const userQuery = query(
      userRef,
      where("officeData.officeId", "!=", cabinData.officeId)
    );
    getDocs(userQuery).then((userDocs) => {
      const users = [];
      userDocs.docs.forEach((userDoc) =>
        users.push({ uid: userDoc.id, ...userDoc.data() })
      );
      setAllUserData(users);
    });
  }, [cabinData]);

  const setMember = (event, value) => {
    if (value) {
      setSelectedMember(value.uid);
    }
  };

  const addMember = () => {
    setIsLoading(true);
    const officeRef = doc(db, `offices/${cabinData.officeId}`);
    const userRef = doc(db, `users/${selectedMember}`);
    const officeData = {
      "officeData.officeId": cabinData.officeId,
      "officeData.cabinId": cabinData.cabinId,
      "officeData.employeeType": employeType,
    };
    const updatedOfficeMembers = {
      members: arrayUnion(selectedMember),
    };

    updateDoc(officeRef, updatedOfficeMembers).then(() => {
      updateDoc(userRef, officeData).then((updatedUserDoc) => {
        toggleAddMemberForm();
        setIsLoading(false);
      });
    });
  };

  const changeEmployeType = (event) => {
    setEmployeeType(event.target.value);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Box className={style.modalContainer}>
        <Box className={style.fieldContainer}>
          <Autocomplete
            id="combo-box-demo"
            options={allUserData}
            getOptionLabel={(option) => option.email}
            style={{ width: 300 }}
            onChange={setMember}
            renderInput={(params) => (
              <TextField {...params} label="members" variant="outlined" />
            )}
          />
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={employeType}
            onChange={changeEmployeType}
            input={<Input />}
          >
            <MenuItem value="other">
              <em>other</em>
            </MenuItem>
            <MenuItem value={"Professional staff"}>Professional staff</MenuItem>
            <MenuItem value={"office Boy"}>office Boy</MenuItem>
          </Select>
          <Button color="primary" variant="contained" onClick={addMember}>
            Add
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={toggleAddMemberForm}
          >
            cancel
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AddMemberForm;
