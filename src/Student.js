import React, { Component } from 'react'


//use state in class component
class Student extends Component{
    constructor(props){
        super(props);
            this.state = { 
                name: "Surya",
                roll: this.props.roll
            };
        
    }
    render(){
    return ( 
    <h1>Hello Billionaire {this.state.name},your revenue in 2020::{this.state.roll}</h1>
        );
    }
};

export default Student;