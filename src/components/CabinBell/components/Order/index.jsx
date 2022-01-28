import { Box, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../../services/firebase/firebase";
import OrderTimeline from "../../../TimeLine";

const Order = () => {
  const { officeId, orderId } = useParams();

  const [requestData, setRequestData] = useState();
  useEffect(() => {
    const requestRef = doc(db, `offices/${officeId}/requests/${orderId}`);
    onSnapshot(requestRef, (snapShotData) => {
      const data = snapShotData.data();
      setRequestData(data);
    });
  }, [officeId, orderId]);

  return (
    <>
      <Box>
        <Alert severity="success">
          Your request has been sent please wait....
        </Alert>
      </Box>
      <OrderTimeline orderData={requestData} />
    </>
  );
};
export default Order;
