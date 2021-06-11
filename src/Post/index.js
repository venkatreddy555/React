import React, { Component } from 'react';

class Post extends Component {
    constructor() {
        super();
        this.state = {
            x: 0,
            y: 10,
        }
    }

    componentDidMount(){
        console.log("Mounted");
        this.setState({
            x: 20
        });
    }

    componentWillUpdate(){
        console.log("Component will update now..");
    }
    componentDidUpdate(){
        console.log("Component just updated..");
    }

    render() {
        return <div>
            <h1> x {this.state.x}</h1>
            <h1> y {this.state.y}</h1>
            <button onClick={() => this.setState({ 
                x: this.state.x + 1
            })}>INC X</button>
            <br/>
            <button onClick={() => this.setState({ 
                y: this.state.y + 1
            })}>INC Y</button>
        </div>
    }
}

export default Post;