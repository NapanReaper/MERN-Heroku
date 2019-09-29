import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import SearchIcon from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


function createData(id, date, email, totalPrice, status, orderDetail) {
    return { id, date, email, totalPrice, status, orderDetail };
}
  
var today = new Date()
var date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear()
const rows = [
    createData('order1', date,"user1@mail.com", 40000, 'delivered', [
        {
            fruit: "Apple",
            quantity: 1,
            price: "20000"
        },
        {
            fruit: "Orange",
            quantity: 1,
            price: "20000"
        },
    ]),
    createData('order2', date,"user2@mail.com", 100000, 'delivered', [
        {
            fruit: "Apple",
            quantity: 1,
            price: "20000"
        },
        {
            fruit: "Orange",
            quantity: 1,
            price: "20000"
        },
    ]),
    createData('order3', date,"user3@mail.com", 60000, 'delivered', [
        {
            fruit: "Apple",
            quantity: 1,
            price: "20000"
        },
        {
            fruit: "Orange",
            quantity: 1,
            price: "20000"
        },
    ]),
    createData('order4', date,"user4@mail.com", 50000, 'delivered', [
        {
            fruit: "Apple",
            quantity: 1,
            price: "20000"
        },
        {
            fruit: "Orange",
            quantity: 1,
            price: "20000"
        },
    ]),
    createData('order5', date,"user5@mail.com", 45000, 'delivered', [
        {
            fruit: "Apple",
            quantity: 1,
            price: "20000"
        },
        {
            fruit: "Orange",
            quantity: 1,
            price: "20000"
        },
    ]),
    createData('order6', date,"user6@mail.com", 25000, 'delivered', [
        {
            fruit: "Apple",
            quantity: 1,
            price: "20000"
        },
        {
            fruit: "Orange",
            quantity: 1,
            price: "20000"
        },
    ]),
    createData('order7', date,"user7@mail.com", 30000, 'delivered', [
        {
            fruit: "Apple",
            quantity: 1,
            price: "20000"
        },
        {
            fruit: "Orange",
            quantity: 1,
            price: "20000"
        },
    ]),
    createData('order8', date,"user8@mail.com", 40000, 'delivered', [
        {
            fruit: "Apple",
            quantity: 1,
            price: "20000"
        },
        {
            fruit: "Orange",
            quantity: 1,
            price: "20000"
        },
    ]),
];


class OrderList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: rows,
            page: 0,
            rowsPerPage: 5,
            openOrderInfo: false,
            orderDetail:[]
        }

        this.handleOpenOrderInfo = this.handleOpenOrderInfo.bind(this)
        this.handleCloseOrderInfo = this.handleCloseOrderInfo.bind(this)
    }

    handleChangePage = (event, newPage) => {
        this.setState({ page: newPage })
    };

    handleChangeRowsPerPage = event => {
        this.setState({
            rowsPerPage: event.target.value,
            page: 0
        })

    };

    handleOpenOrderInfo(id) {
        let orders = this.state.data
        let detail = orders.filter(o => o.id === id)[0].orderDetail
        this.setState({
            openOrderInfo: true,
            orderDetail: detail,
        })
    }

    handleCloseOrderInfo() {
        this.setState({
            openOrderInfo: false,
            detail: [],
        })

    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid xs={11}><h3>Order List</h3></Grid>
                </Grid>
                <div style={{ marginTop: 5 }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>Index</TableCell>
                                <TableCell align="left">OrderID</TableCell>
                                <TableCell align="left">Date</TableCell>
                                <TableCell align="left">User email</TableCell>
                                <TableCell align="left">Total price</TableCell>
                                <TableCell align="left">Status</TableCell>
                                <TableCell align="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {this.state.data.slice(this.state.page * this.state.rowsPerPage,
                                this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((row, index) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                            <TableCell>{this.state.page * this.state.rowsPerPage + index + 1}</TableCell>
                                            <TableCell component="th" scope="row" align="left">
                                               {row.id}
                                            </TableCell>
                                            <TableCell align="left">{row.date}</TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="left">{row.totalPrice}</TableCell>
                                            <TableCell align="left">{row.status}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Detail">
                                                    <SearchIcon style={{cursor: 'pointer'}} color="primary" onClick={() => {this.handleOpenOrderInfo(row.id)}}/>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={this.state.data.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    backIconButtonProps={{
                        'aria-label': 'previous page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'next page',
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
                <Dialog
                    open={this.state.openOrderInfo}
                    onClose={this.handleCloseOrderInfo}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Order detail</DialogTitle>
                    <DialogContent>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>Index</TableCell>
                                <TableCell align="left">Fruit</TableCell>
                                <TableCell align="left">Quantity</TableCell>
                                <TableCell align="left">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.orderDetail.map((row, index) => {
                                return (
                                    <TableRow>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell align="left">{row.fruit}</TableCell>
                                        <TableCell align="left">{row.quantity}</TableCell>
                                        <TableCell align="left">{row.price}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseOrderInfo} variant="contained" color="primary">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default OrderList