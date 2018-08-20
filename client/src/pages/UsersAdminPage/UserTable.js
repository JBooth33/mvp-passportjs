import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '90%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(firstName, lastName, phoneNumber, title, role, emailAddress, status, dateCreated) {
  id += 1;
  return { id, firstName, lastName, phoneNumber, title, role, emailAddress, status, dateCreated};
}

const rows = [
    // createData(111, 'Jonathon', 'Engelien', 7153237605, 'CEO', 'Admin', 'jonathon.engelien@gmail.com', 'active'),
    // createData(112, 'James', 'Smith', 7153237605, 'Accountant', 'Admin', 'jonathon.engelien@gmail.com', 'active'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell numeric>User Number</TableCell>
            <TableCell string>First Name</TableCell>
            <TableCell string>Last Name</TableCell>
            <TableCell numeric>Phone Number</TableCell>
            <TableCell string>Title</TableCell>
            <TableCell string>Role</TableCell>
            <TableCell string>Email Address</TableCell>
            <TableCell string>Status</TableCell>
            <TableCell string>Date Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell string>{row.firstName}</TableCell>
                <TableCell string>{row.lastName}</TableCell>
                <TableCell numeric>{row.phoneNumber}</TableCell>
                <TableCell string>{row.title}</TableCell>
                <TableCell string>{row.role}</TableCell>
                <TableCell string>{row.emailAddress}</TableCell>
                <TableCell string>{row.status}</TableCell>
                <TableCell string>{row.dateCreated}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);