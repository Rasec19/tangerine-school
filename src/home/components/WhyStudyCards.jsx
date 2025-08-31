import { useState } from 'react';
import { studyWhitUs } from '../../data/studyWhitUs.js';

export default function WhyStudyCards() {
  const [clickedCardId, setClickedCardId] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {studyWhitUs.map((card) => {
        const isClicked = clickedCardId === card.id;

        return (
          <div
            key={card.id}
            className={`relative rounded-2xl overflow-hidden flex flex-col justify-between h-[400px] sm:h-[450px] md:h-[500px] lg:h-[520px] xl:h-[540px] transition-all duration-500 ${isClicked ? 'border-0 bg-transparent' : 'shadow-lg'} transition-all duration-300 ease-in-out transform hover:scale-105`}
            onMouseEnter={() => setClickedCardId(card.id)}
            onMouseLeave={() => setClickedCardId(null)}
          >
            {/* TARJETA ORIGINAL */}
            <div
              className={`absolute top-0 left-0 w-full h-full flex flex-col transition-opacity duration-500 ${
                isClicked ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <div className="h-3/4">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center bg-orange w-full flex items-center justify-center h-1/4">
                <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-strong font-semibold">
                  {card.title}
                </h3>
              </div>
            </div>

            {/* VENTANA NARANJA */}
            <div className={`tangerine-window-container absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              isClicked ? 'opacity-100 bg-orange-thiny' : 'opacity-0 pointer-events-none'
            }`}>
              <div className="w-full h-full flex items-center justify-center p-6">
                <div className="text-center w-full max-w-full h-full pt-10 2xl:px-10 xl:px-4 lg:px-4 md:px-9 sm:px-4 sm:py-16 px-32 lg:pt-20 overflow-hidden xl:pt-24 why-card-content">
                  <h3 className="text-orange text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl xl:mb-5 font-bold break-words">
                    {card.title}
                  </h3>
                  <p className="text-blue-strong text-sm sm:text-base md:text-lg lg:text-lg mt-2 break-words leading-snug font-bold text-left text-pretty max-h-[60%] overflow-auto max-w-full parraf">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}
