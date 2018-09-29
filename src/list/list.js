import React from 'react';
import './list.css';


export class List extends React.Component{
    render(){
        return(     
               <ol>   
                    {this.props.children}
                </ol>
        )
    }
}