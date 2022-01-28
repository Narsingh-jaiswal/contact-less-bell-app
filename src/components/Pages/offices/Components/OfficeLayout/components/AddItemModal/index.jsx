import { Box, Button, TextField, Typography } from "@material-ui/core";
import useStyle from "../AddCabinModal/style";
import CancelIcon from "@material-ui/icons/Cancel";
import { useState } from "react";
import {
  addItem,
  uploadItemFile,
} from "../../../../../../../util/OfficeUtility/addItem";
import Loader from "../../../../../../Loader";

const initialItemDetail = {
  name: "",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWIoOg37gtdxejwRsfL1rb0zYwcWbPCNUBj-jtwp6fxkPYYzF0RfFIzrRK8WlNq3f__1M&usqp=CAU",
};

const AddItemModal = ({ toggleItemModal, officeId }) => {
  const style = useStyle();
  const [itemDetail, setItemDetail] = useState(initialItemDetail);
  const [image, setImage] = useState({ file: "", preview: "" });
  const [isLoading, setIsLoading] = useState(false);

  const changeItemLogo = (e) => {
    const files = e.target.files;
    if (files.length) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      setImage({ preview: url, file });
    }
  };

  const add = async () => {
    setIsLoading(true);
    if (itemDetail.name) {
      let imageUrl = itemDetail.img;
      if (image.file) {
        imageUrl = await uploadItemFile(image.file, itemDetail.name, officeId);
      }

      const response = await addItem(officeId, {
        name: itemDetail.name,
        img: imageUrl,
      });
    }
    setIsLoading(false);
    toggleItemModal();
  };

  const onChange = (e) => {
    setItemDetail({ ...itemDetail, [e.target.name]: e.target.value });
  };

  return (
    <Box className={style.container}>
      {isLoading && <Loader />}
      <Box className={style.fieldContainer}>
        <CancelIcon className={style.cancelLogo} onClick={toggleItemModal} />

        <label htmlFor="houseLogo">
          <img
            src={image.preview || itemDetail.img}
            alt=""
            className={style.logo}
          />
        </label>
        <input
          type="file"
          id="houseLogo"
          className={style.logoInput}
          onChange={changeItemLogo}
        />

        <Typography align="center" variant="subtitle1" color="primary">
          Enter Your Item Detail
        </Typography>
        <TextField
          className={style.textField}
          variant="outlined"
          placeholder="Item name"
          name="name"
          required
          value={itemDetail.name}
          onChange={onChange}
        />
        <Button color="primary" onClick={add}>
          Add
        </Button>
        <Button variant="outlined" color="secondary" onClick={toggleItemModal}>
          cancel
        </Button>
      </Box>
    </Box>
  );
};

export default AddItemModal;
