import OrangeShine from "../../assets/brillito-naranja-tangerine.svg?react";
import FacebokIcon from "../../assets/icono-facebook-tangerine.svg?react";
import InstagramIcon from "../../assets/icono-instagram-tangerine.svg?react";
import YoutubeIcon from "../../assets/icono-youtube-tangerine.svg?react";
import TiktokIcon from "../../assets/icono-tiktok-tangerine.svg?react";
import { TangerineRoseButton } from "./TangerineRoseButton";

export const FollowUs = () => {
  return (
    <article
      className="bg-rose-thiny px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-16 sm:py-24 lg:py-36 flex justify-center items-center flex-col"
      id="follow-us"
    >
      {/* Brillito decorativo arriba a la derecha */}
      <div className="flex w-full justify-end items-center mb-4 sm:mb-0">
        <OrangeShine className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 aspect-square" />
      </div>

      {/* Contenedor central */}
      <div className="w-full max-w-6xl flex flex-col items-center text-center relative px-2 sm:px-6">
        
        {/* Título */}
        <h3
          className="text-orange font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight"
        >
          ¡Síguenos!
        </h3>

        {/* Texto del botón */}
        <div className="">
          <TangerineRoseButton
            text="Nos gusta crear contenido educativo y divertido de acceso público para que sigas aprendiendo y practicando después de clases"
          />
        </div>

        {/* Íconos sociales */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
          <a
            href="https://www.instagram.com/tangerineschool/?hl=es-la"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <InstagramIcon className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 aspect-square" />
          </a>
          <a
            href="https://www.facebook.com/Tangerinenglish"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <FacebokIcon className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 aspect-square" />
          </a>
          <a
            href="https://www.tiktok.com/@boytangerine"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <TiktokIcon className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 aspect-square" />
          </a>
          <a
            href="https://youtube.com/@tangerineschool?si=hiZxuvhQ5ija7c4E"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <YoutubeIcon className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 aspect-square" />
          </a>
        </div>

      </div>
    </article>
  );
};
