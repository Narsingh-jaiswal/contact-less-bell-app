import { Box, Button, makeStyles } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import bellIcon from "../../assets/bellIcon.jpeg";
import sendAcknowledge from "../../util/HomeUtility/sendAcknowledge";
import doorbell from "../../assets/roman_reigns.mp3";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  bellLogo: {
    width: 300,
    borderRadius: 50,
  },
  textField: {
    marginTop: 20,
    backgroundColor: "#e5f1ff",
    borderRadius: 50,
    padding: "10px 20px",
  },
  acknowledgeContainer: {
    width: "70%",
    marginTop: 20,
    display: "flex",
    justifyContent: "space-evenly",
  },
});

const BellUi = ({ updateRequest }) => {
  const style = useStyle();
  const audioRef = useRef(null);
  const navigate = useNavigate();
  const [bellUrl, setBellUrl] = useState(doorbell);

  useEffect(() => {
    if (updateRequest[0]?.bellUrl) {
      setBellUrl(updateRequest[0].bellUrl);
    }
  }, [updateRequest]);

  const stop = () => {
    const audio = audioRef.current;
    audio.pause();
  };

  const sendMessage = async (acknowledgeMessage) => {
    const requestData = updateRequest[updateRequest.length - 1];
    sendAcknowledge(requestData, acknowledgeMessage)
      .then((response) => {
        console.log({ response });
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/dashboard");
  };

  return (
    <Box className={style.container}>
      <img className={style.bellLogo} src={bellIcon} alt="" onClick={stop} />
      <audio ref={audioRef} src={bellUrl} autoPlay loop></audio>
      <Box className={style.acknowledgeContainer}>
        <Button
          onClick={() => {
            sendMessage("receive");
          }}
          variant="contained"
          color="primary"
        >
          Receive
        </Button>
        <Button
          onClick={() => {
            sendMessage("cancel");
          }}
          variant="contained"
          color="secondary"
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default BellUi;
