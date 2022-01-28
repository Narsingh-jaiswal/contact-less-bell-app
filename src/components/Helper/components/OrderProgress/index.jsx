import React, { useEffect, useState } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Button } from "@material-ui/core";
import {
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../../services/firebase/firebase";
import { useNavigate } from "react-router-dom";

const OrderProgress = ({ orderId, officeId }) => {
  const [orderData, setOrderData] = useState({});
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const stages = [
    { isUnderProcess: true, underProcessAt: serverTimestamp() },
    { isDelivered: true },
  ];

  const orderDocRef = doc(db, `offices/${officeId}/requests/${orderId}`);

  useEffect(() => {
    onSnapshot(orderDocRef, (snapShotData) => {
      setOrderData(snapShotData.data());
    });
  }, [orderId, officeId]);

  const updateStatus = () => {
    if (count < stages.length) {
      updateDoc(orderDocRef, stages[count]).then((data) => {
        setCount(count + 1);
      });
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              {orderData?.isReceived && <CheckCircleIcon />}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Received</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              {orderData?.isUnderProcess && <CheckCircleIcon />}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Under progress</Typography>
          </TimelineContent>
        </TimelineItem>
        {/* <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              {orderData?.isOutToDeliver && <CheckCircleIcon />}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Out to deliver</Typography>
          </TimelineContent>
        </TimelineItem> */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              {orderData?.isDelivered && <CheckCircleIcon />}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Delivered</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <Button color="primary" variant="contained" onClick={updateStatus}>
        Next
      </Button>
    </>
  );
};

export default OrderProgress;
