import PropTypes from 'prop-types';

export const TangerineRoseButton = ({ text }) => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+526621998313&text=Hola Mundo"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto mt-5"
    >
      <button
        className={
          `bg-orange-thiny text-orange font-black py-3 px-6 rounded-full lg:text-3xl lg:py-6 w-full 
          transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-thiny/90 active:scale-95 focus:outline-none
          ${text === 'Contáctanos' ? 'text-xl w-auto sm:text-xl md:text-2xl' : 'text-xs md:text-lg w-auto sm:text-base'}`
        }
      >
        {text}
      </button>
    </a>
  );
};

TangerineRoseButton.propTypes = {
  text: PropTypes.string.isRequired,
};
