import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

export const getOfficeData = async (uid) => {
  const officeRef = collection(db, "offices");
  const houseQuery = query(officeRef, where("ownerId", "==", uid));
  const docs = getDocs(houseQuery);
  const officeDocData = [];
  const data = await docs;
  data.forEach((doc) => {
    officeDocData.push({ ...doc.data(), id: doc.id });
  });
  return officeDocData;
};
