import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

export const addNewOffice = async (officeData) => {
  const officeRef = collection(db, "offices");
  try {
    const res = await addDoc(officeRef, officeData);
    return res;
  } catch (error) {
    return error;
  }
};
