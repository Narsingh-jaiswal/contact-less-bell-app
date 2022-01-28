import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

const sendRequestToHouseMember = async (houseId) => {
  const houseRequestCollectionRef = collection(
    db,
    `houses/${houseId}/requests`
  );

  const initialRequestObj = {
    createdAt: serverTimestamp(),
    isReceived: false,
  };
  try {
    const response = await addDoc(houseRequestCollectionRef, initialRequestObj);
    return response;
  } catch (error) {
    return error;
  }

  // const docRef = doc(db, `users/${id}/requests/blLXjBT1ScFsU1Si3Ywl`);
  // const createdAt = new Date().getTime();
  // console.log(createdAt);
  // try {
  //   const data = await updateDoc(docRef, {
  //     request: arrayUnion({
  //       msg: `knock knock `,
  //       houseId,
  //       createdAt,
  //     }),
  //   });
  //   return data;
  // } catch (error) {
  //   return error;
  // }
};

export default sendRequestToHouseMember;
