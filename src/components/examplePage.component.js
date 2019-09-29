import React from 'react';
import Navbar from "./navbar.component"
import { BrowserRouter as Router, Route} from "react-router-dom";
import ExercisesList from "./exercises-list.component";
import EditExercise from "./edit-exercise.component";
import CreateExercise from "./create-exercise.component";
import CreateUser from "./create-user.component";

class ExamplePage extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Navbar/>
                    <br/>
                    <Route path="/" exact component={ExercisesList} />
                    <Route path="/edit/:id" component={EditExercise} />
                    <Route path="/create" component={CreateExercise} />
                    <Route path="/user" component={CreateUser} />
                </div>
            </Router>
        )
    }
}

export default ExamplePage