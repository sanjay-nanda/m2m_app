import React from 'react';
import {Line } from 'react-chartjs-2';

const GasChart = ({ values }) => {

    const larr = [];
    for(let i = 0; i < values.length; i++){
        larr.push(i);
    }

    return (
        <div>
           <Line 
           data = {{
               labels: larr,
               datasets: [
                   {
                       label: "Temperature Sensor",
                       data: values,
                       backgroundColor: ["rgba(142, 35, 235, 0.6)"],
                       borderWidth: 4,
                       showLine: true,
                       fill: false,
                   }
               ]
           }}
           /> 
        </div>
    );
}

export default GasChart;