import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

export const getAllCabinData = async (officeId, cabinIds) => {
  console.log(officeId, cabinIds);
  const cabinDocRefs = cabinIds.map((element) =>
    doc(db, `offices/${officeId}/cabins/${element}`)
  );

  const cabinDocs = cabinDocRefs.map((element) => getDoc(element));

  try {
    const response = await Promise.all(cabinDocs);
    return response;
  } catch (error) {
    return error;
  }
};
