import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, makeStyles } from "@material-ui/core";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import doorbell from "../../assets/doorbell.mp3";
import bellIcon from "../../assets/bellIcon.jpeg";
import { db } from "../../services/firebase/firebase";
import OrderTable from "./Components/OrderTable";

const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bellLogo: {
    width: 200,
    borderRadius: 50,
  },
  textField: {
    marginTop: 20,
    backgroundColor: "#e5f1ff",
    borderRadius: 50,
    padding: "10px 20px",
  },
  acknowledgeContainer: {
    margin: "20px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

const HelperBellUi = () => {
  const [requests, setRequests] = useState({});
  const style = useStyle();
  const audioRef = useRef(null);
  const { officeId } = useParams();

  useEffect(() => {
    if (officeId) {
      const refString = `offices/${officeId}`;

      const requestQuery = query(
        collection(db, `${refString}/requests`),
        where("isReceived", "==", false),
        orderBy("createdAt")
      );
      const requestsData = [];
      const audio = audioRef.current;

      onSnapshot(requestQuery, (snapShotData) => {
        const orderData = snapShotData.docs.map((orderDoc) => ({
          ...orderDoc.data(),
          orderId: orderDoc.id,
        }));

        setRequests(orderData);
      });
    }
  }, [officeId]);

  useEffect(() => {
    const audio = audioRef?.current;
    audio.pause();
    if (requests?.length) {
      audio?.play();
    }
  }, [requests]);

  const stop = () => {
    const audio = audioRef.current;
    audio.pause();
  };

  return (
    <>
      <Box className={style.container}>
        <img className={style.bellLogo} src={bellIcon} alt="" onClick={stop} />
        <audio ref={audioRef} src={doorbell} allow="autoplay" loop autoPlay />
      </Box>
      <Box>
        <OrderTable officeId={officeId} orders={requests} />
      </Box>
    </>
  );
};

export default HelperBellUi;
