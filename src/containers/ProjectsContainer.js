import React, {Component} from 'react'
import Projects from '../components/Projects'
import projectsData from '../assests/data/projectsData.json'

class ProjectsContainer extends Component{
    render(){
        return(
            projectsData.map((project, index) => {
                return <div id="projects-div" class="fade-in-bck">
                            <Projects key={index} project={project}/>
                       </div>

            })
        )
    }
}
export default ProjectsContainer