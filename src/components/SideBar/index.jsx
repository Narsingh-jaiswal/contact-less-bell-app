import { Box, Typography } from "@material-ui/core";
import { sidebarMockData } from "../../mock/sidebarMockData";
import Section from "./Components/Sections";
import useStyles from "./style";

const SideBar = () => {
  const styles = useStyles();
  return (
    <Box className={styles.sidebarContainer}>
      <Box>
        <Typography className={styles.title}>Contact Less Bell</Typography>
      </Box>
      <Box className={styles.sectionContainer}>
        {sidebarMockData.map((element, index) => (
          <Section sectionData={element} key={index} />
        ))}
      </Box>
    </Box>
  );
};
export default SideBar;
