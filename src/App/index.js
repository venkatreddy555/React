import React, { useState } from 'react';
import './App.css';
import Form from './../Form';
import Language from './../Language';

function App() {
    const [languages, setLanguages] = useState([]);
    function addLanguages(language) {
        setLanguages([ language, ...languages]);
    }
    return <div className="main">
        <div>
            <Form handleSubmit={addLanguages} />
        </div>
        <div>
            {
                languages.map((language, index) => <Language a={10} language={language} key={index} />)
            }

        </div>
    </div>
}

export default App;