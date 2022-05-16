import { Box, Button, Typography } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import GetAppIcon from "@material-ui/icons/GetApp";
import QRCode from "qrcode.react";
import { useState } from "react";
import QrCode from "../qrCodeModal";
import UpdateHomePopUp from "../updateHomePopUp";
import { useStyle } from "./style";

const MyHomeCard = ({ house }) => {
  const style = useStyle();
  const [qrCodeImg, setQrCodeImg] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  
  const getQrCode = (id) => {
    const canvas = document.getElementById(id);
    const img = canvas.toDataURL("image/png");
    setQrCodeImg(img);
  };

  return (
    <>
      {qrCodeImg && <QrCode img={qrCodeImg} setQrCodeImg={setQrCodeImg} />}
      <Box className={style.cardContainer}>
        <Box display={"flex"} marginBottom={"20px"} alignItems={"center"}>
          <img src={house.img} alt="" className={style.houseImg} />
          <Box className={style.detailContainer}>
            <Typography className={style.title}>{house.name}</Typography>
            <Typography className={style.subTitle} variant="caption">
              {house.address}
            </Typography>
          </Box>
          <SettingsIcon
            className={style.setting}
            onClick={() => {
              setIsUpdate(true);
            }}
          />
        </Box>
        <Box>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <QRCode
              className={style.qr}
              value={`${document.location.origin}/doorbell/?houseId=${house.houseId}`}
              id={house.houseId}
            />
            <Button
              onClick={() => {
                getQrCode(house.houseId);
              }}
              variant="contained"
              endIcon={<GetAppIcon />}
              fullWidth
              color="primary"
            >
              download
            </Button>
          </Box>
        </Box>
      </Box>
      {isUpdate && (
        <UpdateHomePopUp homeData={house} setIsUpdate={setIsUpdate} />
      )}
    </>
  );
};

export default MyHomeCard;
