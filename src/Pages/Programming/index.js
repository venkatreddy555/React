import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import  Home from './Home'
import Card from '../../Widgets/Card';
import Languages from './Languages';


class Programming extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: ["C", "C++", "Rust", "Go", "Objective C"],
        };
    }
    render() {
        return <div>
            <h1>Programming</h1>
            {/* {
                this.state.languages.map((item, index) => {
                    return <Card abc b c={false} m={{
                        arr: [1,3,3,4,4]
                    }} x={10} lol={class Abc extends React.Component { }} data={item} />
                })
            } */}
            
            <Route path={`${this.props.match.path}/:language`} component={Languages} />
            <Route  exact path={`${this.props.match.path}/`} component={Home} />
        </div>
    }
}

export default Programming;