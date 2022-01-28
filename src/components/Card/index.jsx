import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  logo: {
    borderRadius: "50%",
    width: 50,
    height: 50,
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 50,
  },
  root: {
    background: "rgba( 255, 255, 255, 0.25 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    borderRadius: 10,
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
  button: {
    backgroundColor: "#686897",
    color: "white",
    "&:hover": {
      backgroundColor: "#686897",
    },
  },
  title: {
    fontWeight: 900,
    color: "white",
  },
});

const Cards = ({ title, view, img }) => {
  const navigate = useNavigate();
  const styles = useStyles();

  return (
    <Card className={styles.root} onClick={() => navigate(`/${view}`)}>
      <CardContent>
        <Box className={styles.titleContainer}>
          <Typography className={styles.title} gutterBottom>
            {title}
          </Typography>
          {img && <img src={img} alt="" className={styles.logo} />}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Cards;
