function Footer() 
{
    return <>
        <footer className={"mt-20 flex flex-col justify-center content-center p-20 text-center text-primary bg-[--nav-bg]"}>
            <span>Handmade with <i className='fa fa-heart text-[--accent-color]'></i> by <a className='text-[--accent-color]' href='https://github.com/Nickolausen'>Nicholas Magi</a></span>
            <span className="text-secondary text-xs pt-2">Last update deployed on: { document.lastModified }</span>
        </footer>
    </>
}

export default Footer