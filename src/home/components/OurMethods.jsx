import TangerineWindow from '../../assets/ventana-tangerine.png';

export const OurMethods = () => {
  return (
    <>
      <article
        className="bg-blue-strong px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-24 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12"
        id="our-method"
      >
        {/* Sección de Imagen */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            className="w-3/4 sm:w-2/3 md:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
            src={TangerineWindow}
            alt="Ventana Tangerine"
          />
        </div>

        {/* Sección de Texto */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-2">
          <h3
            id="title"
            className="text-orange font-bold mb-4 sm:mb-6 md:mb-10 
                       text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            Nuestro método
          </h3>
          <p
            id="paragraph"
            className="text-white leading-relaxed 
                       text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          >
            Nuestro método es muy “Hands on” pero al mismo tiempo integral. Aunque enfocamos nuestra atención particularmente hacia lo conversacional también trabajamos con herramientas de evaluación de lectura, escritura, listening y gramática.
          </p>
        </div>
      </article>

    </>
  );
};
