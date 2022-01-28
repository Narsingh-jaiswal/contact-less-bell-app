import { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import Cards from "../../Card";
import homeLogo from "../../../assets/home.png";
import officeLogo from "../../../assets/officeLogo.jpeg";
import officeMemberLogo from "../../../assets/officeMember.jpeg";
import logo from "../../../assets/contactLessLogo.png";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { getAuth, signOut } from "firebase/auth";
import useStyles from "./style";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../services/firebase/firebase";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ user, memberOfHouses, setUpdateRequest }) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const auth = getAuth();
  const [workspaceUrl, setWorkSpaceUrl] = useState("");

  useEffect(() => {
    if (user?.uid) {
      const employeeType = user?.officeData?.employeeType;
      const officeId = user?.officeData?.officeId;

      if (employeeType === "Professional staff") {
        setWorkSpaceUrl(`cabinbell/${officeId}`);
      } else if (employeeType === "office Boy") {
        setWorkSpaceUrl(`helper/${officeId}`);
      }
    }
  }, [user]);

  useEffect(() => {
    if (memberOfHouses?.length > 0) {
      memberOfHouses.forEach((house) => {
        const { houseId } = house;
        const houseRequestCollectionRef = collection(
          db,
          `houses/${houseId}/requests`
        );
        const houseRequestQuery = query(
          houseRequestCollectionRef,
          where("isReceived", "==", false),
          orderBy("createdAt")
        );

        onSnapshot(houseRequestQuery, (doc) => {
          const snapShotData = [];
          doc.docs.forEach((doc) => {
            const data = doc.data();
            if (data.isReceived === false) {
              navigate("/bell");
            }
            snapShotData.push({
              ...data,
              houseId,
              requestId: doc.id,
              bellUrl: house?.bell,
            });
          });
          if (snapShotData.length) {
            setUpdateRequest(snapShotData);
          }
        });
      });
    }
  }, [memberOfHouses]);

  return (
    <Box>
      <img src={logo} alt="" width={"100%"} className={styles.banner} />
      <Box className={styles.header}>
        <Button
          onClick={() => {
            signOut(auth);
          }}
        >
          <PowerSettingsNewIcon className={styles.userName} />
        </Button>
        <Typography variant="subtitle1" className={styles.userName}>
          {user?.name && `@${user?.name}`}
        </Typography>
      </Box>
      <Box className={styles.MainContainer}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item lg={5} md={4} sm={6} xs={10}>
            <Cards title="My Home" view="homes" img={homeLogo} />
          </Grid>
          <Grid item lg={5} md={4} sm={6} xs={10}>
            <Cards title="My Office" view="office" img={officeLogo} />
          </Grid>
          {workspaceUrl && (
            <Grid item lg={5} md={4} sm={6} xs={10}>
              <Cards
                title="My WorkSpace"
                view={workspaceUrl}
                img={officeMemberLogo}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
