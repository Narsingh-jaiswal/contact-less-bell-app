import {
  Badge,
  Box,
  Button,
  makeStyles,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../../../util/OfficeUtility/getAllUser";

const useStyle = makeStyles({
  fieldContainer: {
    padding: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: 400,
    height: "80vh",
    overflow: "hidden",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
  },
  textField: {
    width: "80%",
    padding: "5px 20px",
    borderRadius: 50,
    backgroundColor: "#bdbdffb8",
    margin: "10px 0px 20px 0px",
  },
});

const CabinPopUp = ({ officeId, toggleCabinPopUp, isCabinPopupOpen }) => {
  const [allUserData, setAllUserData] = useState([]);
  const [selectedMember, setSelectedMember] = useState({});
  const [cabinData, setCabinData] = useState({ name: "", address: "" });

  const style = useStyle();

  useEffect(() => {
    getAllUsers().then((data) => {
      setAllUserData(data);
    });
  }, []);

  const setMember = (event, value) => {
    console.log(event.target.value, value);
    if (value) {
      setSelectedMember(value.uid);
    }
  };

  const onChange = () => {};

  return (
    <Modal
      open={isCabinPopupOpen}
      onClose={toggleCabinPopUp}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box className={style.fieldContainer}>
        <Box className={style.container}>
          <Box>
            {/* <Typography>Add Members</Typography>
            <Autocomplete
              id="combo-box-demo"
              options={allUserData}
              getOptionLabel={(option) => option.email}
              style={{ width: 300 }}
              onChange={setMember}
              renderInput={(params) => (
                <TextField {...params} label="members" variant="outlined" />
              )}
            /> */}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CabinPopUp;
