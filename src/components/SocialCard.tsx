function SocialCard(id: number, tooltipText: string, link: string, size: any, path: string)
{
    return <>
        <a key={id} className="exclude" href={link} target="_parent" data-tooltip-target={"tooltip-bottom" + id} data-tooltip-placement="bottom">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width={size.width} 
                height={size.height} 
                viewBox="0 0 24 24" fill="var(--accent-color)">
                    <path stroke="none" d={path}/>
            </svg>
            <div id={"tooltip-bottom" + id} role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-[--accent-color] rounded-lg shadow-lg opacity-0 tooltip">
                {tooltipText}
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
        </a>
    </>
}

export default SocialCard