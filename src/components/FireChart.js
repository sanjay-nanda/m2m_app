import React from 'react';
import {Line, Bar } from 'react-chartjs-2';

const FireChart = ({ values }) => {

    const larr = [];
    for(let i = 0; i < values.length; i++){
        larr.push(i);
    }

    return (
        <div>
           <Bar 
           data = {{
               labels: larr,
               datasets: [
                   {
                       label: "Gas Sensor",
                       data: values,
                       backgroundColor: ["rgba(232, 130, 35, 0.6)"],
                       borderWidth: 4,
                       showLine: false,
                       fill: true,
                   }
               ]
           }}
           /> 
        </div>
    );
}

export default FireChart;