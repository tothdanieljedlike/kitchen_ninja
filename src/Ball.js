import React, {useState, useEffect} from 'react';

function Ball(props) {
    //const [test, settest] = useState(0)
    const [cord, setcord] = useState({x: 0, y: 0})

    let x = cord.x;
    let y = cord.y;

    useEffect(() => {
        const handleMotionEvent = event => {
            let a = cord.x;
            let b = cord.y;
            a += event.acceleration.x*5;
            b += event.acceleration.y*5;
            setcord({x: a, y: b});
        };
        window.addEventListener('devicemotion', handleMotionEvent, true);
        return () => window.removeEventListener('devicemotion', handleMotionEvent);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
    
    // const inputTextHandler = (e) => {
    //     console.log(parseInt(e.target.value));
    //     settest(parseInt(e.target.value));
    // }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(test + ", " + cord.x + ", " + cord.y);
    //     let a = cord.x;
    //     let b = cord.y;
    //     a += test*5;
    //     b += test*5;
    //     setcord({x: a, y: b});
    // }

    const ballStyle = {
        top: y,
        left: x
    }
    

    return(
        <div>
            <form >
                {/* <input onChange={inputTextHandler} type="text"/>
                <button onClick={submitHandler} type="submit"></button> */}
            </form>
            <div className="ball" style={ballStyle}></div>
        </div>
    );
    
}
export default Ball