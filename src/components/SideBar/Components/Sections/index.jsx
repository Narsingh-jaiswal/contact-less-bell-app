import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "./style";

const Section = ({ sectionData }) => {
  const styles = useStyles();

  return (
    <Box>
      <Typography className={styles.title} variant="caption">
        {sectionData?.sectionsTitle}
      </Typography>
      {sectionData.data.map((subsectionData, index) => (
        <Accordion key={index} className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.section}>
              {subsectionData.subSectionTitle}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className={styles.listContainer}>
              {subsectionData.data.map(
                (subsectionDataElement, subsectionDataIndex) => (
                  <li className={styles.list} key={subsectionDataIndex}>
                    <Typography className={styles.listData}>
                      {subsectionDataElement}
                    </Typography>
                  </li>
                )
              )}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Section;
