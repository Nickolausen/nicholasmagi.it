import { ReactNode } from "react";
import { languageToID, ProjectDetails } from "../model/ProjectDetails"

interface IProps {
    project_info?: ProjectDetails
}

const monthConversion: { [nr: string]: string } = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December",
    "undefined": "undefined_str"
};


export default function ProjectCard( { project_info }: IProps)  
{    
    let start_month: string = monthConversion[project_info?.start_date.split("/")[0]!!]
    let end_month: string | undefined = monthConversion[project_info?.end_date?.split("/")[0]!!]
    
    let start_year: string = project_info?.start_date.split("/")[1]!!
    let end_year: string | undefined = project_info?.start_date.split("/")[1]!!
    
    let tecn_string: string = "https://skillicons.dev/icons?i="
    project_info?.technologies.forEach(tecn => tecn_string += languageToID[tecn] + ",")

    let img_id: string = project_info?.name.toLowerCase().replace(" ", "_")!!

    return <>
        <div className="w-full shadow-xl flex items-center flex-col md:flex-row rounded-lg hover:shadow-2xl hover:scale-[1.02] transition bg-[--nav-bg]">
            <div className="w-full md:w-auto md:min-w-2xl h-full flex justify-center items-center bg-white py-3 md:py-0 rounded-l-lg"> { /* Image container */}
                <img className="max-w-64 lg:max-w-96 rounded-lg px-2" src={import.meta.env.BASE_URL + "imgs/projects/" + img_id + ".png"} alt="" />
            </div>
            <div className="p-5  h-full flex flex-col justify-between">
                <div>
                    <h3 className='text-3xl font-bold'>{!project_info?.is_source_available ? <i className="fa fa-lock" data-tooltip-target={"tooltip-privacy-" + img_id} data-tooltip-placement="top"></i> : <></>} &lt;{project_info?.name}<span className='accent-clr'>/</span>&gt;</h3>
                    <h4 className="text-xl"><span className="accent-clr">{project_info?.company} @ {project_info?.location}</span> <span className="text-[--secondary-color]">- from {start_month} {start_year} {end_year ? <>{"to " + end_month + " " + end_year}</> : <>&#8212; ongoing</>}</span></h4>
                    <p className="mt-3 text-pretty">{project_info?.description}</p>
                </div>
                <div className="flex flex-row gap-5 flex-wrap">
                    {
                        project_info?.technologies.map<ReactNode>((tec: string) => {
                            let tooltip_tec_id: string = tec + img_id
                            return <>
                                <img data-tooltip-target={"tooltip-"+ tooltip_tec_id} data-tooltip-placement="bottom" className='pt-5 w-10' src={"https://skillicons.dev/icons?i=" + languageToID[tec]}></img>
                                <div id={"tooltip-"+ tooltip_tec_id} role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-[--accent-color] rounded-lg shadow-lg opacity-0 tooltip">
                                    {tec}
                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>

            <div id={"tooltip-privacy-" + img_id} role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-[--accent-color] rounded-lg shadow-lg opacity-0 tooltip">
                The source code is not available
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </>
}