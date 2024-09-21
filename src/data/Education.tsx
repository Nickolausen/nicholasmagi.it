export interface EducationTitle {
    start_year: number,
    end_year: number,
    title_description: string,
    school: string,
    grade?: number,
    max_grade: number,
    withHonours: boolean
}

export enum Expertise { Beginner, Intermediate, Excellent }