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
                </div>
            </div>
        )
    }
}
export default Home