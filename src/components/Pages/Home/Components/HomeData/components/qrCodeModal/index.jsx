import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect } from "react";

const useStyle = makeStyles({
  container: {
    position: "absolute",
    width: "100%",
    height: "100vh",
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: "#d3d0d0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  qrCodeContainer: {
    display: "flex",
    justifyContent: "center",
    padding: 50,
    backgroundColor: "white",
    borderRadius: 20,
  },
});

const QrCode = ({ img, setQrCodeImg }) => {
  useEffect(() => {
    if (img) {
      window.print();
      setQrCodeImg("");
    }
  }, [img]);

  const style = useStyle();
  return (
    <>
      <Box className={style.container}>
        <Box className={style.qrCodeContainer}>
          <img src={img} alt="" />
        </Box>
      </Box>
    </>
  );
};
export default QrCode;
