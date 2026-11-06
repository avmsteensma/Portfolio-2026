import Socials from "./socials";

export default function Footer() {
    return (
        <footer className="h-22.5 mt-15 flex flex-col items-center bg-brand-grey gap-1 py-4">
            <small className="text-small">Sander Steensma 2026</small>
            <Socials size="h-10"/>
        </footer>
    )
}