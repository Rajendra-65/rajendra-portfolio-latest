"use client"

import React from 'react'
import ProjectCard from '@/app/components/ProjectCard'
import { GrHadoop } from 'react-icons/gr'
import { SiApacheairflow, SiApachehive, SiApachekafka, SiApachespark, SiDatabricks, SiGooglebigquery, SiGooglecloud, SiMicrosoftazure, SiMongodb, SiSnowflake } from 'react-icons/si'
import { DiMysql } from 'react-icons/di'
import { useRouter } from 'next/navigation'

const project_details = [
    {
        project_name: "snapgram",
        project_link: "",
        image_url: "/snapgram-image.png",
        project_github_link: ""
    },
    {
        project_name: "Ecommercery",
        project_link: "",
        image_url: "/snapgram-image.png",
        project_github_link: ""
    }
]

const skillSet = [
    {
        skillName: "Hadoop",
        icon: GrHadoop,
        className: "text-yellow-500 w-[57px] h-[50px] rounded-sm",
        project_Link: ""
    },
    {
        skillName: "Hive",
        icon: SiApachehive,
        className: "text-yellow-500 w-[57px] h-[50px] rounded-sm",
        project_Link: ""
    },
    {
        skillName: "sql",
        icon: DiMysql,
        className: "text-white w-[57px] h-[50px] rounded-sm",
        project_Link: ""
    },
    {
        skillName:"MongoDb",
        icon:SiMongodb,
        className: "text-white w-[57px] h-[50px] rounded-sm",
        project_Link: ""
    },
    {
        skillName: "Kafka",
        icon: SiApachekafka,
        className: "text-cyan-500 w-[57px] h-[50px] rounded-sm",
        project_Link: "/kafka"
    },
    {
        skillName: "Spark",
        icon: SiApachespark,
        className: "text-white w-[57px] h-[50px] rounded-sm",
        project_Link: "/spark"
    },
    {
        skillName: "Databricks",
        icon: SiDatabricks,
        className: "text-red-500 w-[57px] h-[50px] rounded-sm",
        project_Link: "/databricks"
    },
    {
        skillName: "Airflow",
        icon: SiApacheairflow,
        className: "text-white w-[57px] h-[50px] rounded-sm",
        project_Link: "/airflow"
    },
    {
        skillName: "Snowflake",
        icon: SiSnowflake,
        className: "bg-cyan-300 text-white w-[57px] h-[50px] rounded-sm",
        project_Link: "/snowflake"
    },
    {
        skillName: "BigQuery",
        icon: SiGooglebigquery,
        className: "text-white w-[57px] h-[50px] rounded-sm",
        project_Link: "/bigquery"
    },
    {
        skillName: "GCP",
        icon: SiGooglecloud,
        className: "text-white w-[57px] h-[50px] rounded-sm",
        project_Link: "/gcp"
    },
    {
        skillName: "Azure",
        icon: SiMicrosoftazure,
        className: "text-cyan-500 w-[57px] h-[50px] rounded-sm",
        project_Link: "/azure"
    }
]

const De = () => {

    const router = useRouter()

    return (
        <>
            <div 
                className="w-[90%] h-auto border mb-3 p-2 flex justify-evenly flex-wrap"
            >
                {
                    skillSet.map((skill, index) => (
                        <div 
                            className='flex justify-center flex-col items-center w-[100px] h-[125px] border space-y-3 mt-[2px]'
                        >
                            <skill.icon 
                                className={skill.className} 
                                key={index}
                            />
                            <h1 
                                className='font-normal'
                            >
                                {skill.skillName}
                            </h1>
                            {
                                skill.project_Link.length > 0 ? (
                                    <h1 
                                        onClick={() => { router.push(skill.project_Link) }} 
                                        className='font-medium underline text-green-500 cursor-pointer'
                                    >
                                        visit-project
                                    </h1>
                                ) : (
                                    null
                                )
                            }
                        </div>
                    ))
                }
            </div>
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
        </>
    )
}

export default De