"use client"
import gsap from 'gsap'
import React,{useRef,useLayoutEffect} from 'react'
import ProjectCard from '@/app/components/ProjectCard'

const BI_project = [
    {
        project_name: "Interactive Dashboard Using Excel",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/Excel/Excel-end-to-end-dashboard.png",
        project_github_link: "https://github.com/Rajendra-65/Excel-learning.git",
    }
]


const Excel= () => {

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
                className="pb-5 flex flex-col items-center"
            >
                {BI_project.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    )
}

export default Excel