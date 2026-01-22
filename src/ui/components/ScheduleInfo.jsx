export const ScheduleInfo = () => {
  return (
    <div className="text-left md:text-center flex flex-col items-start md:items-center px-5 md:px-0">

      {/* Título */}
      <h3
        className="
          text-orange-thiny font-extrabold 
          text-lg sm:text-3xl md:text-4xl lg:text-5xl   /* Escalado suave */
          mb-2 sm:mb-4
        "
      >
        Horario de atención
      </h3>

      {/* Texto */}
      <div
        className="
          text-orange-thiny font-normal 
          text-sm sm:text-base md:text-lg lg:text-xl     /* Legible en todas las pantallas */
          space-y-1 sm:space-y-2
        "
      >
        <p>Lun - Vie 8:00AM - 9:00PM (hora CDMX)</p>
        <p>Sab 9:00AM - 12:00PM (hora CDMX)</p>
      </div>
    </div>
  );
};
