import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaxValue = Math.max(...dataPointsValue);


    return <div className = "chart">
        {props.dataPoints.map(dataPoint => <ChartBar key = {dataPoint.label} value = {dataPoint.value} label = {dataPoint.label} maxValue = {totalMaxValue} />)}
    </div>
}

export default Chart;