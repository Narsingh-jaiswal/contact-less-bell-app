import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { useStyles } from "./style";
import { useNavigate } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const OrderTable = ({ orders, officeId }) => {
  const classes = useStyles();

  const navigate = useNavigate();

  const handleOrder = (id) => {
    navigate(`/received/${officeId}/${id}`);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="right">order</StyledTableCell>
            <StyledTableCell align="right">Order By</StyledTableCell>
            <StyledTableCell align="right">Receive Order</StyledTableCell>
          </TableRow>
        </TableHead>
        {!!orders.length && (
          <TableBody>
            {orders?.map((row, index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="right">{row?.order}</StyledTableCell>
                <StyledTableCell align="right">{row?.orderBy}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    className={classes.receive}
                    onClick={() => handleOrder(row?.orderId)}
                  >
                    receive
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
