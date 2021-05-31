import React from 'react';
import {Line } from 'react-chartjs-2';

const UltChart = ({ values }) => {

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
                       label: "Ultrasonic Sensor",
                       data: values,
                       backgroundColor: ["rgba(12, 145, 192, 0.6)"],
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

export default UltChart;