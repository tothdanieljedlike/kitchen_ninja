import React from 'react';

function Sensors(props) {
    return(
        <div>
            <h1>Sensor test</h1>
            <h2> Orientation </h2>
            <div>alpha: {props.alpha}</div>
            <div>gamma: {props.gamma}</div>
            <div>beta: {props.beta}</div>
            <h2>Accelerometer</h2>
            <div>x: {props.Accelerometer_x}</div>
            <div>y: {props.Accelerometer_y}</div>
            <div>z: {props.Accelerometer_z}</div>
            <div>Data interval: {props.Accelerometer_i}</div>
            <h2>Accelerometer including gravity</h2>
            <div>x: {props.Accelerometer_gx}</div>
            <div>y: {props.Accelerometer_gy}</div>
            <div>z: {props.Accelerometer_gz}</div>
            <h2>Gyroscope</h2>
            <div>x: {props.Gyroscope_x}</div>
            <div>y: {props.Gyroscope_y}</div>
            <div>z: {props.Gyroscope_z}</div>
        </div>
    );
}



export default Sensors