import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

export const getAllUsers = async () => {
  const usersRef = collection(db, "users");
  const usersData = getDocs(usersRef);
  const users = await usersData;
  const userDataResponse = [];
  users.forEach((doc) => {
    userDataResponse.push({ ...doc.data(), uid: doc.id });
  });
  return userDataResponse;
};
