"use client"
import ProjectCard from "@/app/components/ProjectCard";

const numpy_Project = [
    {
        project_name: "learning-numpy-functionality",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/numpy/numpy-functionality.png",
        project_github_link: "https://github.com/Rajendra-65/numpy-basic-to-moderate/blob/main/numpy.ipynb"
    }
]

const Numpy = () => {
        return (
            <>
                <div
                    className="pb-5 flex flex-col items-center"
                >
                    {numpy_Project.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                        />
                    ))}
                </div>
            </>
        )
}

export default Numpy