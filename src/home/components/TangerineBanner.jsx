import { IoIosArrowDown } from "react-icons/io";
import Tangerino from "../../assets/tangerino-grande-tangerine.svg?react";
import '../styles/home.css'
import { TangerineButton } from './TangerineButton';
import { TangerineRoseButton } from "./TangerineRoseButton";

export const TangerineBanner = () => {

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <article className='pb-14 pt-48 px-4 sm:px-8 text-center bg-rose-thiny flex flex-col items-center relative overflow-hidden' id='home-section'>
        <h1 className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-orange leading-tight'>Inglés en línea</h1>
        <h2 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-blue-strong mb-6 leading-tight'>Clases 100% en vivo</h2>

        <div className="w-full max-w-3xl flex flex-col items-center gap-4">
          <TangerineButton />
          <TangerineRoseButton text="Contáctanos" />
        </div>

        <h3 className='text-orange font-bold text-xl sm:text-2xl mt-6'>
          <a onClick={(e) => handleScroll(e, 'why-with-us')} href="#why-with-us" className="flex flex-col items-center font-black text-2xl sm:text-3xl transition-all duration-300 ease-in-out transform hover:scale-105">
            Quiero saber más
            <IoIosArrowDown className='mt-1 animate-bounce text-orange text-2xl sm:text-3xl' />
          </a>
        </h3>

        <Tangerino 
          className="
            absolute bottom-0 
            -left-10 sm:-left-16 md:-left-20 lg:-left-24 xl:-left-32 
            w-36 sm:w-48 md:w-64 lg:w-80 xl:w-[28rem]
            h-auto pointer-events-none select-none
          " 
        />
      </article>
    </>
  );
};
