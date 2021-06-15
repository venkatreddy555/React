import React from 'react';

import './Language.css';

const Language = (props) => {
    return <div className="card">
        <h1>
            {props.language.languageName}
        </h1>
        <h4>
           Created by-- {props.language.company}
        </h4>
    </div>
}

export default Language;