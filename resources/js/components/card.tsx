import type { Project } from '@/types';

const thumbnails = import.meta.glob<string>('../../img/projects/*.webp', {
    eager: true,
    import: 'default',
});

import githubIcon from '../../img/socials/github.svg';


export default function Card(props: Project) {
    return (
        <div className="border-2 border-brand-grey rounded-xl p-3 gap-3 flex flex-col">
            <div className="flex justify-between">
                <h4 className="text-header-4">{props.title}</h4>
                <a href={`https://github.com/avmsteensma/${props.github}`}  className="size-10">
                    <img src={githubIcon} alt=""/>
                </a>
            </div>
            <ul className="flex gap-2.5">
                {props.tags.map((tag: string) => (
                    <li key={tag} className="text-brand-white text-small bg-brand-grey rounded-full px-2.5 py-0.5">{tag}</li>
                ))}
            </ul>
            <img 
                src={thumbnails[`../../img/projects/${props.image}`]} 
                alt={`Thumbnail for the ${props.title} project`} 
                className="rounded-lg"
            />
        </div>
    )
}