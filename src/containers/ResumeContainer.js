import React, {Component} from 'react'
import Resume from '../components/Resume'

class ResumeContainer extends Component{
    render(){
        return(
            <div id="resume-div" className="slide-in-right">
                <Resume />
            </div>
        )
    }
}
export default ResumeContainer