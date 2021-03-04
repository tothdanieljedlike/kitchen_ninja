import React from 'react';

function Ball(props) {


    let x =+  props.Accelerometer_x*5;
    let y =+  props.Accelerometer_y*5;
        


    const ballStyle = {
        top: y,
        left: x
    }
    

    return(
        <div>
            <div className="ball" style={ballStyle}></div>
        </div>
    );
    
}
export default Ball