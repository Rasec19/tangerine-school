import IconTangerine from "../../assets/icono-tangerine.svg?react";
import "../styles/home.css";

export const TangerineButton = () => {
  return (
    <div className="relative mb-2 md:mb-8 xl:!w-10/12 lg:!w-10/12 md:!w-10/12 sm:!w-2/3 mx-auto">
      <div className="bg-blue-strong rounded-full rounded-bl-none sm:pt-4 sm:pb-2 pt-2 px-5 flex flex-col items-center justify-center">

        {/* TEXTO — solo ajustado para responsividad */}
        <h2
          className="
            text-orange text-center font-extrabold
            text-sm        /* mobile */
            sm:text-base   /* mobile grande */
            md:text-xl     /* tablet */
            lg:text-2xl    /* desktop */
            xl:text-[1.5vw]/* pantallas muy grandes */
            mb-3
          "
        >
          Un enfoque practico y conversacional
        </h2>

        {/* ICON — NO TOCADO, ESTÁ TAL CUAL COMO TÚ LO USAS */}
        <IconTangerine
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:absolute hidden md:block md:absolute mb-2 iconTangerine"
        />
      </div>

      <div className="bubble-tail-left" />
    </div>
  );
};
