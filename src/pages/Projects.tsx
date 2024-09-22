import { ReactNode, useEffect, useState } from "react"
import GHRepoCard from "../components/GHRepoCard"
import { GHRepoDetails, ProjectDetails } from "../data/ProjectDetails"
import ProjectCard from "../components/ProjectCard"

function Projects() 
{
    const [ repos, setRepos ] = useState<GHRepoDetails[]>([])

    useEffect(() => {
        let fetchedRepos: GHRepoDetails[] = []

        fetch("https://pinned.berrysauce.me/get/Nickolausen")
            .then((res) => res.json())
            .then((data) => {
                data.forEach((el: any) => {
                    fetchedRepos.push(
                        { 
                            author: `${el.author}`,
                            name: `${el.name}`,
                            description: `${el.description}`,
                            language: `${el.language}`,
                            stars: Number(el.stars)
                        })    
                    })
                    
                    setRepos(fetchedRepos)
                })
    }, [])

    let projects: ProjectDetails[] = [
        {
            name: "Project Ercole",
            company: "Arakne S.R.L",
            location: "Rome, IT",
            description: "The main goal was to create a software that, given a fragments of ancient pots dataset, resembles the original pictures. Two different approaches have been tested: trying to look up online for a ready-to-use solution and, in parallel, developing a procedural Python software.",
            start_date: "10/2023",
            end_date: "11/2023",
            is_source_available: false,
            technologies: [
                "Python"
            ]
        },
        {
            name: "Project Script_Manager",
            company: "NEAT S.R.L",
            location: "Rome, IT",
            description: "The project aimed to develop a working IDE that could store files in a server, organize them in directories and did have to support multiple programming languages. I worked in the front-end side, integrating Monaco Editor in Vue.js and providing all the features a VS Code-like editor has.",
            start_date: "04/2023",
            end_date: "04/2023",
            is_source_available: false,
            technologies: [
                "VueJS", "TypeScript", "NodeJS", "Bootstrap"
            ]
        }
    ] 

    return <>
        <section id="projects" className="pt-20">
            <h1 className="text-5xl font-bold uppercase">Projects</h1>
            <h3 className="text-primary text-3xl font-bold uppercase mt-10"><i className="fa fa-chevron-right"></i> From my GitHub's pinned repositories</h3>
            <div className="pt-8 grid md:grid-cols-2 2xl:grid-cols-4 gap-5 gap-y-8 text-primary">
                { 
                    repos.map<ReactNode>((repo: GHRepoDetails, idx: number) => <GHRepoCard key={idx} data={repo}/>)
                }
            </div>
            <h3 className="text-primary text-3xl font-bold uppercase pt-20"><i className="fa fa-chevron-right"></i> From previous work experiences</h3>
            <div className="pt-8 grid grid-cols-1 gap-5 text-primary">
                {
                    projects.map<ReactNode>((proj: ProjectDetails, idx: number) => <ProjectCard key={idx} project_info={proj}/>)
                }
            </div>
        </section>
    </>
}

export default Projects