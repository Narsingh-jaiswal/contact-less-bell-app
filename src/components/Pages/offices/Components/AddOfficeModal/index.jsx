import { Box, TextField, Typography, Button } from "@material-ui/core";
import { useState } from "react";
import office from "../../../../../assets/officeLogo.jpeg";
import { addNewOffice } from "../../../../../util/OfficeUtility/addOffice";
import CancelIcon from "@material-ui/icons/Cancel";
import useStyle from "./style";

const initialOfficeDetail = {
  name: "",
  address: "",
  settings: {
    bellTone: "",
    isRingEnable: false,
  },
  cabins: [],
};

const AddOfficeModal = ({ user, toggleAddHomeModal }) => {
  const style = useStyle();

  const [officeDetail, setOfficeDetail] = useState({
    ...initialOfficeDetail,
    ownerId: user?.uid,
  });

  const onChange = (e) => {
    setOfficeDetail({
      ...officeDetail,
      [e.target.name]: e.target.value,
    });
  };

  const createOffice = () => {
    addNewOffice(officeDetail)
      .then((response) => {
        console.log({ response });
      })
      .catch((error) => {
        console.log(error);
      });
    toggleAddHomeModal();
  };

  return (
    <Box className={style.container}>
      <Box className={style.fieldContainer}>
        <CancelIcon className={style.cancelLogo} onClick={toggleAddHomeModal} />
        <img src={office} alt="" className={style.logo} />
        <Typography align="center" variant="subtitle1" color="primary">
          Enter Your Office Detail
        </Typography>
        <TextField
          className={style.textField}
          variant="outlined"
          placeholder="Office name"
          name="name"
          value={officeDetail.name}
          onChange={onChange}
        />

        <TextField
          className={style.textField}
          variant="outlined"
          placeholder="Address"
          name="address"
          value={officeDetail.address}
          onChange={onChange}
        />
        <Button color="primary" onClick={createOffice}>
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
  );
};
export default AddOfficeModal;
