import React, { useState, useEffect } from 'react';
const Slider = () => {
    // const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    let x = 0;
    // useEffect(() => {
    //     console.log( y, "y is changed");
    // }, [y]);
    // useEffect(() => {
    //     console.log( x, "x is changed");
    // }, [x]);
    useEffect(() => {
        setInterval(() => {
            x = x+1;
            setY(x + 1);
            console.log("********");
        }, 2000);
    }, []);
    const [urls, setUrls] = useState([
        'https://images.pexels.com/photos/431722/pexels-photo-431722.jpeg',
        'https://images.pexels.com/photos/707265/pexels-photo-707265.jpeg',
        'https://www.google.com/logos/doodles/2021/shirley-temples-93rd-birthday-6753651837108911.2-law.gif'
    ]);
    return <div>
        <img width="150" height="120" src={urls[y]} />
        {/* <button onClick={() => setX(x + 1)}>inc {x} </button> */}
        <button onClick={() => setY(y + 1)}>inc {y} </button>
    </div>

}

export default Slider;