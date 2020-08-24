import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'


const PopTable = ({ currentPop, birthRate, deathRate, yearsForward }) => {

  const tableRows = []
  for (let i = 0; i < yearsForward; i++) {
    tableRows.push(
      <tr>
        <td>{i}</td>
        <td>{Math.floor(currentPop * Math.exp((birthRate - deathRate) * i))}</td>
      </tr>
    )
  }

  useEffect(() => { }, [])

  return (
    <div className="mt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Year</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </Table>
    </div>
  );
}

export default PopTable;