import SocialCard from "../SocialCard"
import ThemeSwitcher from "../ThemeSwitcher"
// import ThemeSwitcher from "./ThemeSwitcher"

function Navbar() 
{
    /*
     Icon Website: https://iconmonstr.com/
    */
    const contact_tabs = [
        { item: SocialCard(1, "@Nickolausen", "https://github.com/Nickolausen", { width: 30, height: 30 }, "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z")},
        { item: SocialCard(2, "@nicholas-magi", "https://linkedin.com/in/nicholas-magi", { width: 30, height: 30 }, "M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z")},
        { item: SocialCard(3, "nicholas.magi24@gmail.com", "#contact-me", { width: 30, height: 30 }, "M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z")},
    ]

    return (
        <nav className="flex flex-row justify-center w-screen fixed z-10 bg-[--nav-bg] text-primary">
            <div className="w-screen lg:w-auto max-w-screen-xl flex flex-wrap items-center justify-between p-4">
                <a href="#home" className="exclude flex items-center space-x-3 rtl:space-x-reverse pe-auto lg:pe-20">
                    <span className="self-center text-4xl whitespace-nowrap">
                        <span className="text-[--accent-color]">NM</span>'s Portfolio
                    </span>
                </a>
                <button
                    data-collapse-toggle="navbar-solid-bg"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden dark:focus:ring-gray-600"
                    aria-controls="navbar-solid-bg"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className="hidden w-full lg:block lg:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <a
                                href="#home"
                                className="block align-middle py-2 px-3 lg:p-0 text-primary rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-[--accent-color] transition"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#education"
                                className="block align-middle py-2 px-3 lg:p-0 text-primary rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-[--accent-color] transition dark:text-white lg:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                            >
                                Education
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="block align-middle py-2 px-3 lg:p-0 text-primary rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-[--accent-color] transition dark:text-white lg:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact-me"
                                className="block align-middle py-2 px-3 lg:p-0 text-primary rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-[--accent-color] transition dark:text-white lg:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                            >
                                Contact me
                            </a>
                        </li>
                        <li className="py-2 ps-3 lg:py-0 lg:ps-20 flex flex-row gap-5">
                            {
                                contact_tabs.map(it => it.item)
                            }
                        </li>
                        <div className="py-2 px-3 lg:p-0 flex flex-row lg:items-center">
                            <ThemeSwitcher/>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar