import { useScroll } from '@/hooks/use-scroll'; 

const halfViewport = (): number => window.innerHeight * 0.4;

export default function Header() {
    const textColorSwitch = useScroll(halfViewport);
    return (
        <header className="h-12 -mb-12 flex justify-end sticky top-0 z-10">
            <nav className="px-10 py-4">
                <ul                     
                    className={`flex gap-6 text-header-4 transition-colors ${
                        textColorSwitch ? 'text-white' : 'text-black'
                    }`}
                >
                    <li>Projects</li>
                    <li>About Me</li>
                </ul>
            </nav>
        </header>
    )
}