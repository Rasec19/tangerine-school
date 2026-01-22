import PropTypes from 'prop-types';

export const OpinionCard = ({ comment, name, from }) => {
  return (
    <div className="relative bg-rose-thiny rounded-[1rem]  sm:rounded-[3rem] sm:rounded-bl-none px-4 sm:px-6 md:px-8 pt-5 sm:pt-6 pb-4 sm:pb-6 flex flex-col justify-between min-h-[220px] sm:min-h-[200px] md:min-h-[250px] w-[260px] sm:w-[400px] md:w-[640px] md:h-[270px] max-w-full mx-3 p-24">
      <div>
        <h3
          id="opinion-text"
          className="text-orange font-medium text-sm sm:text-base md:text-lg leading-snug line-clamp-5 break-words text-justify hyphens-auto"
        >
          {comment}
        </h3>
      </div>
      <div className="sm:mt-4 mt-0 flex !flex-col sm:flex-row sm:items-center sm:gap-2">
        <span className="text-orange font-black text-xl sm:text-2xl md:text-3xl break-words text-justify hyphens-auto self-start">
          {name}
        </span>
        <span className="text-orange font-bold text-base sm:text-lg md:text-xl truncate overflow-hidden whitespace-nowrap max-w-[160px] sm:max-w-[180px] md:max-w-[200px] text-justify hyphens-auto self-start">
          {from}
        </span>
      </div>
      <div className="bubble-tail-left-opinions" />
    </div>
  );
};

OpinionCard.propTypes = {
  comment: PropTypes.string,
  name: PropTypes.string,
  from: PropTypes.string,
};
