import React from 'react'
import ProjectCard from '@/app/components/ProjectCard'

const spark_project =[
    {
        project_name: "pyspark-data-transformation",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/spark/pyspark-data-operation.png",
        project_github_link: "https://github.com/Rajendra-65/pyspark-simple-data-operation"
    },
    {
        project_name: "stateless_stream_pipeline",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/spark/stateless_stream_pipeline.png",
        project_github_link: "https://github.com/Rajendra-65/stateless_stream_pipeline"
    },
    {
        project_name: "stateful_stream_pipeline",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/spark/stateful_stream_pipeline.png",
        project_github_link: "https://github.com/Rajendra-65/stateful_groupby_stream_pipeline"
    },
    {
        project_name: "stateful_stream_pipeline",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/spark/stateful_stream_pipeline.png",
        project_github_link: "https://github.com/Rajendra-65/stateful_groupby_stream_pipeline"
    },
    {
        project_name: "order-data-analysis-from-hive",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/spark/order-data-analysis-from-hive.png",
        project_github_link: "https://github.com/Rajendra-65/order-data-analysis-from-hive"
    }
]

const Spark = () => {
    return (
        <div
                className="pb-5 flex flex-col items-center ml-[2%]"
            >
                {spark_project.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                    />
                ))}
            </div>
    )
}

export default Spark