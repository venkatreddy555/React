import React from 'react';
import { NavLink  } from 'react-router-dom';
import Card from '../../../Widgets/Card';


const languages = ["C", "C++", "Rust", "Go", "Objective C"];
const Home = (props) => {

    const goTo = (language) => {
        props.history.push(`${props.match.url}/${language}`);
    }
    return <div>
        {
            languages.map((item, index) => {
                return <>
                
                    <Card data={item} />
                    <NavLink to={`${props.match.url}/${item}`}>
                        Click here
                    </NavLink>
                    <button onClick={() => goTo(item)}>Go</button>
                </>
            })
        }
    </div>
}


export default Home;