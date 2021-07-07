import React from 'react'

class Languages extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("PROPs", this.props);
    }
render(){
    return(<div>
<h1>Programming language {this.props.match.params.language}</h1>
    </div>)
}
}
export default Languages;