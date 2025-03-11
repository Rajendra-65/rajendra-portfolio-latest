"use client"
import ProjectCard from "@/app/components/ProjectCard";

const pandas_Project = [
    {
        project_name: "data-analysis-using-pandas",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/pandas/data-analysis-using-pandas.png",
        project_github_link: "https://github.com/Rajendra-65/Pandas-TUT-end-to-end/blob/main/pandas.ipynb"
    }
]

const Pandas = () => {
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

export default Pandas