import { IoIosArrowDown } from "react-icons/io";
import Tangerino from "../../assets/tangerino-grande-tangerine.svg?react";
import { TangerineButton } from './TangerineButton';
import { TangerineRoseButton } from "./TangerineRoseButton";

import '../styles/tangerine-banner.css';

export const TangerineBanner = () => {

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <article 
      id="home-section"
      className="
        relative w-full overflow-hidden text-center 
        bg-rose-thiny flex flex-col items-center
        px-4 sm:px-8 pt-32 sm:pt-40 md:pt-48 pb-16
      "
    >

      {/* CONTENEDOR DE TITULOS */}
      <div className="w-full max-w-3xl flex flex-col items-center mb-1 md:mb-6">
        <h1 className="
          font-neuwelt font-extrabold text-orange leading-tight
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
        ">
          Inglés en línea
        </h1>

        <h2 className="
          btn-blue font-extrabold text-blue-strong leading-tight md:mt-2
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          w-full max-w-2xl
        ">
          Clases 100% en vivo
        </h2>
      </div>

      {/* BOTONES + QUIERO SABER MÁS */}
      <div className="flex flex-col items-center w-full max-w-xl">
        <TangerineButton />
        <TangerineRoseButton text="Contáctanos" />

        <h3 className="text-orange font-bold mt-4">
          <a
            href="#why-with-us"
            onClick={(e) => handleScroll(e, 'why-with-us')}
            className="
              flex flex-col items-center 
              font-black transition-all duration-300 ease-in-out 
              hover:scale-105
              text-xl sm:text-2xl md:text-3xl
            "
          >
            Quiero saber más
            <IoIosArrowDown 
              className="mt-1 animate-bounce text-orange text-2xl sm:text-3xl" 
            />
          </a>
        </h3>
      </div>

      {/* SVG TANGERINO (NO AFECTA ICONTANGERINE) */}
      <Tangerino
        className="
          absolute bottom-0
          -left-8 sm:-left-14 md:-left-20 lg:-left-24 xl:-left-28
          w-32 sm:w-44 md:w-60 lg:w-72 xl:w-[26rem]
          h-auto select-none pointer-events-none
          opacity-70 sm:opacity-80 md:opacity-100
        "
      />

    </article>
  );
};
