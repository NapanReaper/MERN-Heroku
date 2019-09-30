import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import userPlaceholder from '../asset/img/userPlaceholder.jpg';

class AdminMenubar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            anchorEl:null
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    handleClick = event => {
        this.setState({anchorEl: event.currentTarget})
    };
    
    handleClose = () => {
        this.setState({anchorEl: null})
    };

    render() {
        return (
            <div style={{flexGrow:1}}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                    <Typography variant="h6">
                        Fruit shop
                    </Typography>
                    <div style={{flexGrow:1}}></div>
                    <div style={{display: 'flex'}}>
                    <Avatar src={userPlaceholder} alt="user image"/>
                    <Button onClick={this.handleClick} color="inherit" style={{marginLeft: 10}}>
                        Admin <ArrowDropDownIcon/>
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                    </Menu>
                    </div>
                    
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default AdminMenubar