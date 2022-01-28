import { Grid } from "@material-ui/core";
import MyHomeCard from "./components/card";

const HomeDataCard = ({ houseData }) => {
  return (
    <>
      <Grid container justifyContent="center" spacing={2}>
        {houseData.map((house, index) => (
          <Grid item key={index}>
            <MyHomeCard house={house} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomeDataCard;
