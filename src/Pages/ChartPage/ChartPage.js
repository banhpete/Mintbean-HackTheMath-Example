import React, { Component } from 'react';
import Template from "../../template/Template"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import BarChart from '../../component/BarChart/BarChart';

class ChartPage extends Component {
  state = {
    currentPop: 0,
    birthRate: 0,
    deathRate: 0,
    yearsForward: 0,
  }

  handleChange = (e) => {
    if (parseInt(e.target.value) >= 0) {
      this.setState({ [e.target.name]: parseInt(e.target.value) })
    }
  }

  handleSubmit = () => {
    console.log()
    this.barChart = <BarChart {...this.state}></BarChart>
    this.forceUpdate()
  }

  barChart = null
  render() {
    return (
      <Template>
        <div className="container mt-4">
          <Form className="container mb-4">
            <Form.Group controlId="formCurrentPop">
              <Form.Label>Enter Current Population</Form.Label>
              <Form.Control onChange={(e) => { this.handleChange(e) }} name="currentPop" type="number" value={this.state.currentPop} />
            </Form.Group>
            <Form.Group controlId="formBirthRate">
              <Form.Label>Enter Birth Rate</Form.Label>
              <Form.Control onChange={(e) => { this.handleChange(e) }} name="birthRate" type="number" value={this.state.birthRate} />
            </Form.Group>
            <Form.Group controlId="formDeathRate">
              <Form.Label>Enter Death Rate</Form.Label>
              <Form.Control onChange={(e) => { this.handleChange(e) }} name="deathRate" type="number" value={this.state.deathRate} />
            </Form.Group>
            <Form.Group controlId="formYearsForward">
              <Form.Label>Enter how far forward you want to see</Form.Label>
              <Form.Control onChange={(e) => { this.handleChange(e) }} name="yearsForward" type="number" value={this.state.yearsForward} />
            </Form.Group>
            <Button onClick={this.handleSubmit} variant="primary">Model</Button>
          </Form>
          {this.barChart}
        </div>
      </Template>
    );
  }
}

export default ChartPage;