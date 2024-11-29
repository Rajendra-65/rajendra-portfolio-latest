import ProjectCard from '@/app/components/ProjectCard'
import React from 'react'

const airflow_project = [
    {
        project_name: "Airflow-orders-job",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/airflow/Airflow-orders-job.png",
        project_github_link: "https://github.com/Rajendra-65/airflow-orders-job"
    },
    {
        project_name: "Airflow-spark-job",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/airflow/Airflow-spark-job.png",
        project_github_link: "https://github.com/Rajendra-65/airflow-spark-job"
    },
    {
        project_name: "Gcp-to-hive",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/airflow/Gcp-to-hive.png",
        project_github_link: "https://github.com/Rajendra-65/gcp-to-hive"
    }
]

const page = () => {
    return (
        <div className="flex flex-col gap-2 items-center">
            {airflow_project.map((project, index) => (
                <ProjectCard 
                    key={index} 
                    {...project} 
                />
            ))}
        </div>
    )
}

export default page