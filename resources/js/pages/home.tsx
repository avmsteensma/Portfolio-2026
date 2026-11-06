import { Head } from '@inertiajs/react';
import type { Project } from '@/types';
import AppLayout from '@/layouts/app-layout';
import ScrollIndicator from '@/components/scroll-indicator';
import Card from '@/components/card';
import Socials from '@/components/socials';

import photoSander from '../../img/sander.webp'

const projects: Project[] = [
    {
        title: "Example Project",
        tags: ["Tag 1", "Tag 2"],
        image: "portfolio.webp",
        github: "Portfolio-2026"
    },
    {
        title: "Example Project",
        tags: ["Tag 1", "Tag 2"],
        image: "portfolio.webp",
        github: "Portfolio-2026"
    },
    {
        title: "Example Project",
        tags: ["Tag 1", "Tag 2"],
        image: "portfolio.webp",
        github: "Portfolio-2026"
    },
    {
        title: "Example Project",
        tags: ["Tag 1", "Tag 2"],
        image: "portfolio.webp",
        github: "Portfolio-2026"
    },
]

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <main className="w-full">
                <section className="hero relative p-10 h-screen w-full bg-(image:--image-hero) bg-cover bg-center flex items-center">
                    <div className="flex flex-col gap-2 relative top-30">
                        <h1 className="text-header-1">Hi, I’m Sander</h1>
                        <h3 className="text-header-3">I’m a web developer <br/>
                        based in Groningen</h3>
                        <div className="py-5">
                            <Socials/>
                        </div>
                    </div>
                    <ScrollIndicator/>
                </section>
                <div className="px-2 md:px-30 py-15">
                    <section className="w-full flex flex-col items-center mb-12">
                        <h2 className="text-header-2 mb-8">Projects</h2>
                        <div className="grid grid-cols-1 gap-10 w-full lg:grid-cols-2">
                            {projects.map((project) => (
                                <Card key={project.title} {...project} />
                            ))}
                        </div>
                    </section>
                    <section className="w-full flex flex-col gap-8 items-center">
                            <h2 className="text-header-2">About me</h2>
                            <div className="flex gap-12">
                                <div className="flex flex-col gap-4">
                                    <p>I grew up surrounded by desktops and servers, watching my dad show off the things he built and spending hours on hardware, programming and gaming videos. That curiosity led me to Noorderpoort, where I've studied full-stack software development and now focus on Laravel. We work on our school projects in a Scrum team, where I mainly build the backend and help design the frontend.</p>
                                    <p>For two years, I worked at MediaMarkt, repairing hardware and solving software problems for customers. It taught me to explain technical issues in plain language and to keep digging patiently until I find the root cause.</p>
                                    <p>I'm looking for a backend internship starting in February 2027, where I can contribute to real-world projects, whether that's with Laravel, WordPress or databases.</p>
                                    <p>Outside of tech, you'll find me bouldering with friends, playing Magic: The Gathering, hiking, or reading with a vinyl record on.</p>
                                </div>
                                <img src={photoSander} alt="Photo of Sander"/>
                            </div>
                    </section>
                </div>
            </main>
        </>
    );
}

Home.layout = AppLayout;