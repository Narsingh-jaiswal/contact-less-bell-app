import { useState } from "react";
import { Box, TextField, Button, Typography } from "@material-ui/core";
import { uploadFile } from "../../../../../../../util/storage/uploadFile";
import { updateHouseData } from "../../../../../../../util/HomeUtility/updateHouseData";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import Loader from "../../../../../../Loader";
import { useStyle } from "./style";

const UpdateHomePopUp = ({ homeData, setIsUpdate }) => {
  const [houseData, setHouseData] = useState(homeData);
  const [imageData, setPreviewImage] = useState({
    preview: homeData.img,
    actualImg: "",
  });
  const [bell, setBell] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const style = useStyle();

  const onChange = (e) => {
    setHouseData({ ...houseData, [e.target.name]: e.target.value });
  };

  const changeHomeLogo = (e) => {
    const files = e.target.files;
    if (files.length) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      setPreviewImage({ preview: url, actualImg: file });
    }
  };

  const handleBell = (e) => {
    const files = e.target.files;
    if (files.length) {
      setBell(files[0]);
    }
  };

  const saveData = async () => {
    setIsLoading(true);
    const imgUrl =
      imageData.actualImg &&
      (await uploadFile(homeData.houseId, "image", imageData.actualImg));

    const audioUrl =
      bell && (await uploadFile(homeData.houseId, "audio", bell));

    const actualHouseData = houseData;

    if (imgUrl) {
      actualHouseData.img = imgUrl;
    }
    if (audioUrl) {
      actualHouseData.bell = audioUrl;
    }
    setHouseData(actualHouseData);
    const updatedHouseDataResponse = await updateHouseData(
      homeData.houseId,
      actualHouseData
    );
    setIsLoading(false);
    cancel();
  };

  const cancel = () => {
    setIsUpdate(false);
  };

  return (
    <>
      <Box className={style.container}>
        {isLoading && <Loader />}
        <Box className={style.fieldContainer}>
          <label htmlFor="houseLogo" className={style.houseLogo}>
            <img src={imageData.preview} alt="" className={style.img} />
            <CameraAltOutlinedIcon className={style.camera} fontSize="large" />
          </label>
          <input
            type="file"
            id="houseLogo"
            className={style.logoInput}
            onChange={changeHomeLogo}
          />
          <label htmlFor="audioSelector" className={style.audioSelector}>
            <NotificationsActiveOutlinedIcon fontSize="large" />
            <Typography variant="caption">Select Doorbell</Typography>
          </label>
          <input
            id="audioSelector"
            className={style.logoInput}
            type="file"
            onChange={handleBell}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            marginTop={"50px"}
            width={"100%"}
          >
            <TextField
              className={style.textField}
              placeholder="House Name"
              name="name"
              value={houseData.name}
              onChange={onChange}
            />
            <TextField
              className={style.textField}
              placeholder="House address"
              name="address"
              value={houseData.address}
              onChange={onChange}
            />
            <Box
              display={"flex"}
              justifyContent={"center"}
              justifyContent="space-evenly"
            >
              <Button onClick={saveData} color="primary" variant="outlined">
                save
              </Button>
              <Button onClick={cancel} color="secondary" variant="outlined">
                cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default UpdateHomePopUp;
