import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../../../services/firebase/firebase";

const useStyles = makeStyles({
  card: {
    minWidth: 300,
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    background: "rgba( 255, 255, 255, 0.25 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    borderRadius: "10px",
  },
  logo: {
    borderRadius: "50%",
    width: 50,
    height: 50,
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 50,
  },
  title: {
    color: "white",
    fontWeight: 600,
    fontSize: "larger",
  },
});

const RequestCards = ({ user, title, img, officeId }) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [cabinId, setCabinId] = useState();
  useEffect(() => {
    if (user.uid) {
      const cabinId = user?.officeData?.cabinId;
      setCabinId(cabinId);
    }
  }, [user]);

  const makeOrder = (order) => {
    const initialOrder = {
      createdAt: serverTimestamp(),
      orderBy: user.name,
      cabinId,
      order,
      isReceived: false,
      receivedBy: "",
      receivedAt: "",
      isUnderProcess: false,
      underProcessAt: "",
      isDelivered: false,
    };
    const requestRef = collection(db, `offices/${officeId}/requests`);
    addDoc(requestRef, initialOrder).then((response) => {
      navigate(`order/${response.id}`);
    });
  };

  return (
    <>
      <Card onClick={() => makeOrder(title)} className={styles.card}>
        <CardContent>
          <Box className={styles.titleContainer}>
            <Typography gutterBottom className={styles.title}>
              {title}
            </Typography>
            {img && <img src={img} alt="" className={styles.logo} />}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default RequestCards;
