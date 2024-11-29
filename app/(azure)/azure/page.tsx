import ProjectCard from "@/app/components/ProjectCard"
import React from "react"

const Azure_Project = [
    {
        project_name: "Fintech-data-migration",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/azure/Fintech-data-migration.png",
        project_github_link: "https://github.com/Rajendra-65/fintech-data-migration"
    },
    {
        project_name: "Book-my-show-stream-analytics",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/azure/Book-my-show-stream-analytics.png",
        project_github_link: "https://github.com/Rajendra-65/Book-my-show-stream-analytics"
    },
    {
        project_name: "Fintech-data-migration",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/azure/Airline_ADF_production.png",
        project_github_link: "https://github.com/Rajendra-65/airline-adf-ci-cd"
    }
]

const Azure = () => {
    return (
        <div
            className="flex flex-col gap-2 items-center"
        >
            {
                Azure_Project.map((project,index)=>(
                    <ProjectCard
                        key = {index}
                        {...project}
                    />
                ))
            }
        </div>
    )
}

export default Azure