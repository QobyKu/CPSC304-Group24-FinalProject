import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuModalWrapped from './MenuModal';
import ButtonAppBar from './ButtonAppBar';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

const menu = [
    {
        iid: 1,
        name: 'Beer',
        service: 'Bar',
        price: 2.99
    },
    {
        iid: 2,
        name: 'Wine',
        service: 'Bar',
        price: 4.99
    },
    {
        iid: 3,
        name: 'Pizza',
        service: 'Restaurant',
        price: 10
    },
    {
        iid: 4,
        name: 'Burger',
        service: 'Restaurant',
        price: 12
    },
    {
        iid: 5,
        name: 'Ice Cream',
        service: 'Restaurant',
        price: 8
    },

];


class EditMenuPrice extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <ButtonAppBar />
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>IID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Service</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Edit Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {menu.map(item => (
                                <TableRow key={item.iid}>
                                    <TableCell component="th" scope="row">
                                        {item.iid}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {item.name}
                                    </TableCell>
                                    <TableCell align="right">{item.service}</TableCell>
                                    <TableCell align="right">${item.price}</TableCell>
                                    <TableCell align="right"><MenuModalWrapped /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}


export default withStyles(styles)(EditMenuPrice);