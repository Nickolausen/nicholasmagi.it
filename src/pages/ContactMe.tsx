// import { useState } from "react"
import Button from "../components/Button"
import './ContactMe.module.css'

// const [mailData, setMailData] = useState({})

// function sendMail() 
// {

// }

function ContactMe() 
{
    return <>
        <section id="contact-me" className="pt-20 flex flex-wrap flex-col content-center">
            <h1 className="text-center text-5xl font-bold uppercase ">Let's keep in touch!</h1>
            <form className="mt-10 p-10 flex flex-col gap-5 shadow-2xl rounded-lg bg-[--nav-bg]">
                <div className="flex flex-col sm:flex-row justify-between">
                    <div>
                        <label htmlFor="first_name">First Name</label><br></br>
                        <input className="bg-[--nav-bg] w-full border-slate-300 rounded" id="first_name" type="text"></input>
                    </div>
                    <div className="mt-3 sm:mt-0">
                        <label htmlFor="surname">Last Name</label><br></br>
                        <input className="bg-[--nav-bg] w-full border-slate-300 rounded" id="surname" type="text"></input>
                    </div>
                </div>
                <div>
                    <label htmlFor="first_name">Email</label>
                    <input className="bg-[--nav-bg] w-full border-slate-300 rounded" id="email" type="email"></input>
                </div>
                <div>
                    <label htmlFor="first_name">Message</label>
                    <textarea className="bg-[--nav-bg] w-full min-h-64 border-slate-300 rounded resize-none" id="message"></textarea>
                </div>
                <div className="text-center">
                    <div data-tooltip-target="tooltip-contact-me" data-tooltip-placement="bottom">
                        <Button isDisabled={true} classNames="opacity-[.5]" text={"Send Message"} fa_icon_id="fa-paper-plane"></Button>
                    </div>
                    <div id={"tooltip-contact-me"} role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black bg-yellow-400 rounded-lg shadow-lg opacity-0 tooltip dark:bg-gray-700">
                        <i className='fa fa-warning bg-transparent'></i> I'm still looking for a better alternative to 'href=mailto:...'
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
            </form>
        </section>
    </>
}

export default ContactMe