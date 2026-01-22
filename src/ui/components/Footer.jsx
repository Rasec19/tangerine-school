import '../styles/footer.css';
import IconTangerine from "../../assets/icono-tangerine.svg?react";
import { ContactInfo } from './ContactInfo';
import { ScheduleInfo } from './ScheduleInfo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white relative px-6 sm:px-10 pt-12 pb-6">

      {/* Ícono superior */}
      <div className="flex justify-center sm:mb-6">
        <IconTangerine
          className="
            w-8 h-8 
            sm:w-14 sm:h-14 
            lg:w-16 lg:h-16 
            iconTangerineFooter 
            right-40 top-[-15px]
          "
        />
      </div>

      {/* Secciones de contacto / horario */}
      <div className="flex flex-col sm:flex-row sm:gap-28 justify-center gap-8">

        {/* Ambos componentes ya están optimizados individualmente */}
        <ContactInfo />
        <ScheduleInfo />

      </div>

      {/* Texto final del copyright */}
      <div
        className="
          w-full flex flex-col sm:flex-row 
          justify-center sm:justify-around 
          items-center text-center 
          gap-2 sm:gap-0 mt-14
        "
      >
        <h4
          className="
            text-orange font-extrabold
            text-sm sm:text-base md:text-lg lg:text-xl   /* Escalado suave */
          "
        >
          Tangerine School &reg; {currentYear}
        </h4>
      </div>

    </footer>
  );
};
