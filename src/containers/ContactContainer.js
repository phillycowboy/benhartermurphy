import React, {Component} from 'react'
import Contact from '../components/Contact'

class ContactContainer extends Component{
    render(){
        return(
            <div id="contact-div" className="slide-in-right">
                <Contact />
            </div>
        )
    }
}
export default ContactContainer