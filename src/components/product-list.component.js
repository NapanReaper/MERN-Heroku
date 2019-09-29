import React from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import productPlaceHolder from '../asset/img/productPlaceholder.png'
import AddProductModal from './addProductModal.component'
import UpdateProductModal from './updateProductModal.component'

function createData(name, brand, image, manufactureDate, expiryDate, price, stock) {
    return { name, brand, image: productPlaceHolder, manufactureDate, expiryDate, price, stock };
}
  
var today = new Date()
var date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear()
const rows = [
    createData('Apple', 'brand1', '', date, date, 40, 20),
    createData('Banana', 'brand1', '', date, date, 12, 20),
    createData('Pineapple', 'brand1', '', date, date, 12, 20),
    createData('Watermelon', 'brand1', '', date, date, 12, 20),
    createData('Taro', 'brand1', '', date, date, 12, 20),
    createData('Orange', 'brand1', '', date, date, 12, 20),
    createData('Lemon', 'brand1', '', date, date, 12, 20),
    createData('Jack fruit', 'brand1', '', date, date, 12, 20),
    createData('Grape', 'brand1', '', date, date, 12, 20),
    createData('Mango', 'brand1', '', date, date, 12, 20),
    createData('Coconut', 'brand1', '', date, date, 12, 20),
    createData('Durian', 'brand1', '', date, date, 12, 20),
    createData('Potato', 'brand1', '', date, date, 12, 20),
    createData('Tomato', 'brand1', '', date, date, 12, 20),
    createData('Melon', 'brand1', '', date, date, 12, 20),
    createData('Green Apple', 'brand1', '', date, date, 12, 20),
    createData('Big Banana', 'brand1', '', date, date, 12, 20),
    createData('Special Watermelon', 'brand1', '', date, date, 12, 20),
];

const styles = {
    smallImg: {
        height: '50px',
        width: '60px'
    },
    bigImg: {
        height: '100px',
        width: '120px'
    },
    actionBtn: {
        cursor: 'pointer'
    }
}
class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: rows,
            page: 0,
            rowsPerPage: 5,
            openDeleteDialog: false,
            deleteId: '',
            openUpdateDialog: false,
            updateId: '',
            updateFruit: {},
            openProductInfo: false,
        }

        this.addFruit = this.addFruit.bind(this)
    }

    

    handleClickDelete(id) {
        this.setState({ openDeleteDialog: true, deleteId: id })
    };

    handleCloseDelete = () => {
        this.setState({ openDeleteDialog: false, deleteId: '' })
    };

    handleDelete = () => {
        this.setState({
            data: this.state.data.filter(d => d.name !== this.state.deleteId),
            deleteId: '',
            openDeleteDialog: false,
        })
    }

    handleClickUpdate(id) {
        var fruitToUpdate
        this.state.data.forEach(fruit => {
            if (fruit.name === id) {
                fruitToUpdate = fruit
            }
        })
        this.setState({ openUpdateDialog: true, updateId: id, updateFruit: fruitToUpdate })
    };

    handleUpdate = (updateFruit) => {
        console.log(updateFruit)
        var currentData = this.state.data
        currentData.forEach(s => {
            if (s.name === this.state.updateId) {
                s.name = updateFruit.name
                s.image = updateFruit.image
                s.brand = updateFruit.brand
                s.manufactureDate = updateFruit.manufactureDate
                s.expiryDate = updateFruit.expiryDate
                s.price = updateFruit.price
                s.stock = updateFruit.stock
            }
        })
        this.setState({
            data: currentData,
            updateFruit: {},
            updateId: '',
            openUpdateDialog: false,
        })
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

    addFruit(fruit) {
        let fruits = this.state.data
        fruits.push(fruit)
        this.setState({openProductInfo: false, data: fruits})
    }

    render() {
        return (
            <div>
                <Grid container>
                    <Grid xs={11}><h3>Product List</h3></Grid>
                    <Grid item xs={1} >
                        <Tooltip title="Add fruit">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={()=>{this.setState({openProductInfo:true})}}
                            >
                                <AddIcon/>
                            </Button>
                        </Tooltip>
                    </Grid>
                </Grid>

                <div style={{ marginTop: 5 }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>Index</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="left">Brand</TableCell>
                                <TableCell align="left">Manufacture Date</TableCell>
                                <TableCell align="left">Expiry Date</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Stock</TableCell>
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
                                                {row.name}
                                            </TableCell>
                                            <TableCell>
                                                <img alt="product image" src={row.image} style={styles.smallImg}/>
                                            </TableCell>
                                            <TableCell align="left">{row.brand}</TableCell>
                                            <TableCell align="left">{row.manufactureDate}</TableCell>
                                            <TableCell align="left">{row.expiryDate}</TableCell>
                                            <TableCell align="left">{row.price}</TableCell>
                                            <TableCell align="left">{row.stock}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Update">
                                                    <EditIcon style={styles.actionBtn} onClick={() => { this.handleClickUpdate(row.name) }} color="primary"/>
                                                </Tooltip>|
                                                <Tooltip title="Delete">
                                                    <DeleteIcon style={styles.actionBtn} onClick={() => { this.handleClickDelete(row.name) }} color="primary"/>
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

                {/* delete popup */}
                <Dialog
                    open={this.state.openDeleteDialog}
                    onClose={this.handleCloseDelete}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Delete confirmation</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure that you want to delete this product?
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseDelete} variant="contained">
                            Cancel
                        </Button>
                        <Button onClick={this.handleDelete} autoFocus variant="contained" color="primary">
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
                
                <UpdateProductModal open={this.state.openUpdateDialog} updateObj = {this.state.updateFruit} onUpdate = {this.handleUpdate} onClose={() => {this.setState({openUpdateDialog:false, updateFruit:{}, updateId:''})}}/>
                <AddProductModal open={this.state.openProductInfo} onAdd = {this.addFruit} onClose={() => {this.setState({openProductInfo:false})}}/>
            </div>
        )
    }
}

export default ProductList