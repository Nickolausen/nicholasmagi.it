function SwitchTheme() 
{
    let currentTheme: string = localStorage.getItem("theme")!!
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    document.querySelector("html")?.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
}

export default function ThemeSwitcher() 
{
    return <>
        <button className="bg-[--accent-color] px-2 rounded-lg" onClick={() => SwitchTheme()}>
            Switch
        </button>
    </>
}
