import { Box, Button, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import plusImage from "../../../assets/plusImage.png";
import getHouseData from "../../../util/HomeUtility/getHouseData";
import AddHomeModal from "./Components/AddHomeModal";

import AddIcon from "@material-ui/icons/Add";
import HomeDataCard from "./Components/HomeData";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { useStyle } from "./style";

const Home = ({ user }) => {
  const [isAddHomeDialogeBoxOpen, setIsAddHomeDialogeBoxOpen] = useState(false);
  const [houseData, setHouseData] = useState([]);
  const style = useStyle();
  const navigate = useNavigate();

  const toggleAddHomeModal = () => {
    setIsAddHomeDialogeBoxOpen(!isAddHomeDialogeBoxOpen);
  };

  useEffect(() => {
    if (user) {
      getHouseData(user.myHouses).then((myHouseData) => {
        setHouseData(myHouseData);
      });
    }
  }, [user]);

  const backButton = () => {
    navigate(-1);
  };

  return (
    <>
      {user.myHouses.length === 0 ? (
        <>
          <Button onClick={backButton}>
            <KeyboardBackspaceIcon />
          </Button>
          <Box className={style.noHouse}>
            <Typography>No House in your List</Typography>
            <img src={plusImage} className={style.noHomeImg} alt="" onClick={() => toggleAddHomeModal()} />
          </Box>
        </>
      ) : (
        <Box className={style.houseCard}>
          <Box className={style.header}>
            <Button onClick={backButton}>
              <KeyboardBackspaceIcon />
            </Button>
            <AddIcon onClick={() => toggleAddHomeModal()} />
          </Box>
          <HomeDataCard houseData={houseData} />
        </Box>
      )}
      {isAddHomeDialogeBoxOpen && (
        <AddHomeModal user={user} toggleAddHomeModal={toggleAddHomeModal} />
      )}
    </>
  );
};

export default Home;
