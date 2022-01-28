import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";
import OrderProgress from "./components/OrderProgress";
const Helper = ({ user }) => {
  const { orderId, officeId } = useParams();
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    if (orderId) {
      const orderDocRef = doc(db, `offices/${officeId}/requests/${orderId}`);
      const updatedOrderDoc = {
        isReceived: true,
        receivedAt: serverTimestamp(),
        receivedBy: user?.name,
      };
      updateDoc(orderDocRef, updatedOrderDoc);
    }
  }, [orderId]);

  return (
    <>
      <OrderProgress orderId={orderId} officeId={officeId} />
    </>
  );
};
export default Helper;
