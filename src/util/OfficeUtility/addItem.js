import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { db } from "../../services/firebase/firebase";

export const uploadItemFile = async (file, name, officeId) => {
  const storage = getStorage();
  const storageRef = ref(storage, `offices/${officeId}/item/${name}`);

  // 'file' comes from the Blob or File API
  const snapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(snapshot.ref);
  return url;
};

export const addItem = async (officeId, itemData) => {
  const ref = collection(db, `offices/${officeId}/items`);
  try {
    const response = await addDoc(ref, itemData);
    return response;
  } catch (error) {
    return error;
  }
};
