import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import AdminDashboard from './admin-dashboard.component'
import ProductList from './product-list.component'
import OrderList from './order-list.component'
import AdminMenubar from './admin-menubar.component'
import '../App.css'
const styles = {
    sideBar: {
        minHeight:'90.4vh',
        paddingTop:'20px'
    },
    NavLink: {
        color: "white",
        textAlign: "left"
    },
    logo: {
        color: "white",
        marginBottom: '20px'
    },
}
class AdminPage extends React.Component {
    render() {
        return (
            <Router>
                <AdminMenubar/>
                <div className="container-fluid" style={{backgroundColor:'black', boxSizing:'border-box'}}>
                    <div className="row">
                        <div className="col-2" style={styles.sideBar}>
                        <ul className="nav nav-pills nav-fill">
                            <li className="nav-item">
                                <NavLink className="nav-link" style={styles.NavLink} exact={true} activeClassName="active" to="/admin">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={styles.NavLink} activeClassName="active" to="/admin/product-list">Product Management</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={styles.NavLink} activeClassName="active" to="/admin/order-list">Order Management</NavLink>
                            </li>
                        </ul>
                        </div>
                        <div className="col-10" style={{backgroundColor: 'white', paddingTop: '20px'}}>
                            <Route path="/admin" exact component={AdminDashboard}/>
                            <Route path="/admin/product-list" component={ProductList}/>
                            <Route path="/admin/order-list" component={OrderList}/>
                        </div>
                    </div>
                    
                </div>
            </Router>
        )
    }
}

export default AdminPage