import React from 'react';
import './index.css'

class Thumbs extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: null}
    }
    thumbsUp() {
        this.setState({value:"up"})
    }
    thumbsDown() {
        this.setState({value:"down"})
    }
    render() {
        const upClass = this.state.value === "up" ? " active" : "";
        const downClass = this.state.value === "down" ? " active" : "";
        return ( 
        <span><i className={"fas fa-thumbs-up" + upClass} onClick={this.thumbsUp.bind(this)}></i>
        <i className={"fas fa-thumbs-down" + downClass} onClick={this.thumbsDown.bind(this)}></i></span>

    )};
}

export default Thumbs;