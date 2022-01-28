import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
import RequestCards from "./components/Card";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

const useStyle = makeStyles({
  container: {
    padding: "20px 0px 15px",
  },
});

const CabinBell = ({ user }) => {
  const [item, setItem] = useState([]);
  const { officeId } = useParams();
  const style = useStyle();
  const navigate = useNavigate();

  useEffect(() => {
    if (officeId) {
      const docRef = collection(db, `offices/${officeId}/items`);
      getDocs(docRef).then((data) => {
        const docs = data.docs;

        const response = docs.map((doc) => doc.data());
        setItem(response);
      });
    }
  }, [officeId]);

  const backButton = () => {
    navigate(-1);
  };

  return (
    <Box className={style.container}>
      <Button onClick={backButton}>
        <KeyboardBackspaceIcon />
      </Button>
      {item.length === 0 ? (
        <></>
      ) : (
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          {item.map((item, index) => (
            <Grid item lg={3} md={4} sm={6} xs={10} key={index}>
              <RequestCards
                user={user}
                officeId={officeId}
                title={item.name}
                img={item.img}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default CabinBell;
