import React from 'react';
import './Card.css';
const Card = (props) => {
    console.log("Props", props);
    return <div className="card-body">
        <h3>{props.data}</h3>
    </div>
}

export default Card;

