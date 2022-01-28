import { Box, makeStyles } from "@material-ui/core";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../services/firebase/firebase";
import sendRequestToHouseMember from "../../util/HomeUtility/sendRequestToHouse";
import MuiAlert from "@material-ui/lab/Alert";

const useStyle = makeStyles({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Bell = () => {
  const [houseData, setHouseData] = useState();
  const urlSearchParams = new URLSearchParams(window.location.search);
  const houseId = urlSearchParams.get("houseId");
  const [responseData, setResponseData] = useState({});

  const style = useStyle();

  useEffect(() => {
    if (houseId) {
      const docRef = doc(db, "houses", houseId);
      getDoc(docRef)
        .then((houseDoc) => {
          setHouseData(houseDoc.data());
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [houseId]);

  useEffect(() => {
    if (houseData) {
      sendRequestToHouseMember(houseId)
        .then((data) => {
          const requestedDocRef = doc(
            db,
            `houses/${houseId}/requests/${data.id}`
          );

          onSnapshot(requestedDocRef, (data) => {
            setResponseData(data.data());
          });
        })
        .catch((error) => {
          console.log({ error });
        });
    }
  }, [houseData]);

  return (
    <Box display="flex" justifyContent="center">
      <Box className={style.container}>
        <Alert severity="info">
          Your request has been send... please wait some will respond you
        </Alert>
        {responseData?.isReceived === "receive" && (
          <Alert severity="success">please wait i will be their</Alert>
        )}
        {responseData?.isReceived === "cancel" && (
          <Alert severity="error">
            Hey their, Thanks to come but i can't reach you right now
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default Bell;
