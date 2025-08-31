import IconTangerine from "../../assets/icono-tangerine.svg?react";
import "../styles/home.css"; // Asegúrate de importar el CSS

export const TangerineButton = () => {
  return (
    <div className="relative md:w-auto">
      <div className="bg-blue-strong rounded-3xl rounded-bl-none py-5 px-5 flex flex-col items-center gap-4">
        <h4 className="text-orange text-center md:mr-14 text-base font-black mb-3 ml-5 lg:text-2xl xl:text-xl lg:mr-14 xl:mr-14 sm:mr-14">
          Un enfoque practico y conversacional
        </h4>
        <IconTangerine className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:absolute md:absolute mb-2 iconTangerine" />
      </div>
      <div className="bubble-tail-left" />
    </div>
  );
};
