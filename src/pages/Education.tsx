import EducationCard from "../components/EducationCard"
import { EducationTitle, Expertise } from "../data/Education"
import styles from './Education.module.css'

const from_school = [
    {name: "C", expertise: Expertise.Intermediate},
    {name: "C#", expertise: Expertise.Intermediate},
    {name: "Blazor", expertise: Expertise.Beginner},
    {name: "Java", expertise: Expertise.Beginner},
    {name: "Bash", expertise: Expertise.Beginner},
    {name: "Design a WPF", expertise: Expertise.Intermediate},
    {name: "JavaScript & JQuery", expertise: Expertise.Intermediate},
    {name: "HTML", expertise: Expertise.Excellent},
    {name: "CSS & Bootstrap", expertise: Expertise.Excellent},
    {name: "SQL", expertise: Expertise.Intermediate},
    {name: "Design in Figma", expertise: Expertise.Intermediate},
    {name: "Design a network w/CISCO Packet Tracer", expertise: Expertise.Beginner},
]

const self_taught = [
    {name: "Python", expertise: Expertise.Beginner},
    {name: "Manim - python library", expertise: Expertise.Intermediate},
    {name: "React", expertise: Expertise.Beginner},
    {name: "Vue", expertise: Expertise.Beginner},
    {name: "Tailwind CSS", expertise: Expertise.Intermediate},
    {name: "Typescript", expertise: Expertise.Beginner},
]

const expertise_strings: String[] = []
expertise_strings[Expertise.Beginner] = "Beginner"
expertise_strings[Expertise.Intermediate] = "Intermediate"
expertise_strings[Expertise.Excellent] = "Excellent"

const educationHistory: EducationTitle[] = [{
        start_year: 2018,
        end_year: 2023,
        title_description: "High School Diploma in Computer Science and Telecommunications",
        school: "Istituto Tecnico Tecnologico 'B. Pascal' @ Cesena, IT",
        grade: 100,
        max_grade: 100,
        withHonours: true
     }, 
    {
        start_year: 2023,
        end_year: 2026,
        title_description: "Bachelor Degree in Computer Science and Engineering",
        school: "Alma Mater Studiorum, University of Bologna @ Cesena, IT",
        grade: NaN,
        max_grade: 110,
        withHonours: false
    }]

educationHistory.sort((a, b) => (a.start_year > b.start_year) ? -1 : 1)

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
                <div className={styles.grid_cell + " row-span-auto p-6 bg-[--bg-color]"}>
                    <div className="text-sm text-gray-500">Issued on: 29/07/2023</div>
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
                
                <div className={styles.grid_cell + " row-span-auto bg-[--bg-color]"}>
                    <div className="p-6">
                        <div className="text-sm text-gray-500">Issued on: 26/11/2022</div>
                        <div className="text-2xl">"Pizzinelli" Foundation Scholarship</div>
                        <div className="grow"></div>
                        <div className="text-xl accent-clr">'Marco Pizzinelli' Foundation @ Cesena, IT</div>
                    </div>
                    <img className="mt-auto" src={import.meta.env.BASE_URL + "imgs/pizzinelli.jpg"} alt="" />
                </div>
                {/* MMA */}
                <div className={styles.grid_cell + " row-span-auto bg-[--bg-color]"}>
                    <img className="mb-auto" src={import.meta.env.BASE_URL + "imgs/wisetreeam.jpg"} alt="" />
                    <div className="p-6">
                        <div className="text-sm text-gray-500">Issued on: 05/05/2023</div>
                        <div className="text-2xl">3rd Place "Metodi Matematici per l'Animazione"</div>
                        <div className="text-xl accent-clr">Alma Mater Studiorum, University of Bologna @ Department of Mathematics</div>
                        <div className="grow"></div>
                        <div className="text-pretty mt-6">We reached the 3rd place developing the game <a target="_blank" className="accent-clr" href="https://github.com/lspita/MMA-2023"><i className="fa fa-link"></i> 'CON NOME' - Minigolf randomico</a> - using <span className="font-bold">BabylonJS</span> and <span className="font-bold">TypeScript</span>.</div>
                    </div>
                </div>
                {/* WSC */}
                <div className={styles.grid_cell + " row-span-1 p-6 bg-[--bg-color]"}>
                    <div className="text-sm text-gray-500">Issued on: 18/11/2021</div>
                    <div className="text-2xl">Workplace Safety Course</div>
                    <div className="grow"></div>
                    <div className="text-xl accent-clr">"Istituto Tecnico Tecnologico 'Blaise Pascal'" @ Cesena, IT</div>
                </div>
                {/* Driving License */}
                <div className={styles.grid_cell + " lg:col-span-2 row-span-1 p-6 bg-[--bg-color]"}>
                    <div className="text-sm text-gray-500">Issued on: 22/05/2023</div>
                    <div className="text-2xl">Driving License B</div>
                    <div className="md:grow"></div>
                    <div className="mt-3 text-xl">Can drive: </div>
                    <div className="flex flex-row justify-between mt-5">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                <path d="M7 13.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm9 1c0-.276-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5zm4-1c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-17.298-6.5h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2zm19.318 3.168c-.761-1.413-1.699-3.17-2.684-4.812-.786-1.312-1.37-1.938-2.751-2.187-1.395-.25-2.681-.347-4.585-.347s-3.19.097-4.585.347c-1.381.248-1.965.875-2.751 2.187-.981 1.637-1.913 3.382-2.684 4.812-.687 1.273-.98 2.412-.98 3.806 0 1.318.42 2.415 1 3.817v2.209c0 .552.448 1 1 1h1.5c.552 0 1-.448 1-1v-1h13v1c0 .552.448 1 1 1h1.5c.552 0 1-.448 1-1v-2.209c.58-1.403 1-2.499 1-3.817 0-1.394-.293-2.533-.98-3.806zm-15.641-3.784c.67-1.117.852-1.149 1.39-1.246 1.268-.227 2.455-.316 4.231-.316s2.963.088 4.231.316c.538.097.72.129 1.39 1.246.408.681.81 1.388 1.195 2.081-1.456.22-4.02.535-6.816.535-3.048 0-5.517-.336-6.805-.555.382-.686.779-1.386 1.184-2.061zm11.595 10.616h-11.948c-1.671 0-3.026-1.354-3.026-3.026 0-1.641.506-2.421 1.184-3.678 1.041.205 3.967.704 7.816.704 3.481 0 6.561-.455 7.834-.672.664 1.231 1.166 2.01 1.166 3.646 0 1.672-1.355 3.026-3.026 3.026zm5.526-10c.276 0 .5.224.5.5v.511c0 .793-.926.989-1.616.989l-1.086-2h2.202z"/>
                            </svg>
                            <div className="text-center">Car</div>
                        </div>
                        <div>
                            <svg fill="#000000" height="50" width="50" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.001 490.001" >
                            <path d="M410.689,235.919c-14.154,0-27.443,3.744-38.96,10.268l-20.528-27.251c26.069-19.054,52.85-27.796,55.161-28.526
                                c2.881-0.916,5.223-3.034,6.424-5.794c1.201-2.769,1.15-5.925-0.153-8.644c-35.267-73.853-89.95-80.237-92.262-80.472
                                c-4.429-0.438-8.471,1.853-10.394,5.732c-1.935,3.889-1.253,8.563,1.699,11.749c6.486,6.964,9.173,14.499,8.207,23.04
                                c-0.418,3.72-1.502,7.509-3.085,11.297c-59.498-19.458-97.449,8.263-110.85,20.886c-33.22-11.701-63.089-17.613-89.272-17.613
                                c-40.358,0-57.371,14.273-59.183,15.903c-2.952,2.656-4.144,6.77-3.055,10.599c1.09,3.828,4.256,6.698,8.165,7.412
                                c38.377,6.954,65.206,20.062,83.918,35.579l-24.247,28.524c-12.389-8.014-27.131-12.689-42.953-12.689
                                C35.583,235.919,0,271.502,0,315.232c0,43.738,35.583,79.321,79.322,79.321c43.738,0,79.322-35.583,79.322-79.321
                                c0-20.417-7.76-39.054-20.482-53.127l23.244-27.344c33.791,39.865,26.9,87.054,26.418,90.061c-0.51,3.023,0.346,6.108,2.331,8.45
                                c1.975,2.342,4.887,3.685,7.952,3.685h93.239c3.044,0,5.947-1.334,7.921-3.645c1.985-2.321,2.851-5.387,2.382-8.399
                                c-6.43-40.978,11.064-71.267,33.506-92.626l19.928,26.455c-14.626,14.395-23.715,34.398-23.715,56.489
                                c0,43.738,35.583,79.321,79.322,79.321c43.729,0,79.311-35.583,79.311-79.321C490.001,271.502,454.418,235.919,410.689,235.919z
                                M305.611,165.692c-10.235,13.117-23.696,24.748-32.785,31.59c-15.446-7.856-30.35-14.726-44.694-20.611
                                C241.759,166.856,267.735,154.879,305.611,165.692z M137.792,315.232c0,32.243-26.226,58.47-58.471,58.47
                                c-32.243,0-58.471-26.227-58.471-58.47c0-32.234,26.228-58.462,58.471-58.462c10.673,0,20.677,2.888,29.299,7.901l-37.24,43.81
                                l15.883,13.5l37.242-43.811C132.804,288.265,137.792,301.176,137.792,315.232z M279.708,316.106h-70.433
                                c0.662-30.634-7.748-110.953-108.848-143.666c4.755-0.622,10.162-0.998,16.249-0.998c27.969,0,77.082,8.206,152.251,47.28
                                c3.38,1.763,7.482,1.549,10.659-0.631c2.301-1.557,56.373-38.689,61.017-79.708c0.56-4.898,0.417-9.652-0.408-14.224
                                c14.101,7.595,32.651,22.338,48.432,50.713C357.483,187.844,274.16,230.707,279.708,316.106z M410.689,373.702
                                c-32.244,0-58.47-26.227-58.47-58.47c0-15.289,5.907-29.22,15.551-39.648l34.592,45.919l16.656-12.543l-34.6-45.931
                                c7.905-3.993,16.826-6.259,26.272-6.259c32.234,0,58.46,26.228,58.46,58.462C469.15,347.475,442.923,373.702,410.689,373.702z"/>
                            </svg>
                            <div className="text-center">125cc</div>
                        </div>
                        <div>
                            <svg fill="#000000" height="50" width="50" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">
                                <path d="M357.767,40.709c-0.208,6.848,2.693,12.863,7.371,18.019l-39.191,17.391c-3.141-0.651-6.365-0.997-9.648-0.997H173.701
                                    c-2.346,0-4.659,0.185-6.937,0.519l-37.608-16.688c4.805-5.205,7.577-11.292,7.577-18.243C136.733,13.984,95.835,0,55.426,0
                                    C22.885,0,0,9.927,0,9.927v61.566c0,0,22.138,9.926,55.426,9.926c18.85,0,37.805-3.044,52.667-9.004l33.78,14.99
                                    c-1.615,1.44-22.016,17.826-17.796,49.527l30.381,226.562c3.154,23.512,20.408,41.861,41.621,45.608v31.967
                                    c0,26.98,21.95,48.931,48.921,48.931c26.98,0,48.93-21.951,48.93-48.931v-31.968c21.209-3.751,38.467-22.099,41.621-45.607
                                    l30.381-226.562c2.199-16.432-2.446-33.8-16.566-48.397l36.666-16.27c14.917,6.059,34.032,9.155,53.041,9.155
                                    c25.642,0,50.927-8.104,50.927-8.104V8.104C459.448-6.022,359.115-3.764,357.767,40.709z M20.851,56.398V25.02
                                    c10.253-2.708,22.255-4.169,34.575-4.169c37.507,0,60.456,12.859,60.456,19.858c0,7-22.949,19.859-60.456,19.859
                                    C43.107,60.568,31.104,59.107,20.851,56.398z M316.298,95.973c22.958,0,31.353,24.901,28.966,38.19l-7.635,56.938h-40.111
                                    c-4.56-26.828-26.364-47.225-52.519-47.225c-26.147,0-47.949,20.397-52.509,47.225h-40.11l-7.635-56.938
                                    c-1.995-15.768,7.163-38.19,28.955-38.19H316.298z M277.559,201.526c0,20.291-14.61,36.795-32.559,36.795
                                    c-17.95,0-32.549-16.504-32.549-36.795c0-20.291,14.6-36.8,32.549-36.8C262.949,164.726,277.559,181.235,277.559,201.526z
                                    M273.079,441.069c0,15.485-12.594,28.08-28.079,28.08c-15.476,0-28.07-12.595-28.07-28.08V357.71
                                    c0-15.486,12.594-28.08,28.07-28.08c15.485,0,28.079,12.594,28.079,28.08V441.069z M314.883,360.725
                                    c-1.743,13.004-10.202,23.42-20.953,26.948V357.71c0-26.98-21.95-48.931-48.93-48.931c-26.971,0-48.921,21.951-48.921,48.931v29.964
                                    c-10.749-3.526-19.21-13.944-20.953-26.95l-19.949-148.773h37.314c4.56,26.824,26.363,47.22,52.509,47.22
                                    c26.155,0,47.958-20.396,52.518-47.22h37.315L314.883,360.725z M469.149,57.478c-9.225,2.032-19.467,3.09-30.076,3.09
                                    c-37.508,0-60.456-12.859-60.456-19.859c0-6.999,22.947-19.858,60.456-19.858c10.609,0,20.851,1.059,30.076,3.09V57.478z"/>
                            </svg>
                            <div className="text-center">50cc</div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-4xl font-bold uppercase pt-10">Technical Knowledge</h2>
            <div className="grid lg:grid-cols-2 pt-10 text-primary">
                <div className="flex flex-wrap flex-col content-center">
                    <div className="flex justify-center">
                        <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M22 21c.53 0 1.039.211 1.414.586.376.375.586.884.586 1.414v1h-6v-1c0-1.104.896-2 2-2h2zm-7 0c.53 0 1.039.211 1.414.586.376.375.586.884.586 1.414v1h-6v-1c0-1.104.896-2 2-2h2zm7 1h-2c-.551 0-1 .448-1 1h4c0-.564-.461-1-1-1zm-7 0h-2c-.551 0-1 .448-1 1h4c0-.564-.461-1-1-1zm-6.758-1.216c-.025.679-.576 1.21-1.256 1.21-.64 0-1.179-.497-1.254-1.156l-.406-4.034-.317 4.019c-.051.656-.604 1.171-1.257 1.171-.681 0-1.235-.531-1.262-1.21l-.262-6.456-.308.555c-.241.437-.8.638-1.265.459-.404-.156-.655-.538-.655-.951 0-.093.012-.188.039-.283l1.134-4.098c.17-.601.725-1.021 1.351-1.021h4.096c.511 0 1.012-.178 1.285-.33.723-.403 2.439-1.369 3.136-1.793.394-.243.949-.147 1.24.217.32.396.286.95-.074 1.297l-3.048 2.906c-.375.359-.595.849-.617 1.381-.061 1.397-.3 8.117-.3 8.117zm-5.718-10.795c-.18 0-.34.121-.389.294-.295 1.04-1.011 3.666-1.134 4.098l1.511-2.593c.172-.295.623-.18.636.158l.341 8.797c.01.278.5.287.523.002 0 0 .269-3.35.308-3.944.041-.599.449-1.017.992-1.017.547.002.968.415 1.029 1.004.036.349.327 3.419.385 3.938.043.378.505.326.517.022 0 0 .239-6.725.3-8.124.033-.791.362-1.523.925-2.061l3.045-2.904c-.661.492-2.393 1.468-3.121 1.873-.396.221-1.07.457-1.772.457h-4.096zm18.476 6.011c-1.305 0-2.364 1.06-2.364 2.364 0 1.305 1.059 2.365 2.364 2.365s2.364-1.06 2.364-2.365c0-1.304-1.059-2.364-2.364-2.364zm-7 0c-1.305 0-2.364 1.06-2.364 2.364 0 1.305 1.059 2.365 2.364 2.365s2.364-1.06 2.364-2.365c0-1.304-1.059-2.364-2.364-2.364zm7 1c.752 0 1.364.612 1.364 1.364 0 .753-.612 1.365-1.364 1.365-.752 0-1.364-.612-1.364-1.365 0-.752.612-1.364 1.364-1.364zm-7 0c.752 0 1.364.612 1.364 1.364 0 .753-.612 1.365-1.364 1.365-.752 0-1.364-.612-1.364-1.365 0-.752.612-1.364 1.364-1.364zm10-2h-14.658v-1h7.658v-1h3v1h3v-13h-22v7l-1 3v-11h24v15zm-6-6h-4v-1h4v1zm-12.727-5c-1.278 0-2.315 1.038-2.315 2.316 0 1.278 1.037 2.316 2.315 2.316s2.316-1.038 2.316-2.316c0-1.278-1.038-2.316-2.316-2.316zm0 1c.726 0 1.316.59 1.316 1.316 0 .726-.59 1.316-1.316 1.316-.725 0-1.315-.59-1.315-1.316 0-.726.59-1.316 1.315-1.316zm15.727 2h-7v-1h7v1zm0-2h-7v-1h7v1z"/>
                        </svg>
                    </div> 
                    <h3 className="mt-5 text-2xl text-center font-bold">Learnt from School</h3>
                    <hr className="my-3"></hr>
                    <table>
                        { 
                            from_school.map(item => 
                                <tr className="text-xl">
                                    <td className="pe-10">{item.name}</td>
                                    <td className="text-end accent-clr">{expertise_strings[item.expertise]}</td>
                                </tr>)
                        }
                    </table>
                </div> 
                <div className="mt-10 lg:mt-0 flex flex-wrap flex-col content-center">
                    <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
                            <path d="M21.06 11.91c0 .232-.012.432-.025.628-.503-1.725-1.315-2.131-3.413-2.688 3.438 0 3.438.847 3.438 2.06zm2.94-3.195v1.462c-.328.276-.999.447-1.001 1.418-.006 3.827-1.588 4.387-4.604 4.405-4.05 0-4.597-.927-5.273-4.148-.15-.715-.513-1.148-1.122-1.148s-.972.434-1.122 1.148c-.677 3.221-1.224 4.148-5.274 4.148-2.428-.015-3.925-.384-4.419-2.522.383.104.775.191 1.144.264.444.986 1.406 1.248 3.28 1.258 3.608.026 3.736-.754 4.297-3.416.151-.72.119-1.244-.097-1.556-.404-.587-1.585-1.028-3.51-1.028-1.99 0-3.053.229-3.627.623-.938-.092-1.859-.561-2.116-1.01 1.784-.337 3.821-.613 5.743-.613 3.24 0 3.525.934 5.701.923 2.176.011 2.465-.923 5.701-.923 2.119 0 4.397.332 6.299.715zm-2 2.859c0-1.516 0-2.574-4.299-2.574-1.925 0-3.106.441-3.511 1.028-.216.312-.248.836-.097 1.556.561 2.661.688 3.442 4.297 3.416 2.84-.017 3.61-.57 3.61-3.426zm-14-.574h-3.219v2h3.219v-2zm-4-.078v2.078c-.613-.075-2.402-.347-3.438-.776-.34-.141-.562-.473-.562-.841v-1.909c.812.828 1.891 1.026 4 1.448zm-2.078.453c0-.276-.225-.5-.501-.5-.275 0-.499.224-.499.5s.224.5.499.5c.276 0 .501-.224.501-.5z"/>
                        </svg>
                    </div>
                    <h3 className="mt-5 text-2xl text-center font-bold">Self-taught</h3>
                    <hr className="my-3"></hr>
                    <table className="mt-5">
                        { 
                            self_taught.map(item => 
                                <tr className="text-xl">
                                    <td className="pe-10">{item.name}</td>
                                    <td className="text-end accent-clr">{expertise_strings[item.expertise]}</td>
                                </tr>)
                        }
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Education