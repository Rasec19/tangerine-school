import WhiteShine from "../../assets/brillito-blanco-tangerine.svg?react";
import {  whatsappLink } from '../../data'

export const OurCompromise = () => {
  return (
    <>
      <article
        className="bg-yellow px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-32 flex items-center justify-center"
        id="our-compromises"
      >
        <div className="grid grid-cols-1 sm:grid-cols-12 md:gap-y-8 sm:gap-y-12 gap-y-4 w-full max-w-6xl grid-flow-row">
          {/* White Shine Icon → oculto en mobile */}
          <div className="hidden sm:flex sm:col-start-11 sm:col-end-12 justify-end">
            <WhiteShine
              id="white-shine"
              className="w-10 h-10 sm:w-12 sm:h-12 text-white mr-10"
            />
          </div>
          {/* Título */}
          <div className="sm:col-start-4 sm:col-end-12 xl:col-start-4 xl:col-end-11 lg:col-start-4 lg:col-end-11 md:col-start-4 md:col-end-11 text-center sm:text-left">
            <h3
              id="title"
              className="
                text-orange font-extrabold leading-tight
                text-2xl sm:text-3xl md:text-5xl lg:text-6xl
              "
            >
              Nuestro compromiso
            </h3>
          </div>
          {/* Párrafos */}
          <div className="sm:col-start-2 sm:col-end-12 px-8 sm:px-0">
            <p
              id="paragraph"
              className="
                text-blue-strong font-medium text-justify leading-relaxed hyphens-auto
                text-sm sm:text-base md:text-lg lg:text-xl
                mb-4 md:mb-8
              "
            >
              En Tangerine School nos comprometemos a acompañarte en tu proceso
              de aprendizaje con clases semi personalizadas y un plan de
              estudios flexible.
            </p>

            <p
              id="paragraph"
              className="
                text-blue-strong font-medium text-justify leading-relaxed hyphens-auto
                text-sm sm:text-base md:text-lg lg:text-xl
              "
            >
              Trabajamos desde la empatía hacia nuestros estudiantes y el cariño
              a nuestra profesión, siempre buscando maneras creativas para
              lograr casos de éxito y superación personal y profesional.
            </p>
          </div>
          {/* Botón optimizado y alineado para mobile y desktop */}
          <div className="mt-6 sm:mt-0 lg:col-start-4 lg:col-end-12 md:col-start-4 md:col-end-10 sm:col-start-3 sm:col-end-12 flex justify-center sm:justify-start px-4 sm:px-0">
            <a
              href={ whatsappLink }
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                id="btn"
                className="
                flex items-center justify-center
                w-full sm:w-auto
                bg-orange text-blue-strong rounded-full font-black
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:bg-orange/90 active:scale-95
                focus:outline-none focus:ring-4 focus:ring-orange/50

                text-lg sm:text-lg md:text-xl
                px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5
              "
              >
                <p className="mx-3 sm:mx-5 md:mx-6 leading-tight text-center">
                  Inscríbete ahora y obtén un descuento especial
                </p>
              </button>
            </a>
          </div>
          
        </div>
      </article>
    </>
  );
};
