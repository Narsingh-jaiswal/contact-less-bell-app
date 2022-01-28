import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

const getAllMembersData = (membersId) => {
  const memberRefs = [];
  const membersData = [];
  membersId.forEach((id) => {
    memberRefs.push(doc(db, `users/${id}`));
  });

  memberRefs.forEach((element) => {
    membersData.push(getDoc(element));
  });

  return Promise.all(membersData);
};

export default getAllMembersData;
