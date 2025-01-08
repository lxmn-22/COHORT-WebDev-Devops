import GSD from '../assets/GSD.jpg';
import Beagle from '../assets/Beagle.jpg';
import Husky from '../assets/Husky.jpg';
import { useRef } from 'react';

export default function ScrollImage() {

    const listRef = useRef(null);

    function scrollToIndex(index) {
        const listNode = listRef.current;

        const imgNode = listNode.querySelectorAll('li > img')[index];
        imgNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    return (
        <>
            <nav className='flex gap-3'>
                <button onClick={() => scrollToIndex(0)} className="bg-orange-900 rounded text-white text-sm px-3 py-1">
                    German Shepherd
                </button>
                <button onClick={() => scrollToIndex(1)} className="bg-orange-900 rounded text-white text-sm px-3 py-1">
                    Beagle
                </button>
                <button onClick={() => scrollToIndex(2)} className="bg-orange-900 rounded text-white text-sm px-3 py-1">
                    Husky
                </button>
            </nav>

            <div className="flex ">
                <ul ref={listRef} className="flex flex-row gap-3">
                    <li>
                        <img className='w-60 h-[170px] rounded' src={GSD} alt="GSD" />
                    </li>
                    <li>
                        <img className='w-60 h-[170px] rounded' src={Beagle} alt="Beagle" />
                    </li>
                    <li>
                        <img className='w-60 h-[170px] rounded' src={Husky} alt="Husky" />
                    </li>
                </ul>
            </div>
        </>
    )
}