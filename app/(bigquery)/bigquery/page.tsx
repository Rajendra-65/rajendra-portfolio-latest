import ProjectCard from "@/app/components/ProjectCard";
import React from "react";

const bigquery_project = [
    {
        project_name: "Bigquery-data-canvas",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/bigquery/Bigquery_data_canvas.png",
        project_github_link: "https://github.com/Rajendra-65/Big-query-data-canvas",
    },
    {
        project_name: "Bigquery-external-data-table",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/bigquery/Bigquery_external_data_table.png",
        project_github_link:
            "https://github.com/Rajendra-65/External-table-example",
    },
    {
        project_name: "irctc-pub-sub-stream-to-Bigquery",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/bigquery/Bigquery_external_data_table.png",
        project_github_link:
            "https://github.com/Rajendra-65/irctc-pubsub-stream-to-BQ",
    },
    {
        project_name: "walmart-data-ingestion-into-Bigquery",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/bigquery/Bigquery_external_data_table.png",
        project_github_link:
            "https://github.com/Rajendra-65/Walmart-Data-Ingestion-In-BigQuery-Project",
    },
];

const Page = () => {
    return (
        <div className="flex flex-col gap-2 items-center">
            {bigquery_project.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    );
};

export default Page;
