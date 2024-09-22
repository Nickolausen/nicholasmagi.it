// import profile_picture from '../assets/media/profile.jpg'
import Button from '../components/Button'

function InitialScreen() {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <section id='home' className='lg:h-[100dvh] grid sm:grid-rows-2 xl:grid-rows-1 grid-cols-1 xl:grid-cols-4 items-center'>
                    <div className='lg:col-span-3 flex flex-col gap-3 text-primary'>
                        <div className='mt-5 sm:mt-0 text-4xl'>Hi! I'm</div>
                        <h1 className='text-6xl lg:text-8xl text-primary'><span className='first-letter'>N</span>icholas <span className='first-letter'>M</span>agi</h1>
                        <div className='text-4xl'><span className='italic'>Aspirant</span> Web & Software Developer</div>
                        <div className='text-xl lg:text-2xl text-gray-500 pb-10'>Computer Science Undergraduate @ University of Bologna, IT</div>
                        <div className='w-fit' data-tooltip-target="tooltip-cv" data-tooltip-placement="bottom">
                            <Button id='tooltip-cv' classNames='opacity-[.5]' text='Download my resume'/>
                            <div id={"tooltip-cv"} role="tooltip" className="absolute z-5 invisible inline-block px-3 py-2 text-sm font-medium text-black bg-yellow-400 rounded-lg shadow-lg opacity-0 tooltip dark:bg-gray-700">
                                <i className='fa fa-warning bg-transparent'></i> Not available at the moment, check my LinkedIn!
                                <div className="tooltip-arrow" data-popper-arrow></div>
                            </div>
                        </div>
                    </div>
                    <div className='order-first xl:order-last flex justify-center pt-[10em] xl:pt-0'>
                        <div className='relative shadow-2xl'>
                            <img className='max-w-64 lg:max-w-96 rounded-lg shadow-2xl' src={import.meta.env.BASE_URL + "profile.jpg"} alt="Profile Picture" />
                            {/* <div className='h-10 absolute bg-[--accent-color] bottom-0 w-full flex justify-center content-center'>All work and no play makes Jack a dull boy</div> */}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default InitialScreen