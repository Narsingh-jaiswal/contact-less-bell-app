import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

const getHouseData = async (houseData) => {
  const houseDataPromise = [];

  houseData?.forEach((houseId) => {
    const houseDocRef = doc(db, "houses", houseId);
    houseDataPromise.push(getDoc(houseDocRef));
  });

  try {
    const resolvedData = await Promise.all(houseDataPromise);
    return resolvedData.map((houseData_1) => ({
      houseId: houseData_1.id,
      ...houseData_1.data(),
    }));
  } catch (error) {
    return error;
  }
};

export default getHouseData;
