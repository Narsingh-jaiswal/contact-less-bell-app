import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const OfficeTable = ({ officeData }) => {
  const navigate = useNavigate();

  const onRowClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <Box marginTop="15px">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="left">Office Name</TableCell>
              <TableCell align="left">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {officeData.map((officeDataRow, index) => (
              <TableRow
                key={officeDataRow.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => onRowClick(officeDataRow.id)}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell align="left">{officeDataRow.name}</TableCell>
                <TableCell align="left">{officeDataRow.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OfficeTable;
