import { useState } from "react";
import { Box, TextField, Typography, Button } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

import home from "../../../../../assets/home.png";
import addHouse from "../../../../../util/HomeUtility/addHouse";
import useStyle from "./style";
import Loader from "../../../../Loader";

const initialHouseDetail = {
  name: "",
  address: "",
  img: "https://firebasestorage.googleapis.com/v0/b/contact-less-bell.appspot.com/o/Default%2Fhouse.jpeg?alt=media&token=66562d60-d062-41ea-ae21-1996a3995a1e",
  bell: "https://firebasestorage.googleapis.com/v0/b/contact-less-bell.appspot.com/o/Default%2Froman_reigns.mp3?alt=media&token=aaad050c-5009-41a4-8623-bd8b58b7d770",
};

const AddHomeModal = ({ user, toggleAddHomeModal }) => {
  const style = useStyle();

  const [houseDetail, setHouseDetail] = useState({
    ...initialHouseDetail,
    ownerId: user?.uid,
  });
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e) => {
    setHouseDetail({
      ...houseDetail,
      [e.target.name]: e.target.value,
    });
  };

  const add = () => {
    setIsLoading(true);
    addHouse(houseDetail)
      .then((resolve) => {
        setIsLoading(false);
        toggleAddHomeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box className={style.container}>
          <Box className={style.fieldContainer}>
            <CancelIcon
              className={style.cancelLogo}
              onClick={toggleAddHomeModal}
            />
            <img src={home} alt="" className={style.logo} />
            <Typography align="center" variant="subtitle1" color="primary">
              Enter Your House Detail
            </Typography>
            <TextField
              className={style.textField}
              variant="outlined"
              placeholder="House name"
              name="name"
              value={houseDetail.name}
              onChange={onChange}
            />

            <TextField
              className={style.textField}
              variant="outlined"
              placeholder="Address"
              name="address"
              value={houseDetail.address}
              onChange={onChange}
            />
            <Button color="primary" onClick={add}>
              Add
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={toggleAddHomeModal}
            >
              cancel
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};
export default AddHomeModal;
