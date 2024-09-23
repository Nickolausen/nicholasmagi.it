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
            description: "The main goal was to create a software that, given a dataset containing pictures of fragments of ancient pots, resembles the original pictures. Two different approaches have been tested: trying to look up online for a ready-to-use solution and, in parallel, developing a procedural Python software. We eventually discovered 'JigsawNet' by Le Canyu and Li Xin - on GitHub, a CNN capable of resembling pieces of an image without knowing how the original picture would have looked like.",
            start_date: "10/2023",
            end_date: "11/2023",
            is_source_available: false,
            technologies: [
                "Python"
            ]
        },
        {
            name: "Project Script Manager",
            company: "NEAT S.R.L",
            location: "Rome, IT",
            description: "The project aimed to develop a working IDE that could store files in a server, organize them in directories and did have to support multiple programming languages. I worked in the front-end side, integrating Monaco Editor in Vue.js and providing all the features a VS Code-like editor has.",
            start_date: "04/2023",
            end_date: "04/2023",
            is_source_available: false,
            technologies: [
                "VueJS", "TypeScript", "NodeJS", "Bootstrap"
            ]
        },
        {
            name: "Cricchetto24",
            company: "Gruppo Maggioli",
            location: "Sant'Arcangelo di Romagna, IT",
            description: "During my internship period (in the 4th year of High School) I worked in Gruppo Maggioli, where our tutor required us to develop a clone of 'AutoScout24' - an online platform where you can buy or sell cars. The classroom was split in 2 teams: Front-End and Back-End. I ended up leading the Front-End team and we built all the necessary and essential pages: Home, Search (and Detailed Search), Results Page and Private Dashboard.",
            start_date: "05/2022",
            end_date: "06/2022",
            is_source_available: false,
            technologies: [
                "Angular", "TypeScript", "JavaScript", "Bootstrap", "HTML", "CSS"
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