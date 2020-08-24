import React, { Component } from 'react';
import Template from "../../template/Template"
import PopTable from "../../component/PopTable/PopTable"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class TablePage extends Component {
  state = {
    currentPop: 0,
    birthRate: 0,
    deathRate: 0,
    yearsForward: 0,
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = () => {
    console.log()
    this.popTable = <PopTable {...this.state}></PopTable>
    this.forceUpdate()
  }

  popTable = null;
  render() {
    return (
      <Template>
        <div className="container mt-4">
          <Form>
            <Form.Group controlId="formCurrentPop">
              <Form.Label>Enter Current Population</Form.Label>
              <Form.Control onChange={(e) => { this.handleChange(e) }} name="currentPop" type="number" value={this.state.currentPop} />
            </Form.Group>
            <Form.Group controlId="formBirthRate">
              <Form.Label>Enter Birth Rate</Form.Label>
              <Form.Control onChange={(e) => { this.handleChange(e) }} name="birthRate" type="number" step=".0001" value={this.state.birthRate} />
            </Form.Group>
            <Form.Group controlId="formDeathRate">
              <Form.Label>Enter Death Rate</Form.Label>
              <Form.Control onChange={(e) => { this.handleChange(e) }} name="deathRate" type="number" step=".0001" value={this.state.deathRate} />
            </Form.Group>
            <Form.Group controlId="formYearsForward">
              <Form.Label>Enter how far forward you want to see</Form.Label>
              <Form.Control onChange={(e) => { this.handleChange(e) }} name="yearsForward" type="number" value={this.state.yearsForward} />
            </Form.Group>
            <Button onClick={this.handleSubmit} variant="primary">Model</Button>
          </Form>
          {this.popTable}
        </div>
      </Template>
    );
  }
}

export default TablePage;