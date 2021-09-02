import React, { Component } from 'react'
import About from '../components/About'

class AboutContainer extends Component{
    render(){
        return(
            <div id="about-div" className="slide-in-right">
                <About />
            </div>
        )
    }
}
export default AboutContainer
