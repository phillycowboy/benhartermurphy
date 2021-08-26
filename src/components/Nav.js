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
                        style={{color: 'purple'}}
                        >
                            BHM
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        exact
                        to= "/about"
                        style={{color: 'purple'}}
                        >
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        exact
                        to= "/projects"
                        style={{color: 'purple'}}
                        >
                            PROJECTS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        exact
                        to= "/resume"
                        style={{color: 'purple'}}
                        >
                            RESUME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        exact
                        to= "/contact"
                        style={{color: 'purple'}}
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