import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadFile = async (houseId, path, file) => {
  const storage = getStorage();
  const storageRef = ref(storage, `${houseId}/${path}`);

  // 'file' comes from the Blob or File API
  const snapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(snapshot.ref);
  return url;
};
