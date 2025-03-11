"use client"
import ProjectCard from "@/app/components/ProjectCard";

const pandas_Project = [
    {
        project_name: "basic-to-advance-level-plotting",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/matplotlib/basic-to-moderate-plotting.png",
        project_github_link: "https://github.com/Rajendra-65/matplotlib/blob/main/AdvancedMatplotLib.ipynb"
    }
]

const Matplotlib = () => {
        return (
            <>
                <div
                    className="pb-5 flex flex-col items-center"
                >
                    {pandas_Project.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                        />
                    ))}
                </div>
            </>
        )
}

export default Matplotlib