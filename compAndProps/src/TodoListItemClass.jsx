import React from "react";

export class TodoListItemClass extends React.Component{
    render(){
        return (
            <label>
                <input type="checkbox" defaultChecked={this.props.isComplete} />
                {this.props.children}
            </label>
        )
    }
}

//TodoListItem -- Component
// props : children = name , isComplete : boolean
//Checkbox (checked if completed)
// label (children value)