import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

export default function DefaultLayout({ children }: Props) {
    return <>
        <Navbar/>
        <div className='h-[100dhv] px-10 lg:px-[10rem] 2xl:px-[25rem] md:pt-10 lg:pt-0'>
            { children }
        </div>
        <Footer/>
    </>
}