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
            alert(data);
            x = x+1;
        }(x)}</h1>
        <button>Click</button>
        <a href="https://www.rust-lang.org">Go</a>
    </>
}


class Good extends React.Component {

    render(){
        return <>
            <h1>Good Component</h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                            Apple
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