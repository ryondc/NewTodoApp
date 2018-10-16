import React from 'react';
import './button.css';


export class Button extends React.Component{
    render(){
        return(
            <form>
            <button onClick={this.props.onClick}>
                {this.props.children}
            </button>
            </form>
        )
    }
}
