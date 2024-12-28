import { NavHashLink } from "react-router-hash-link"

type Props = {
    to: string,
    className?: string
    children?: JSX.Element | JSX.Element[] | string
}

export default function MyNavLink({ to, children, className }: Props) {
    return <NavHashLink
        className={className + " block align-middle py-2 px-3 lg:p-0 text-primary rounded lg:hover:bg-transparent lg:border-0 lg:hover:text-[--accent-color] transition dark:text-white lg:dark:hover:text-red-500 dark:hover:text-white lg:dark:hover:bg-transparent"} 
        to={to}>
        { children }
    </NavHashLink>
}