import ProjectCard from '@/app/components/ProjectCard'
import React from 'react'

const kafka_project = [
    {
            project_name: "kafka-producer-consumer",
            project_link: "https://github.com/Rajendra-65/",
            image_url: "/kafka/kafka-producer-consumer-code.png",
            project_github_link: "https://github.com/Rajendra-65/kafka-producer-consumer-code"
    },
    {
        project_name:"kafka-to-mongo-real-time-ingestion",
        project_link:"https://github.com/Rajendra-65/",
        image_url:"/mongodb/Kafka-to-mongo-real-time-ingestion.png",
        project_github_link:"https://github.com/Rajendra-65/mongo-db-atlas-sink-connector"
    }
]

const Kafka = () => {
    return (
        <div
            className='flex flex-col gap-2 items-center'
        >
            {
                kafka_project.map((project,index)=>(
                    <ProjectCard 
                        key={index}
                        {...project}
                    />
                ))
            }
        </div>
    )
}

export default Kafka