import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import plusImage from "../../../assets/plusImage.png";
import { getOfficeData } from "../../../util/OfficeUtility/getOfficeData";
import AddOfficeModal from "./Components/AddOfficeModal";
import OfficeTable from "./Components/OfficeTable";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles({
  noHouse: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    padding: "5px 10px",
    alignItems: "center",
    marginBottom: "10px",
    justifyContent: "space-between",
    backgroundColor: "#ffffff96",
  },
  addButton: {
    color: "black",
  },
  noOfficeImg: { borderRadius: "50%" },
});

const Offices = ({ user }) => {
  const [isOfficeModalOpen, setIsOfficeModalOpen] = useState(false);
  const [myOffice, setMyOffice] = useState([]);
  const navigate = useNavigate();
  const style = useStyle();

  const toggleAddHomeModal = () => {
    setIsOfficeModalOpen(!isOfficeModalOpen);
  };

  useEffect(() => {
    getOfficeData(user.uid).then((data) => {
      setMyOffice(data);
    });
  }, [user]);

  const backButton = () => {
    navigate(-1);
  };
  return (
    <>
      {myOffice?.length === 0 ? (
        <>
          <Button onClick={backButton}>
            <KeyboardBackspaceIcon />
          </Button>
          <Box className={style.noHouse}>
            <Typography>No Office in your List</Typography>
            <img
              src={plusImage}
              className={style.noOfficeImg}
              alt=""
              onClick={() => toggleAddHomeModal()}
            />
          </Box>
        </>
      ) : (
        <Box>
          <Box className={style.header}>
            <Button onClick={backButton}>
              <KeyboardBackspaceIcon />
            </Button>
            <AddOutlinedIcon
              className={style.addButton}
              onClick={() => toggleAddHomeModal()}
            />
          </Box>
          <OfficeTable officeData={myOffice} />
        </Box>
      )}
      {isOfficeModalOpen && (
        <AddOfficeModal user={user} toggleAddHomeModal={toggleAddHomeModal} />
      )}
    </>
  );
};

export default Offices;
