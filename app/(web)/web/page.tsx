import ProjectCard from "@/app/components/ProjectCard"
import React from "react"
import { AiOutlineKubernetes } from "react-icons/ai"
import { DiMongodb, DiMysql } from "react-icons/di"
import { FaCss3, FaDocker, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { RiNextjsFill } from "react-icons/ri"

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

const Web = () => {
    return (
        <div 
            className='items-center'
        >
            <div className='w-[90%] h-auto border m-3 flex justify-evenly flex-wrap flex- p-2 rounded-sm space-y-2'>
                <div className='flex justify-center flex-col items-center w-[96px] h-[108px] border space-y-2 mt-[2px]'>
                    <FaHtml5 className="bg-yellow-500 text-black w-[57px] h-[50px] rounded-sm"/>
                    <h1 className='font-medium'>HTML</h1>
                </div>
                <div className='flex justify-center flex-col items-center w-[96px] h-[108px] border space-y-2'>
                    <FaCss3 className="bg-black text-cyan-500 w-[57px] h-[50px] rounded-sm"/>
                    <h1 className='font-medium'>CSS</h1>
                </div>
                <div className='flex justify-center flex-col items-center w-[96px] h-[108px] border space-y-2'>
                    <IoLogoJavascript className="bg-black text-cyan-500 w-[57px] h-[50px] rounded-sm"/>
                    <h1 className='font-medium'>Javascript</h1>
                </div>
                <div className='flex justify-center flex-col items-center w-[96px] h-[108px] border space-y-2'>
                    <FaReact className="bg-black text-cyan-500 w-[57px] h-[50px] rounded-sm"/>
                    <h1 className='font-medium'>React</h1>
                </div>
                <div className='flex justify-center flex-col items-center w-[96px] h-[108px] border space-y-2'>
                    <RiNextjsFill className="bg-black text-white w-[57px] h-[50px] rounded-sm"/>
                    <h1 className='font-medium'>Next.js</h1>
                </div>
                <div className='flex justify-center flex-col items-center w-[96px] h-[108px] border space-y-2'>
                    <FaNodeJs className="bg-black text-yellow-500 w-[57px] h-[50px] rounded-sm"/>
                    <h1 className='font-medium'>Node.js</h1>
                </div>
                <div className='flex justify-center flex-col items-center w-[96px] h-[108px] border space-y-2'>
                    <DiMongodb className="bg-black text-cyan-500 w-[57px] h-[50px] rounded-sm"/>
                    <h1 className='font-medium'>MongoDb</h1>
                </div>
                <div className='flex justify-center flex-col items-center w-[96px] h-[108px] border space-y-2'>
                    <DiMysql className="text-white w-[57px] h-[50px] rounded-sm"/>
                    <h1 className='font-medium'>MySql</h1>
                </div>
                <div className='flex justify-center flex-col items-center w-[96px] h-[108px] border space-y-2'>
                    <FaDocker className="text-white w-[57px] h-[50px] rounded-sm"/>
                    <h1 className='font-medium'>Docker</h1>
                </div>
                <div className='flex justify-center flex-col items-center w-[96px] h-[108px] border space-y-2'>
                    <AiOutlineKubernetes className="text-white w-[57px] h-[50px] rounded-sm"/>
                    <h1 className='font-medium'>Kubernetes</h1>
                </div>
                
            </div>
            <div
                className="pb-5 flex flex-col items-center ml-[2%]"
            >
                {project_details.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                    />
                ))}
            </div>
        </div>
    )
}

export default Web