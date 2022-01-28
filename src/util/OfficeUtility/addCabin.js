import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

export const addCabin = async (officeId, cabinData) => {
  const cabinCollectinRef = collection(db, `offices/${officeId}/cabins`);
  try {
    const response = await addDoc(cabinCollectinRef, cabinData);
    return response;
  } catch (error) {
    return error;
  }
};

export const addCabinIdIntoOffice = async (officeId, cabinId) => {
  const officeDocRef = doc(db, `offices/${officeId}`);
  try {
    const response = await updateDoc(officeDocRef, {
      cabins: arrayUnion(cabinId),
    });
    return response;
  } catch (error) {
    return error;
  }
};
