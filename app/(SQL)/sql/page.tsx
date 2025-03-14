import ProjectCard from "@/app/components/ProjectCard"

const sqlProject = [
    {
        project_name: "Online-BookStore-data-Analysis-using-SQL",
        project_link: "https://github.com/Rajendra-65/",
        image_url: "/sql/sql-online-bookstore.png",
        project_github_link: "https://github.com/Rajendra-65/end-to-end-sql-project"
    }
]

const Sql = () => {
    return (
        <div
                className="pb-5 flex flex-col items-center ml-[2%]"
            >
                {sqlProject.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                    />
                ))}
            </div>
    )
}

export default Sql