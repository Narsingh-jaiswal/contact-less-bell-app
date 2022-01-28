import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

export const updateHouseData = async (houseId, data) => {
  const houseRef = doc(db, `houses/${houseId}`);
  return await updateDoc(houseRef, data);
};
