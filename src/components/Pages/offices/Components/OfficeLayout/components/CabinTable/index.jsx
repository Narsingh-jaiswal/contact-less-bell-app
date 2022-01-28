import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Box,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AddMemberForm from "../AddMemberForm";
import { useState } from "react";

const CabinTable = ({ cabinData: allCabinData }) => {
  const [cabinData, setCabinData] = useState({});
  const [isAddMemberFormOpen, setIsAddMemberFormOpen] = useState(false);
  const setCabin = (cabinId, officeId) => {
    setCabinData({ cabinId, officeId });
    setIsAddMemberFormOpen(true);
  };

  const toggleAddMemberForm = () => {
    setIsAddMemberFormOpen(!isAddMemberFormOpen);
  };

  return (
    <Box marginTop="20px">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="left">cabin Name</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell align="center">
                <Button disabled>
                  <SupervisorAccountIcon />
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allCabinData?.map((cabinDataRow, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell align="left">{cabinDataRow.name}</TableCell>
                <TableCell align="left">{cabinDataRow.address}</TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() =>
                      setCabin(cabinDataRow?.cabinId, cabinDataRow.officeId)
                    }
                  >
                    <SupervisorAccountIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isAddMemberFormOpen && (
        <AddMemberForm
          toggleAddMemberForm={toggleAddMemberForm}
          cabinData={cabinData}
        />
      )}
    </Box>
  );
};

export default CabinTable;
