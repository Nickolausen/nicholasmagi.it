import template_img from '../assets/media/template.jpeg'
import { GHRepoDetails, languageToID } from '../data/ProjectDetails'

interface IProps {
    data: GHRepoDetails
}

function GHRepoCard({ data }: IProps ) {
    return <>
        <article className='flex flex-col flex-wrap content-center justify-between shadow-xl rounded-lg hover:scale-[1.02] transition'>
            <div className='p-6 w-full'>
                {/* <img src={template_img}></img> */}
                <div className='py-2 flex justify-between content-center'>
                    <small className='mt-1 inline-block align-middle h-fit'>
                        <p className='h-fit'>Made by <span className='accent-clr'>{data.author}</span></p>
                        <p className='h-fit'><i className='fa fa-star'/> by <span className='accent-clr'>{data.stars}</span> people <br className='inline sm:hidden'/> {data.stars === 0 ? <span className='text-gray-600'>&#8212;{" you can be the first!"}</span> : <></>}</p> 
                    </small>
                    <img className='w-10' src={'https://skillicons.dev/icons?i=' + languageToID[data.language]}></img>
                </div>
                <h3 className='text-2xl font-bold pt-3'>&lt;{data.name}<span className='accent-clr'>/</span>&gt;</h3>
                <p className='text-pretty py-3'>{data.description}</p>
            </div>
            <a href={"https://github.com/Nickolausen/"+ data.name} className='w-full exclude text-center text-white align-middle py-4 transition hover:cursor-pointer hover:bg-[--accent-color-darker] bg-[--accent-color] rounded-b-lg justify-self-end'>
                VIEW ON GITHUB
            </a>
        </article>
    </>
}

export default GHRepoCard