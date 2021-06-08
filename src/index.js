import React from 'react';
import ReactDOM from 'react-dom';

// JSX

const app = document.getElementById('app');

function Awesome() {
    return <>
        <h1>Awesome</h1>
        <button>LOL</button>
        <a href="https://www.golang.org">Go</a>
    </>
}

// Components
const title = "Programming with Go";
let x  = 1;
function Amazing() {
    return <>
        <h1>Amazing {title} {1+1} { function wow(data){
            x = x+1;
        }(x)}</h1>
        <button>Click</button>
        <a href="https://www.rust-lang.org">Go</a>
    </>
}


class Good extends React.Component {
    constructor(){
        super();
        this.state = {
            x: 10,
            y: 90,
            country: "IND",
            items: [],
            person: {
                name: "",
                age: "",
            }
        }
    }

    handleClick = () => {
        this.setState({
            x: this.state.x + 1,
            y: this.state.y + 2
        });
    }

    handleSelect = (event) => {
        // const { currentTarget } = event;
        // const { value} = currentTarget;
        const { currentTarget: { value } } = event;
        this.setState({country: value}, () => {
            console.log(this.state.country);
        });
        
    }
    render(){
        return <>
            <h1>Good Component</h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                            Apple { this.state.x}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Y { this.state.y}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1>{this.state.country}</h1>
                        </td>
                        <td>
                            <select onChange={this.handleSelect}>
                                <option value="IND">IND</option>
                                <option value="NZ">NZ</option>
                                <option value="AUS">AUS</option>
                                <option value="ENG">ENG</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <button onClick={this.handleClick}>Click</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    }
}

function Root() {
    return <React.Fragment>
        <h1>Lol!!</h1>
        <Good/>
        <Amazing />
        <Awesome />
        <Amazing />
        
        <Awesome />
        <Amazing />
        <Awesome />
        <Amazing />
        <Awesome />

    </React.Fragment>
}



ReactDOM.render( <Root/>, app);