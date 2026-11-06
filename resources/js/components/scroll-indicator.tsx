import { useScroll } from '@/hooks/use-scroll';

import arrow from '../../img/arrow.svg';

const nearTop = (): number => 50;

export default function ScrollIndicator() {
    const hasScrolled = useScroll(nearTop);

    return (
        <img src={arrow} className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft transition-opacity duration-500 ${
            hasScrolled ? 'opacity-0' : 'opacity-100'
        }`} />
    )
}
