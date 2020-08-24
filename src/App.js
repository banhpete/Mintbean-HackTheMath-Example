import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TablePage from './Pages/TablePage/TablePage';
import ChartPage from './Pages/ChartPage/ChartPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/chart">
              <ChartPage></ChartPage>
            </Route>
            <Route path="/">
              <TablePage></TablePage>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App
