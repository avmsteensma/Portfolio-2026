const icons = import.meta.glob<string>('../../img/socials/*.svg', {
    eager: true,
    import: 'default',
});

const socials = [
    { name: "GitHub", href: "https://github.com/avmsteensma", icon: "github" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/avmsteensma/", icon: "linkedin" },
    { name: "Email", href: "mailto:sander.v.m.steensma@gmail.com", icon: "email" }
]

export default function Socials({ size = 'h-14' }: {size?: string}) {
    return (
        <ul className="flex gap-4 px-2 items-center">
            {socials.map((social) => (
                <li key={social.name}>
                    <a href={social.href}>
                        <img src={icons[`../../img/socials/${social.icon}.svg`]} alt={social.name} className={size}/>
                    </a>
                </li>
            ))}
        </ul>
    )
}