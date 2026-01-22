export const ContactInfo = () => {
  return (
    <div className="text-left md:text-center flex flex-col items-start md:items-center px-5 md:px-0">

      {/* Título */}
      <h3
        className="
          text-orange-thiny font-extrabold 
          text-ñg sm:text-3xl md:text-4xl lg:text-5xl   /* Escala suave */
          mb-2 sm:mb-4
        "
      >
        Contacto
      </h3>

      {/* Texto */}
      <div
        className="
          text-orange-thiny font-normal 
          text-sm sm:text-base md:text-lg lg:text-xl    /* Mejor legibilidad */
          space-y-1 sm:space-y-2
        "
      >
        <p>tangerinenglish@gmail.com</p>
        <p>WhatsApp: 662 199 8313</p>
      </div>
    </div>
  );
};
