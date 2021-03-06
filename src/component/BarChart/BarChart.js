import React from 'react';
import CanvasJSReact from '../../canvasjs.react';

const BarChart = ({ currentPop, birthRate, deathRate, yearsForward }) => {
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const options = {
    title: {
      text: "Population Growth"
    },
    axisX: {
      title: "Year"
    },
    axisY: {
      title: "Population"
    },
    data: [{
      type: "column",
      dataPoints: []
    }]
  }

  for (let i = 0; i < yearsForward; i++) {
    options.data[0].dataPoints.push({ label: i.toString(), y: Math.floor(currentPop * Math.exp((birthRate - deathRate) * i)) })
  }

  return (
    <div>
      <CanvasJSChart options={options}
      />
    </div>
  );
}

export default BarChart;