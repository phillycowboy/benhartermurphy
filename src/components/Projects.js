// import React, {Component} from 'react'
import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

const Projects = ({project}) => {
    const [isFlipped, setIsFlipped] = useState(false)
        return(
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div id="projects-front">
                    <h1>{project.projectName}</h1>
                    <img src={project.imagePath}/>
                    <h4>Built With: {project.languages}</h4>
                    <button onClick={() => setIsFlipped((prev) => !prev)}>Links</button>
                </div>
                <div id="projects-back">
                    <a href={project.githubLink}><i class="fab fa-github"></i></a>|<a href={project.youtubeLink}><i class="fab fa-youtube"></i></a><br></br>
                    <button onClick={() => setIsFlipped((prev) => !prev)}>Back</button>
                </div>
            </ReactCardFlip>
                
                
        )
}
export default Projects