import WhiteShine from "../../assets/brillito-blanco-tangerine.svg?react";

export const OurCompromise = () => {
  return (
    <>
      <article
        className="bg-yellow px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-32 flex items-center justify-center"
        id="our-compromises"
      >
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-8 sm:gap-y-12 w-full max-w-6xl">
          {/* White Shine Icon */}
          <div className="sm:col-start-11 sm:col-end-12 flex justify-end">
            <WhiteShine id="white-shine" className="w-10 h-10 sm:w-12 sm:h-12 text-white mr-10" />
          </div>

          {/* Título */}
          <div className="sm:col-start-3 sm:col-end-11 text-center sm:text-left">
            <h3
              id="title"
              className="text-orange font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Nuestro compromiso
            </h3>
          </div>

          {/* Párrafo */}
          <div className="sm:col-start-2 sm:col-end-12 px-2 sm:px-0">
            <p
              id="paragraph"
              className="text-blue-strong font-semibold text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-left"
            >
              En Tangerine School nos comprometemos a acompañarte en tu proceso de aprendizaje con clases semi personalizadas y un plan de estudios flexible. Trabajamos desde la empatía hacia nuestros estudiantes y el cariño a nuestra profesión, siempre buscando maneras creativas para lograr casos de éxito y superación personal y profesional.
            </p>
          </div>

          {/* Botón con animación */}
          <div className="sm:col-start-4 sm:col-end-10 flex justify-center sm:justify-start px-4 sm:px-0">
            <a 
              href="https://api.whatsapp.com/send?phone=+526621998313&text=Hola Mundo"
              target="_blank"
              rel="noopener noreferrer"
            >
                <button
                id="btn"
                className="w-full sm:w-auto bg-orange text-blue-strong font-bold rounded-full text-base sm:text-lg md:text-xl lg:text-2xl px-6 py-3
                          transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-orange/90 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange/50"
              >
                Inscríbete ahora y obtén un descuento especial
              </button>
            </a>
          </div>
        </div>
      </article>
    </>
  );
};
