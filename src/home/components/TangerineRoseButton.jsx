import PropTypes from 'prop-types';
import {  whatsappLink } from '../../data'

export const TangerineRoseButton = ({ text }) => {
  return (
    <a
      href={ whatsappLink }
      target="_blank"
      rel="noopener noreferrer"
      className="md:w-full sm:w-auto mt-5"
    >
      <button
        className={
          `bg-orange-thiny text-orange font-black pt-3 p-4 px-10 rounded-full lg:text-3xl lg:py-5 w-full 
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
