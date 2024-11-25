import React from 'react'
import ProjectCard from '@/app/components/ProjectCard'

const project_details = [
    {
        project_name:"snapgram",
        project_link:"",
        image_url:"/snapgram-image.png",
        project_github_link:""
    },
    {
        project_name:"Ecommercery",
        project_link:"",
        image_url:"/snapgram-image.png",
        project_github_link:""
    }
]

const De = () => {
    return(
        <div
            className="pb-5 flex flex-col items-center"
        >
            {project_details.map((project, index) => (
                <ProjectCard 
                    key={index} 
                    {...project} 
                />
            ))}
        </div>
    )
}

export default De