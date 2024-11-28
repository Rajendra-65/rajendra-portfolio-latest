import ProjectCard from "@/app/components/ProjectCard"
import React from "react"

const databricks_project = [
    {
        project_name: "databricks-spark-demo",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/databricks/databricks-spark-demo.png",
        project_github_link: "https://github.com/Rajendra-65/databricks-spark-demo"
    },
    {
        project_name: "gcp_dataproc_pyspark_job",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/databricks/databricks-spark-demo.png",
        project_github_link: "https://github.com/Rajendra-65/databricks-spark-demo"
    },
    {
        project_name: "gcp-to-hive",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/databricks/gcp-to-hive.png",
        project_github_link: "https://github.com/Rajendra-65/gcp-to-hive"
    },
    {
        project_name: "Healthcare-DLT-pipeline",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/databricks/Healthcare_dlt_pipeline.png",
        project_github_link: "https://github.com/Rajendra-65/Healthcare_DLT_Pipeline"
    },
    {
        project_name: "order-tracking-incremental-load",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/databricks/order-tracking-incremental-load.png",
        project_github_link: "https://github.com/Rajendra-65/order-tracking-incremental-load"
    },
    {
        project_name: "SCD2-Merge-Bookings",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/databricks/SCD2_Merge_Bookings.png",
        project_github_link: "https://github.com/Rajendra-65/SCD2_Merge_Bookings_Incremental_Data_Processing"
    }
]

const Databricks = () => {
    return(
        <div
            className="flex flex-col gap-2 items-center"
        >
            {
                databricks_project.map((project,index)=>(
                    <ProjectCard
                        key={index}
                        {...project}
                    />
                ))
            }
        </div>
    )
}

export default Databricks