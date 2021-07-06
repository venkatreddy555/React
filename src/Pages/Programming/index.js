import React from 'react';
import Card from '../../Widgets/Card';

class Programming extends React.Component {
    constructor() {
        super();
        this.state = {
            languages: ["C", "C++", "Rust", "Go", "Objective C"],
        };
    }
    render() {
        return <div>
            <h1>Programming</h1>
            {
                this.state.languages.map((item, index) => {
                    return <Card abc b c={false} m={{
                        arr: [1,3,3,4,4]
                    }} x={10} lol={class Abc extends React.Component { }} data={item} />
                })
            }
        </div>
    }
}

export default Programming;