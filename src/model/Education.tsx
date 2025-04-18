/**
 * DD
 */
export type EducationTitle = {
    start_year: number,
    end_year: number,
    title_description: string,
    school: string,
    grade?: number,
    max_grade: number,
    withHonours: boolean | undefined
}

interface Skill {
    name: String,
    expertise: ExpertiseLevel
}

export enum ExpertiseLevel { 
    Beginner, 
    Intermediate, 
    Excellent 
}

export const skillsFromSchool: Skill[] = [
    {name: "C", expertise: ExpertiseLevel.Intermediate},
    {name: "C#", expertise: ExpertiseLevel.Intermediate},
    {name: "Blazor", expertise: ExpertiseLevel.Beginner},
    {name: "Java", expertise: ExpertiseLevel.Beginner},
    {name: "Bash", expertise: ExpertiseLevel.Intermediate},
    {name: "Design a WPF", expertise: ExpertiseLevel.Intermediate},
    {name: "JavaScript & JQuery", expertise: ExpertiseLevel.Intermediate},
    {name: "HTML", expertise: ExpertiseLevel.Excellent},
    {name: "CSS & Bootstrap", expertise: ExpertiseLevel.Excellent},
    {name: "SQL", expertise: ExpertiseLevel.Intermediate},
    {name: "Design in Figma", expertise: ExpertiseLevel.Intermediate},
    {name: "Design a network w/CISCO Packet Tracer", expertise: ExpertiseLevel.Beginner},
]

export const skillsSelfTaught: Skill[] = [
    { name: "Python", expertise: ExpertiseLevel.Beginner },
    { name: "Manim - python library", expertise: ExpertiseLevel.Intermediate },
    { name: "React", expertise: ExpertiseLevel.Beginner },
    { name: "Vue", expertise: ExpertiseLevel.Beginner },
    { name: "Tailwind CSS", expertise: ExpertiseLevel.Intermediate },
    { name: "Typescript", expertise: ExpertiseLevel.Beginner },
]

export const educationHistory: EducationTitle[] = [{
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
        end_year: 2027,
        title_description: "Bachelor Degree in Computer Science and Engineering",
        school: "Alma Mater Studiorum, University of Bologna @ Cesena, IT",
        grade: NaN,
        max_grade: 110,
        withHonours: false
    }
]

educationHistory.sort((a, b) => (a.start_year > b.start_year) ? -1 : 1)