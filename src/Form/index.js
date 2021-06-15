import React, { useState, useEffect } from 'react';


const Form = (props) => {
    const [languageName, setLanguageName] = useState("");
    const [company, setCompany] = useState("");

    const handleName = (event) => {
        const { currentTarget: { value } } = event;
        setLanguageName(value);
    }
    const handleCompany = (event) => {
        const { currentTarget: { value } } = event;
        setCompany(value);
    }

    function handleSubmit() {
        props.handleSubmit({languageName, company});
    }
    return <table>
        <tbody>
            <tr>
                <td>
                    <input onChange={handleName} placeholder="Enter name" />
                </td>
            </tr>
            <tr>
                <td>
                    <input onChange={handleCompany} placeholder="Enter company" />
                </td>
            </tr>
            <tr>
                <td>
                    <button onClick={handleSubmit}>
                        Create
                    </button>
                </td>
            </tr>
        </tbody>
    </table>

}


export default Form;