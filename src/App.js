import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import AdminPage from './components/adminPage.component';
import ExamplePage from './components/examplePage.component'
function App() {
  return (
    <Router>
      <Route path="/admin" component={AdminPage}/>
      <Route path="/" exact component={ExamplePage} />
    </Router>
  );
}

export default App;
