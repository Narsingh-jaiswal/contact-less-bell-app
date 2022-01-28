import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import receiveIcon from "../../assets/received.jpeg";
import foodProcess from "../../assets/food-mixer.jpeg";
import foodDelivery from "../../assets/foodDelivery.jpeg";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  logo: {
    width: 30,
    borderRadius: "50%",
  },
}));

const getTime = (time) => {
  const date = new Date(time * 1000);
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

const OrderTimeline = ({ orderData }) => {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      {orderData?.isReceived && (
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {getTime(orderData?.receivedAt?.seconds)}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Order received
              </Typography>
              <Typography>By {orderData?.receivedBy}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      )}
      {orderData?.isUnderProcess && (
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {getTime(orderData?.underProcessAt?.seconds)}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <img src={foodProcess} alt="" className={classes.logo} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Under Process
              </Typography>
              <Typography>Please wait it take some time</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      )}
      {/* {orderData?.isOutToDeliver && (
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {getTime(orderData?.outToDeliverAt?.seconds)}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <img src={foodDelivery} alt="" className={classes.logo} />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Your order is out to deliver
              </Typography>
              <Typography>please wait</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      )} */}
      {orderData?.isDelivered && (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <img src={receiveIcon} alt="" className={classes.logo} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Delivered
              </Typography>
              <Typography>Thanks, Have a nice day</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      )}
    </Timeline>
  );
};

export default OrderTimeline;
