import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';


export class Header extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/page"}>Page</Link></li>
                </ul>
            </div>
        )
    }
}