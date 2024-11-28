import ProjectCard from '@/app/components/ProjectCard'
import React from 'react'

const snowflake_project = [
    {
        project_name: "data-load-from-ui",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/snowflake/data-load-from-ui.png",
        project_github_link: "https://github.com/Rajendra-65/data-load-from-ui/tree/main"
    },
    {
        project_name: "snowflake-task-scheduling",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/snowflake/snowflake-task-scheduling.png",
        project_github_link: "https://github.com/Rajendra-65/snowflake-task-scheduling"
    },
    {
        project_name: "car-rental-batch-ingestion",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/snowflake/car-rental-batch-ingestion.png",
        project_github_link: "https://github.com/Rajendra-65/car-renta-batch-ingestion"
    },
    {
        project_name: "CDC-snowflake-dynamic-table",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/snowflake/cdc-snowflake-dynamic-table.png",
        project_github_link: "https://github.com/Rajendra-65/CDC-Snowflake-Dynamic-Tables"
    },
    {
        project_name: "news-data-analysis",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/snowflake/news-data-analysis.png",
        project_github_link: "https://github.com/Rajendra-65/News-Data-Analysis-Project"
    },
    {
        project_name: "snowpipe-project",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/snowflake/news-data-analysis.png",
        project_github_link: "https://github.com/Rajendra-65/snowpipe_project"
    }
]

const Page = () => {
    return (
        <div
            className='flex flex-col gap-2 items-center'
        >
            {
                snowflake_project.map((project,index)=>(
                    <ProjectCard
                        key={index}
                        {...project}
                    />
                ))
            }
        </div>
    )
}

export default Page