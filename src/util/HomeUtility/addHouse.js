import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../services/firebase/firebase";

const addHouse = async (houseDetail) => {
  return addDoc(collection(db, "houses"), houseDetail)
    .then(async (data) => {
      if (data) {
        const ownerDocRef = doc(db, "users", houseDetail.ownerId);
        const res = await updateDoc(ownerDocRef, {
          myHouses: arrayUnion(data.id),
        });
        return res;
      }
    })
    .catch((error) => {
      return error;
    });
};

export default addHouse;
