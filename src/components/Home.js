import React, {Component} from 'react';

class Home extends Component{
    render(){
        return(
            <div id="home">
                <div id="headshot-div">
                    <img src="headshot.JPG" alt="my face" class="fade-in-left"/>
                </div>
                <div id="name-div">
                    <h1 id="name" class="slide-in-right">Ben Harter-Murphy</h1>
                    <h1 id="title" class="slide-in-right">Full Stack Web Developer</h1>
                    <div id="languages" class="slide-in-bottom">
                        <ul>
                            <li><i class="fab fa-html5"></i></li>
                            <li><i class="fab fa-css3-alt"></i></li>
                            <li><i class="fab fa-js-square"></i></li>
                            <li><i class="fab fa-react"></i></li>
                            <li><i class="icon-ruby-on-rails"></i></li>
                        </ul>

                    </div>
                </div>
                {/* <div id="languages">
                    <ul>
                        <li><i class="fab fa-html5"></i></li>
                        <li><i class="fab fa-css3-alt"></i></li>
                        <li><i class="fab fa-js-square"></i></li>
                        <li><i class="fab fa-react"></i></li>
                        <li><i class="icon-ruby-on-rails"></i></li>
                    </ul>
                </div> */}
            </div>
        )
    }
}
export default Home