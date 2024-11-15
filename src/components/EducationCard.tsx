// import styles from './EducationCard.module.css'
import { EducationTitle } from '../model/Education'

interface IProps {
    data?: EducationTitle 
}

function EducationCard({ data }: IProps)
{
    let current_year: number = new Date().getFullYear()

    return (
        <>
            <article className="flex flex-row flex-nowrap gap-5 justify-center content-center">
                <i className="fa fa-bullseye text-7xl md:text-8xl accent-clr"></i>
                <div className="flex flex-col flex-wrap">
                    <div className="max-w-[580px] text-3xl text-pretty">{data?.start_year} - {data?.end_year} {current_year < data?.end_year!! ? <span className="text-sm text-gray-500">(expected)</span> : <></>}</div>
                    <div className="max-w-[580px] text-2xl text-pretty font-bold">{data?.title_description}</div>
                    <div className="max-w-[580px] text-xl text-pretty accent-clr">{data?.school}</div>

                    {
                        data?.grade ? 
                            <div className='mt-2'>Grade: <span>{data?.grade}</span>/{data.max_grade} {data?.withHonours ? <span className='italic'>with honours</span> : <></>}</div> : 
                            <></>
                    }
                </div>
            </article>
        </>
    )
}

export default EducationCard