import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const DoorBellTable = ({ memberData }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="left">Mamber Name</TableCell>
            <TableCell align="left">message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {memberData.map((memberDataRow, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell align="left">{memberDataRow.name}</TableCell>
              <TableCell align="left">
                {memberDataRow?.status?.acknowledgeMessage || ""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DoorBellTable;
