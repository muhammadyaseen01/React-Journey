import React from "react";

export class NameClass extends React.Component{
    render(){
        return <h1>{this.props.name} <br/> {this.props.children}</h1>
    }
}