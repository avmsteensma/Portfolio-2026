import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import ScrollIndicator from '@/components/scroll-indicator';
import Card from '@/components/card';

import githubIcon from '../../img/github.png';
import linkedInIcon from '../../img/linkedin.png';
import emailIcon from '../../img/email.png';


const socials = [
    { name: "GitHub", href: "https://github.com/avmsteensma", icon: githubIcon },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/avmsteensma/", icon: linkedInIcon },
    { name: "Email", href: "mailto:sander.v.m.steensma@gmail.com", icon: emailIcon }
]

const Projects = [
    {
        name: "Example",
        tags: ["Tag 1", "Tag 2"],
        image: "portfolio.webp",
        github: ""
    }
]

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <main className='w-full'>
                <section className="hero relative p-10 h-screen w-full bg-(image:--image-hero) bg-cover bg-center flex items-center">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-header-1">Hi, I’m Sander</h1>
                        <h3 className="text-header-3">I’m a web developer <br/>
                        based in Groningen</h3>
                        <ul className="flex gap-6 px-2 py-5 items-center">
                            {socials.map((social) => (
                                <li key={social.name}>
                                    <a href={social.href}>
                                        <img src={social.icon} className="w-10"/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ScrollIndicator/>
                </section>

                <section className="w-full h-[200vh] flex justify-center">
                    <h2>Projects</h2>
                    <div className="grid gap-10">
                        
                    </div>
                </section>
            </main>
        </>
    );
}

Home.layout = AppLayout;