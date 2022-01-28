import { Box, TextField, Typography, Button } from "@material-ui/core";
import { useState } from "react";
import office from "../../../../../../../assets/officeLogo.jpeg";
import {
  addCabin,
  addCabinIdIntoOffice,
} from "../../../../../../../util/OfficeUtility/addCabin";
import CancelIcon from "@material-ui/icons/Cancel";
import useStyle from "./style";

const initialCabinDetail = {
  name: "",
  address: "",
};

const AddCabinModal = ({ officeId, user, toggleCabinPopUp }) => {
  const style = useStyle();

  const [cabinDetail, setCabinDetail] = useState({
    ...initialCabinDetail,
    ownerId: user?.uid,
  });

  const onChange = (e) => {
    setCabinDetail({
      ...cabinDetail,
      [e.target.name]: e.target.value,
    });
  };

  const createCabin = () => {
    toggleCabinPopUp();
    addCabin(officeId, cabinDetail)
      .then((cabinData) => {
        addCabinIdIntoOffice(officeId, cabinData.id)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box className={style.container}>
      <Box className={style.fieldContainer}>
        <CancelIcon className={style.cancelLogo} onClick={toggleCabinPopUp} />
        <img src={office} alt="" className={style.logo} />
        <Typography align="center" variant="subtitle1" color="primary">
          Enter Your Cabin Detail
        </Typography>
        <TextField
          className={style.textField}
          variant="outlined"
          placeholder="Cabin name"
          name="name"
          value={cabinDetail.name}
          onChange={onChange}
        />

        <TextField
          className={style.textField}
          variant="outlined"
          placeholder="Address"
          name="address"
          value={cabinDetail.address}
          onChange={onChange}
        />
        <Button color="primary" onClick={createCabin}>
          Add
        </Button>
        <Button variant="outlined" color="secondary" onClick={toggleCabinPopUp}>
          cancel
        </Button>
      </Box>
    </Box>
  );
};
export default AddCabinModal;
