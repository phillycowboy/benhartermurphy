import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <div id="navbar">
                <ul>
                    <li>
                        <NavLink
                        exact
                        to= "/"
                        style={{ textDecorationLine: 'none', color: "#66FCF1"}}
                        >
                            BHM |
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        exact
                        to= "/about"
                        style={{textDecorationLine: 'none', color: "#66FCF1"}}
                        >
                            ABOUT |
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        exact
                        to= "/projects"
                        style={{textDecorationLine: 'none', color: "#66FCF1"}}
                        >
                            PROJECTS |
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        exact
                        to= "/resume"
                        style={{textDecorationLine: 'none', color: "#66FCF1"}}
                        >
                            RESUME |
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        exact
                        to= "/contact"
                        style={{textDecorationLine: 'none', color: "#66FCF1"}}
                        >
                            CONTACT
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Nav 