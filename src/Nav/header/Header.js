import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';


export class Header extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/progress"}>Progress-Bar</Link></li>
                    <li><Link to={"/autocomplete"}>Auto Complete</Link></li>
                    <li><Link to={"/fetchapi"}>Fetch Api</Link></li>
                    <li><Link to={"/onscrollajax"}>Onscroll Ajax</Link></li>
                    <li><Link to={"/submitajax"}>Submit Ajax</Link></li>
                    <li><Link to={"/regex"}>Regex</Link></li>
                    <li><Link to={"/upload"}>Upload and Download</Link></li>
                </ul>
            </div>
        )
    }
}
