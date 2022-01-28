import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

const sendAcknowledge = async (requestData, acknowledgeMessage) => {
  const requestDocRef = doc(
    db,
    `houses/${requestData.houseId}/requests/${requestData.requestId}`
  );

  const acknowledgeMessageResponse = {
    isReceived: acknowledgeMessage,
  };
  try {
    const response = await updateDoc(requestDocRef, acknowledgeMessageResponse);
    return response;
  } catch (error) {
    return error;
  }
};

export default sendAcknowledge;
