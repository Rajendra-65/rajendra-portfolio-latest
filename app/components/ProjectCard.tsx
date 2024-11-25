import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'

const receivedProjectDetails = {
    project_name:"string",
    project_link:"string",
    image_url:"string",
    project_github_link:"string"
}

const ProjectCard = (project_details:typeof receivedProjectDetails) => {
    return (
        <div>
            <div 
                className="w-[92%] h-[355px] flex flex-col md:flex-row space-x-2 border border-b-4 border-r-4 border-r-white border-b-white p-3 rounded-md mb-2"
            >
                <div 
                    className="w-[89%] md:w-[72%] h-full"
                >
                    <Image
                        width={612}
                        height={612}
                        layout="intrinsic"
                        src={project_details.image_url}
                        alt="Project_Image"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "10px",
                        }}
                    />
                </div>

                <div 
                    className="w-[50%] md:w-[30%] ml-[2%] md:ml-0 md:h-full h-[50%]  flex flex-col items-center space-y-2 md:pt-4 md:justify-center"
                >
                    <div 
                        className="flex flex-col pr-3 pb-2"
                    >
                        <h1 
                            className="text-green-500"
                        >
                            Featured Project
                        </h1>
                        <h1 
                            className="font-extrabold"
                        >
                            {project_details.project_name}
                        </h1>
                        <div 
                            className="flex flex-row items-center space-x-2 mt-2"
                        >
                            <Link 
                                href={project_details.project_github_link}
                            >
                                <FaGithub 
                                    className="text-2xl" 
                                />
                            </Link>
                            <div 
                                className="bg-white border rounded-md text-center"
                            >
                                <Link 
                                    href={project_details.project_link} className="text-black font-bold underline px-2"
                                >
                                    Visit Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard