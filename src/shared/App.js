import React from 'react';
import { Route } from 'react-router-dom';
import List from "./List";
import { Link } from 'react-router-dom';
import Home from './Home';


class App extends React.Component {
    render() {
       
        return (
            <div>
                Hello
                <ul>
                    <li><Link to="/list">List</Link></li>
                    <li><Link to="/home"> Home</Link></li>
                </ul>
                <Route component={List} path="/list" />
                <Route component={Home} path="/home" />
            </div>
        );
    }
};

export default App;