import './ThemeSwitcher.module.css'
import ReactSwitch from 'react-switch'
import { useState } from 'react'
import LightOffIco from './icons/LightOffIco'
import LightOnIco from './icons/LightOnIco'


export default function ThemeSwitcher() 
{
    const [ currentTheme, setCurrentTheme ] = useState<string>(localStorage.getItem("theme")!!)
    const [ isDarkModeOn, setIsDarkModeOn ] = useState<boolean>(localStorage.getItem("theme") === "dark")
    
    function toggleTheme() 
    {
        const newTheme = currentTheme === "dark" ? "light" : "dark"
    
        document.querySelector("html")?.setAttribute("data-theme", newTheme)
        localStorage.setItem("theme", newTheme)
        setIsDarkModeOn(!isDarkModeOn)
        setCurrentTheme(newTheme)
    }

    document.querySelector("html")?.setAttribute("data-theme", currentTheme)

    return <>
        <ReactSwitch 
            checked={isDarkModeOn} 
            onChange={toggleTheme}
            offColor="#3836b5"
            onColor="#FFBF00"
            activeBoxShadow="0px 0px 1px 2px rgb(104, 104, 101)"
            uncheckedIcon={
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 10 
                }}>
                    <LightOffIco/>
                </div>
            }
            checkedIcon={
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 20 
                }}>
                    <LightOnIco/>
                </div>
            }>
        </ReactSwitch>
    </>
}
