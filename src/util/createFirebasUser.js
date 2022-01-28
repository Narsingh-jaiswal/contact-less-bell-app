import { doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../services/firebase/firebase";

const createUser = async (userDetail) => {
  const auth = getAuth();
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      userDetail.email,
      userDetail.password
    );

    return setDoc(doc(db, "users", response?.user?.uid), userDetail)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });
  } catch (error_1) {
    return error_1;
  }
};

export default createUser;
