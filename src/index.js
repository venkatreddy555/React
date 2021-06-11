import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';
import Slider from './Slider';

function add() {
    console.log("ADDing");
    console.log("still ADDing");
}


console.log("One");

setTimeout(() => {
    console.log("One and half");
}, 1);

setInterval(() => {
    console.log("Pinging...")
}, 4000);
console.log("Two");
add();
console.log("Three");

// for(let i =0 ; i<50000; i++){
//     console.log(i);
// }
function LanguageCard(props) {
    const {info} = props;
    console.log(props);
    return <div>
        <h2>{info.name}</h2>
        <p>{info.year}</p>
        <button>Add to Cart</button>
    </div>
}

function App() {
    const [title, setTitle] = useState("React");
    return <div>
        <Post />
        {
            <>
                <p>hello {90 + 90} world!!</p>
                <h1>{title}</h1>
                {title}
            </>
        }
        {
            title
        }
        {
            [
                "A",
                "B",
                "C",
                "Good Morning"
            ]
        }
        {
            [
                <p key={1}>Wow</p>,
                <h1 key={2}>Amazing</h1>,
                <p key={3}>Is it?</p>,
                <b key={4}>Oh yes it is.</b>,
            ]
        }
        <ol>
            {
                [
                    <li key={1}>C</li>,
                    <li key={2}>C++</li>,
                    <li key={3}>C#</li>,
                    <li key={4}>F#</li>,
                    <li key={5}>Typescript</li>,
                    <li key={6}>Javascript</li>,
                ]
            }
        </ol>
        <ol>
            {
                [
                    <li key={1}>
                        <LanguageCard 
                            x={10} 
                            y="amazing"
                            z={`hsjh` + `hjsh`}
                            info={{
                                name: 'C#',
                                year: 1980
                            }}
                            data={[1,2,3,4,5]}
                        />
                    </li>,
                    <li key={2}>
                        <LanguageCard 
                            x={10} 
                            y="amazing"
                            z={`hsjh` + `hjsh`}
                            info={{
                                name: 'Javascript',
                                year: 1995
                            }}
                            data={[1,2,3,4,5]}
                        />
                    </li>,
                    <li key={3}>
                        <LanguageCard 
                            x={10} 
                            y="amazing"
                            z={`hsjh` + `hjsh`}
                            info={{
                                name: 'Go',
                                year: 2009
                            }}
                            data={[1,2,3,4,5]}
                        />
                    </li>,
                    <li key={50}>
                        <LanguageCard 
                            x={10} 
                            y="amazing"
                            z={`hsjh` + `hjsh`}
                            info={{
                                name: 'Rust',
                                year: 2009
                            }}
                            data={[1,2,3,4,5]}
                        />
                    </li>
                ]
            }
        </ol>
        <h1> Hello Planet</h1>
    </div>
}


const app = document.getElementById('app');

ReactDOM.render(<App />, app);