import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TablePage from './Pages/TablePage/TablePage';
import ChartPage from './Pages/ChartPage/ChartPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/Table">
            <TablePage></TablePage>
          </Route>
          <Route exact path="/Chart">
            <ChartPage></ChartPage>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App
