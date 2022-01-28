import { Box, Button, makeStyles } from "@material-ui/core";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../../../../services/firebase/firebase";
import { getAllCabinData } from "../../../../../util/OfficeUtility/getAllCabinData";
import Loader from "../../../../Loader";
import AddCabinModal from "./components/AddCabinModal";
import CabinTable from "./components/CabinTable";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import AddItemModal from "./components/AddItemModal";

const useStyle = makeStyles({
  actionButton: {
    marginLeft: 10,
  },
});

const OfficeLayout = ({ user }) => {
  const params = useParams();
  const [isCabinPopupOpen, setIsCabinPopupOpen] = useState(false);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [allCabinData, setAllCabinData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const style = useStyle();
  const navigate = useNavigate();

  const toggleCabinPopUp = () => {
    setIsCabinPopupOpen(!isCabinPopupOpen);
  };

  const toggleItemModal = () => {
    setIsAddItemModalOpen(!isAddItemModalOpen);
  };

  useEffect(() => {
    if (params?.id) {
      const officeRef = doc(db, `offices/${params.id}`);
      getDoc(officeRef).then((data) => {
        setIsLoading(true);
        const officeData = data.data();
        getAllCabinData(data.id, officeData.cabins)
          .then((cabinDocsData) => {
            const allCabinData = cabinDocsData.map((element) => ({
              cabinId: element.id,
              officeId: params.id,
              ...element.data(),
            }));
            setAllCabinData(allCabinData);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  }, [params?.id]);

  const backButton = () => {
    navigate(-1);
  };

  return (
    <Box>
      <Button onClick={backButton}>
        <KeyboardBackspaceIcon />
      </Button>
      <Button
        onClick={toggleCabinPopUp}
        variant="outlined"
        color="primary"
        className={style.actionButton}
      >
        Add cabin
      </Button>
      <Button
        onClick={toggleItemModal}
        variant="outlined"
        color="secondary"
        className={style.actionButton}
      >
        Add Item
      </Button>
      {isCabinPopupOpen && (
        <AddCabinModal
          officeId={params.id}
          toggleCabinPopUp={toggleCabinPopUp}
          user={user}
        />
      )}
      {isAddItemModalOpen && (
        <AddItemModal toggleItemModal={toggleItemModal} officeId={params.id} />
      )}
      <CabinTable cabinData={allCabinData} />
      {isLoading && <Loader />}
    </Box>
  );
};
export default OfficeLayout;
