import React from 'react';
import { NavLink, BrowserRouter as Router, Route } from 'react-router-dom';
import Computer from './Computer';
import Home from './Home';
import Space from './Space';
const Sci = (props) => {
    console.log("Props", props);
    return <div> 
        <ul>
            <li>
                <NavLink to={props.match.url}>Home</NavLink>
            </li>
            <li>
                <NavLink to={`${props.match.url}/computer`}>Computer</NavLink>
            </li>
            <li>
                <NavLink to={`${props.match.url}/space`}>Space</NavLink>
            </li>
        </ul>

            <Route exact  path={props.match.path} component={Home} />
            <Route path={`${props.match.path}/computer`} component={Computer} />
            <Route path={`${props.match.path}/space`} component={Space}/>
     
</div>
}

export default Sci;