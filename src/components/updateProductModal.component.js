import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import productPlaceHolder from '../asset/img/productPlaceholder.png'

const styles = {
    bigImg: {
        height: '100px',
        width: '120px'
    }
}
var today = new Date()
var date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear()
class UpdateProductModal extends React.Component{
    constructor(props) {
        super(props)
        this.state = {updateFruit:{}}

        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeBrand = this.handleChangeBrand.bind(this)
        this.handleChangeManufacturingDate = this.handleChangeManufacturingDate.bind(this)
        this.handleChangeExpiryDate = this.handleChangeExpiryDate.bind(this)
        this.handleChangePrice = this.handleChangePrice.bind(this)
        this.handleChangeStock = this.handleChangeStock.bind(this)
        this.handleChangeImage = this.handleChangeImage.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    componentDidUpdate(prevProps) {
        if(this.props.updateObj !== prevProps.updateObj){
            this.setState({updateFruit:this.props.updateObj})
        }
        
    }

    handleChangeImage(e) {
        let reader = new FileReader()
        let imgFile = e.target.files[0]
        var test = this.state.updateFruit
        reader.onloadend = () => {
            test.image = reader.result
            this.setState({
                updateFruit: test
            })
        }
        reader.readAsDataURL(imgFile)
    }
    handleChangePrice(event) {
        let fruitToUpdate = Object.assign({}, this.state.updateFruit)
        fruitToUpdate.price = event.target.value
        this.setState({
            updateFruit: fruitToUpdate
        })
    }

    handleChangeStock(event) {
        let fruitToUpdate = Object.assign({}, this.state.updateFruit)
        fruitToUpdate.stock = event.target.value
        this.setState({
            updateFruit: fruitToUpdate
        })
    }

    handleChangeManufacturingDate(date) {
        let fruitToUpdate = Object.assign({}, this.state.updateFruit)
        fruitToUpdate.manufactureDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()
        this.setState({
            updateFruit: fruitToUpdate
        })
    }

    handleChangeExpiryDate(date) {
        let fruitToUpdate = Object.assign({}, this.state.updateFruit)
        fruitToUpdate.expiryDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()
        this.setState({
            updateFruit: fruitToUpdate
        })
    }

    handleChangeName(event) {
        let fruitToUpdate = Object.assign({}, this.state.updateFruit)
        fruitToUpdate.name = event.target.value
        this.setState({
            updateFruit: fruitToUpdate
        })
    }

    handleChangeBrand(event) {
        let fruitToUpdate = Object.assign({}, this.state.updateFruit)
        fruitToUpdate.brand = event.target.value
        this.setState({
            updateFruit: fruitToUpdate
        })
    }

    handleUpdate() {
        this.props.onUpdate(this.state.updateFruit)
        this.setState({
            updateFruit: {}
        })
    }

    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Add a new fruit</DialogTitle>
                <DialogContent>
                    <div style={{ width: 500 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <img style={styles.bigImg} alt="current image"
                                    src={this.state.updateFruit.image} />
                                <input
                                    accept="image/*"
                                    id="raised-button-file"
                                    style={{ opacity: '0' }}
                                    multiple
                                    type="file"
                                    onChange={(e) => this.handleChangeImage(e)}
                                />
                                <label htmlFor="raised-button-file">
                                    <Button
                                        component="span"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Upload image
                                    </Button>
                                </label>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl variant="outlined" fullWidth style={{ marginBottom: 15 }}>
                                    <InputLabel htmlFor="fruitName">
                                        Name
                                    </InputLabel>
                                    <OutlinedInput
                                        id="fruitName"
                                        value={this.state.updateFruit.name}
                                        onChange={this.handleChangeName}
                                        labelWidth={50}
                                        fullWidth
                                    />
                                </FormControl>
                                <FormControl variant="outlined" fullWidth style={{ marginBottom: 10 }}>
                                    <InputLabel htmlFor="fruitBrand">
                                        Brand
                                    </InputLabel>
                                    <OutlinedInput
                                        id="fruitBrand"
                                        value={this.state.updateFruit.brand}
                                        onChange={this.handleChangeBrand}
                                        labelWidth={50}
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid>
                        
                            <Grid item xs={6}>
                                <FormControl>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="manufactureDate"
                                        label="Manufacture Date"
                                        value={this.state.updateFruit.manufactureDate}
                                        onChange={this.handleChangeManufacturingDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                    </MuiPickersUtilsProvider>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="expiryDate"
                                        label="Expiry Date"
                                        value={this.state.updateFruit.expiryDate}
                                        onChange={this.handleChangeExpiryDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                    </MuiPickersUtilsProvider>
                                </FormControl>
                            </Grid>
                        
                            <Grid item xs={6}>
                                <TextField
                                    id="fruitPrice"
                                    variant="outlined"
                                    label="Price"
                                    value={this.state.updateFruit.price}
                                    onChange={this.handleChangePrice}
                                    InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    }}
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="fruitStock"
                                    variant="outlined"
                                    label="Stock"
                                    value={this.state.updateFruit.stock}
                                    onChange={this.handleChangeStock}
                                    type="number"
                                />
                            </Grid>
                        </Grid>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose} variant="contained">
                        Cancel
                    </Button>
                    <Button onClick={this.handleUpdate} variant="contained" autoFocus color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default UpdateProductModal