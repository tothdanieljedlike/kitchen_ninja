import React, {useState, useEffect} from 'react'

function Ball(props) {
    const [{x,y}, setlocation] = useState({y: window.innerHeight/2, x: window.innerWidth/2})
    
    let new_y = y + props.Accelerometer_y*5;
    let new_x = x + props.Accelerometer_x*5;
    
    console.log(new_x);
    
    console.log(window.innerHeight)
    const ballStyle = {
        top: new_y,
        left: new_x
    }
    

    return(
        <div>
            <div className="ball" style={ballStyle}></div>
        </div>
    );
    
}
export default Ball