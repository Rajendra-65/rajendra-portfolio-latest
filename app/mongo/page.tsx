import ProjectCard from '@/app/components/ProjectCard'
import React from 'react'

const mongo_project = [
    {
        project_name: "kafka-mongo-connection",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/kafka/kafka-mongo-connection.png",
        project_github_link: "https://github.com/Rajendra-65/kafka-mongo-connection"
    },
    {
        project_name:"kafka-to-mongo-real-time-ingestion",
        project_link:"https://github.com/Rajendra-65/",
        image_url:"/mongodb/Kafka-to-mongo-real-time-ingestion.png",
        project_github_link:"https://github.com/Rajendra-65/kafka-to-mongo-real-time-data-analysis"
    },
    {
        project_name: "mongo-db-atlas-sink-connector",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/kafka/kafka-to-mongo-real-time-data-analysis.png",
        project_github_link: "https://github.com/Rajendra-65/mongo-db-atlas-sink-connector"
    }
]

const Mongo = () => {
    return (
        <div
            className='flex flex-col gap-2 items-center'
        >
            {
                mongo_project.map((project,index)=>(
                    <ProjectCard 
                        key={index}
                        {...project}
                    />
                ))
            }
        </div>
    )
}

export default Mongo