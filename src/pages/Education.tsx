import EducationCard from "../components/EducationCard"
import CarIco from "../components/icons/CarIco"
import FromMySelfIco from "../components/icons/FromMySelfIco"
import FromSchoolIco from "../components/icons/FromSchoolIco"
import MediumBikeIco from "../components/icons/MediumBikeIco"
import SmallBikeIco from "../components/icons/SmallBikeIco"
import { educationHistory, ExpertiseLevel, skillsFromSchool, skillsSelfTaught } from "../model/Education"
import styles from './Education.module.css'

function Education() 
{
    return (
        <section id='education' className="pt-20">
            <h1 className="text-5xl font-bold uppercase">Education</h1>
            <div className="flex flex-col justify-center content-center pt-10 text-primary">
                {
                    educationHistory.map((ed, idx) => {
                        return <>
                            <div className="py-5">
                                <EducationCard key={idx} data={ed}></EducationCard>
                            </div>
                            <div className="w-100 flex justify-center">
                                <div className="rounded" style={{height: 90 + "px", borderLeft: 6 + "px solid var(--accent-color)"}}></div>
                            </div>
                            {
                                (idx === educationHistory.length - 1) ? <>
                                    <div className="w-100 flex justify-center">
                                        <div className="rounded" style={{height: 30 + "px", borderLeft: 6 + "px dotted var(--accent-color)"}}></div>
                                    </div></> : <></>
                            }
                        </>
                        })
                }                

            </div>
            <h2 className="text-4xl font-bold uppercase pt-10">Certifications <span className="text-2xl">& more</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 pt-5 gap-2 text-primary">
                <div className={styles.grid_cell + " row-span-auto p-6 bg-[--nav-bg]"}>
                    <div className="text-sm text-secondary">Issued on: 29/07/2023</div>
                    <div className="text-2xl">Cambridge Advanced English (CAE)</div>
                    <div className="text-xl accent-clr">British School @ Rimini, IT</div>
                    <div className="mt-5 flex flex-row justify-between">
                        <div className="font-bold text-2xl">C1 Level</div>
                        <div>Grade C</div>
                    </div>
                    <div className="md:grow"></div>
                    <div className="mt-10 md:mt-0 text-2xl font-bold accent-clr">Table of Scores</div>
                    <table className="mt-4">
                        <tr>
                            <td className="text-xl">Speaking:</td>
                            <td className="text-xl flex justify-end">
                                <progress className="hidden xl:block" value={187} max={210}></progress>
                                <p className="block xl:hidden"><span className="accent-clr">187</span>/210</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xl">Listening:</td>
                            <td className="text-xl flex justify-end">
                                <progress className="hidden xl:block" value={205} max={210}></progress>
                                <p className="block xl:hidden"><span className="accent-clr">205</span>/210</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xl">Reading:</td>
                            <td className="text-xl flex justify-end">
                                <progress className="hidden xl:block" value={188} max={210}></progress>
                                <p className="block xl:hidden"><span className="accent-clr">188</span>/210</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-xl">Writing:</td>
                            <td className="text-xl flex justify-end">
                                <progress className="hidden xl:block" value={172} max={210}></progress>
                                <p className="block xl:hidden"><span className="accent-clr">172</span>/210</p>
                            </td>
                        </tr>
                    </table>
                </div>
                
                <div className={styles.grid_cell + " row-span-auto bg-[--nav-bg]"}>
                    <div className="p-6">
                        <div className="text-sm text-secondary">Issued on: 26/11/2022</div>
                        <div className="text-2xl">"Pizzinelli" Foundation Scholarship</div>
                        <div className="grow"></div>
                        <div className="text-xl accent-clr">'Marco Pizzinelli' Foundation @ Cesena, IT</div>
                    </div>
                    <img className="mt-auto" src={import.meta.env.BASE_URL + "imgs/pizzinelli.jpg"} alt="" />
                </div>
                {/* MMA */}
                <div className={styles.grid_cell + " row-span-auto bg-[--nav-bg]"}>
                    <img className="mb-auto" src={import.meta.env.BASE_URL + "imgs/wisetreeam.jpg"} alt="" />
                    <div className="p-6">
                        <div className="text-sm text-secondary">Issued on: 05/05/2023</div>
                        <div className="text-2xl">3rd Place "Metodi Matematici per l'Animazione"</div>
                        <div className="text-xl accent-clr">Alma Mater Studiorum, University of Bologna @ Department of Mathematics</div>
                        <div className="grow"></div>
                        <div className="text-pretty mt-6">We reached the 3rd place developing the game <a target="_blank" className="accent-clr" href="https://github.com/lspita/MMA-2023"><i className="fa fa-link"></i> 'CON NOME' - Minigolf randomico</a> - using <span className="font-bold">BabylonJS</span> and <span className="font-bold">TypeScript</span>.</div>
                    </div>
                </div>
                {/* WSC */}
                <div className={styles.grid_cell + " row-span-1 p-6 bg-[--nav-bg]"}>
                    <div className="text-sm text-secondary">Issued on: 18/11/2021</div>
                    <div className="text-2xl">Workplace Safety Course</div>
                    <div className="grow"></div>
                    <div className="text-xl accent-clr">"Istituto Tecnico Tecnologico 'Blaise Pascal'" @ Cesena, IT</div>
                </div>
                {/* Driving License */}
                <div className={styles.grid_cell + " lg:col-span-2 row-span-1 p-6 bg-[--nav-bg]"}>
                    <div className="text-sm text-secondary">Issued on: 22/05/2023</div>
                    <div className="text-2xl">Driving License B</div>
                    <div className="md:grow"></div>
                    <div className="mt-3 text-xl">Can drive: </div>
                    <div className="flex flex-row justify-between mt-5">
                        <div>
                            <CarIco/>
                            <div className="text-center">Car</div>
                        </div>
                        <div>
                            <MediumBikeIco/>
                            <div className="text-center">125cc</div>
                        </div>
                        <div>
                            <SmallBikeIco/>
                            <div className="text-center">50cc</div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-4xl font-bold uppercase pt-10">Technical Knowledge</h2>
            <div className="grid lg:grid-cols-2 pt-10 text-primary">
                <div className="flex flex-wrap flex-col content-center lg:px-10">
                    <div className="flex justify-center">
                        <FromSchoolIco/>
                    </div> 
                    <h3 className="mt-5 text-2xl text-center font-bold w-full">Learnt from School</h3>
                    <hr className="my-3"></hr>
                    <table className="mt-5">
                        { 
                            skillsFromSchool.map(skill => 
                                <tr className="text-xl">
                                    <td className="pe-10">{skill.name}</td>
                                    <td className="text-end accent-clr">{ExpertiseLevel[skill.expertise]}</td>
                                </tr>)
                        }
                    </table>
                </div> 
                <div className="mt-10 lg:mt-0 flex flex-wrap flex-col content-center lg:px-10">
                    <div className="flex justify-center">
                        <FromMySelfIco/>
                    </div>
                    <h3 className="mt-5 text-2xl text-center font-bold w-full">Self-taught</h3>
                    <hr className="my-3"></hr>
                    <table className="mt-5">
                        { 
                            skillsSelfTaught.map(skill => 
                                <tr className="text-xl">
                                    <td className="pe-10">{skill.name}</td>
                                    <td className="text-end accent-clr">{ExpertiseLevel[skill.expertise]}</td>
                                </tr>)
                        }
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Education