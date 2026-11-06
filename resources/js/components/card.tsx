type Project = {
    title: string;
    tags: string[];
    image: string;
    github: string;
}

export default function Card(props: Project) {
    return (
        <div className="border-2 border-brand-grey rounded-xl">
            <h4 className="text-header-4">{props.title}</h4>
            <ul className="flex gap-2.5">
                {props.tags.map((tag) => (
                    <li className="text-brand-white text-small bg-brand-grey rounded-full px-2.5 py-0.5">{tag}</li>
                ))}
            </ul>
            <img src={props.image} alt={`Thumbnail for the ${props.title} project`} />
        </div>
    )
}