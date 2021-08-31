import React, {Component} from 'react';

class Contact extends Component{
    render(){
        return(
            <div id="contact">
                <h1>CONTACT</h1>
                <ul>

                    <li>
                        <div id="icon">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <div id="data">
                            919-389-0480
                        </div>

                    </li><br/>
                    <li>
                        <div id="icon">
                            <i class="fab fa-github"></i>
                        </div>
                        <div id="data">
                            <a href="https://github.com/phillycowboy">phillycowboy</a>
                        </div>
                    </li><br/>
                    <li>
                        <div id="icon">
                            <i class="fab fa-linkedin"></i>
                        </div>
                        <div id="data">
                            <a href="https://www.linkedin.com/in/benhartermurphy/">LinkedIn</a>
                        </div>
                    </li><br/>
                    <li>
                        <div id="icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div id="data">
                            <a href="mailto:benhartermurphy@gmail.com" target="_blank" rel="noopener noreferrer">benhartermurphy@gmail.com</a>
                        </div>
                    </li><br/>
                </ul>
            </div>
        )
    }
}
export default Contact