import OrangeShine from "../../assets/brillito-naranja-tangerine.svg?react";
import FacebokIcon from "../../assets/icono-facebook-tangerine.png";
import InstagramIcon from "../../assets/icono-instagram-tangerine.png";
import YoutubeIcon from "../../assets/icono-youtube-tangerine.png";
import TiktokIcon from "../../assets/icono-tiktok-tangerine.png";

export const FollowUs = () => {
  return (
    <article
      className="bg-rose-thiny px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-16 sm:py-24 lg:py-36 flex justify-center items-center flex-col"
      id="follow-us"
    >
      {/* Brillito decorativo arriba a la derecha — oculto en mobile */}
      <div className="md:flex w-full justify-end items-center mb-4 sm:mb-0 hidden">
        <OrangeShine className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 aspect-square" />
      </div>

      {/* Contenedor central */}
      <div className="w-full max-w-6xl flex flex-col items-center text-center relative px-2 sm:px-6">
        {/* Título */}
        <h3
          className="text-orange font-extrabold leading-tight mb-8
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          ¡Síguenos!
        </h3>

        {/* Texto */}
        <p
          className="text-orange font-semibold hyphens-auto mb-2 md:mb-10
                     text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
        >
          Nos gusta crear contenido educativo y divertido de acceso público
          <br />
          para que sigas aprendiendo y practicando después de clases
        </p>

        {/* Íconos sociales */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-4">
          <a
            href="https://www.instagram.com/tangerineschool/?hl=es-la"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img
              className="w-12 md:w-14 lg:w-16 xl:w-20 aspect-square"
              src={InstagramIcon}
              alt="Icono instagram"
              loading="lazy"
            />
          </a>

          <a
            href="https://www.facebook.com/Tangerinenglish"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img
              className="w-12 md:w-14 lg:w-16 xl:w-20 aspect-square"
              src={FacebokIcon}
              alt="Icono facebook"
              loading="lazy"
            />
          </a>

          <a
            href="https://www.tiktok.com/@boytangerine"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img
              className="w-12 md:w-14 lg:w-16 xl:w-20 aspect-square"
              src={TiktokIcon}
              alt="Icono tiktok"
              loading="lazy"
            />
          </a>

          <a
            href="https://youtube.com/@tangerineschool?si=hiZxuvhQ5ija7c4E"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img
              className="w-12 md:w-14 lg:w-16 xl:w-20 aspect-square"
              src={YoutubeIcon}
              alt="Icono youtube"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </article>
  );
};
