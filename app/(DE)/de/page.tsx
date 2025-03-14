"use client"
import gsap from 'gsap'
import React,{useRef,useLayoutEffect} from 'react'
import ProjectCard from '@/app/components/ProjectCard'
import { GrHadoop } from 'react-icons/gr'
import { SiApacheairflow, SiApachehive, SiApachekafka, SiApachespark, SiDatabricks, SiGooglebigquery, SiGooglecloud, SiMicrosoftazure, SiMongodb, SiNumpy, SiPandas, SiPowerbi, SiSnowflake } from 'react-icons/si'
import { DiMysql } from 'react-icons/di'
import { PiMicrosoftExcelLogoDuotone } from "react-icons/pi"
import { useRouter } from 'next/navigation'
import { MdScatterPlot } from 'react-icons/md'

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
        project_Link: "/sql"
    },
    {
        skillName: "pandas",
        icon: SiPandas,
        className: "text-white w-[57px] h-[50px] rounded-sm mt-2  ",
        project_Link: "/pandas"
    },
    {
        skillName: "numpy",
        icon: SiNumpy,
        className: "text-white w-[57px] h-[50px] rounded-sm mt-2  ",
        project_Link: "/numpy"
    },
    {
        skillName: "matplotlib",
        icon: MdScatterPlot,
        className: "text-white w-[57px] h-[50px] rounded-sm mt-2  ",
        project_Link: "/matplotlib"
    },
    {
        skillName: "Excel",
        icon: PiMicrosoftExcelLogoDuotone,
        className: "text-cyan-500 w-[57px] h-[50px] rounded-sm mt-2  ",
        project_Link: "/Excel"
    },
    {
        skillName: "Kafka",
        icon: SiApachekafka,
        className: "text-cyan-500 w-[57px] h-[50px] rounded-sm mt-2  ",
        project_Link: "/kafka"
    },
    {
        skillName:"MongoDb",
        icon:SiMongodb,
        className: "text-white w-[57px] h-[50px] rounded-sm mt-2  ",
        project_Link: "/mongo"
    },
    {
        skillName: "Spark",
        icon: SiApachespark,
        className: "text-white w-[57px] h-[50px] rounded-sm mt-2  ",
        project_Link: "/spark"
    },
    {
        skillName: "Databricks",
        icon: SiDatabricks, 
        className: "text-red-500 w-[57px] h-[50px] rounded-sm mt-2  ",
        project_Link: "/databricks"
    },
    {
        skillName: "Airflow",
        icon: SiApacheairflow,
        className: "text-white w-[57px] h-[50px] rounded-sm mt-2  ",
        project_Link: "/airflow"
    },
    {
        skillName: "Snowflake",
        icon: SiSnowflake,
        className: "bg-cyan-300 text-white w-[57px] h-[50px] rounded-sm mt-2  ",
        project_Link: "/snowflake"
    },
    {
        skillName: "BigQuery",
        icon: SiGooglebigquery,
        className: "text-white w-[57px] h-[50px] rounded-sm mt-2  ",
        project_Link: "/bigquery"
    },
    {
        skillName: "GCP",
        icon: SiGooglecloud, 
        className: "text-white w-[57px] h-[50px] rounded-sm mt-2  ",
        project_Link: ""
    },
    {
        skillName: "Azure",
        icon: SiMicrosoftazure,
        className: "text-cyan-500 w-[57px] h-[50px] rounded-sm mt-2  ",
        project_Link: "/azure"
    },
    {
        skillName: "Power BI",
        icon: SiPowerbi,
        className: "text-cyan-500 w-[57px] h-[50px] rounded-sm mt-2  ",
        project_Link: "/BI"
    }
]

const De = () => {

    const router = useRouter()

    const containerRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        // Ensure the ref is not null before using it
        if (containerRef.current) {
            gsap.from(containerRef.current.children,{
                x:50,
                duration:1,
                delay:1,
                opacity:0,
                stagger:0.2
            })
        }
    }, []);

    return (
        <>
            <div 
                ref={containerRef}
                className="w-[90%] h-auto border mb-3 p-4 flex justify-evenly flex-wrap space-y-2 space-x-2"
            >
                {
                    skillSet.map((skill, index) => (
                        <div 
                            className='flex justify-center flex-col items-center w-[100px] h-[125px] border space-y-3 mt-[2px] gap-[6px] pb-[5px]'
                            key={index}
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
                                        className='font-medium underline text-green-500 cursor-pointer mb-[5px]'
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
                {Azure_Project.map((project, index) => (
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