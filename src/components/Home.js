import React, {Component} from 'react';

class Home extends Component{
    render(){
        return(
            <div id="home">
                <div id="headshot-div">
                    <img src="headshot.JPG" alt="my face"/>
                </div>
                <div id="name-div">
                    <h1>Ben Harter-Murphy</h1>
                    <h1>Full Stack Web Developer</h1>
                </div>
            </div>
        )
    }
}
export default Home