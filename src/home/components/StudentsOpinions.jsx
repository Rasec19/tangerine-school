import { comments } from '../../data/comments.js';
import { OpinionCard } from './OpinionCard.jsx';

export const StudentsOpinions = () => {
  const doubledComments = [...comments, ...comments];

  return (
    <article
      id="students-opinions"
      className="w-full py-20 sm:py-24 md:py-28 overflow-hidden"
    >
      {/* Título */}
      <div className="flex justify-center px-4">
        <p
          className="
            text-orange font-extrabold 
            text-2xl sm:text-4xl md:text-5xl lg:text-6xl   /* Mejor escala */
            text-center mb-10 sm:mb-14 
            leading-snug sm:leading-tight
            max-w-[70%] sm:max-w-full      /* No romper mobile */
          "
        >
          ¿Qué opinan nuestros alumnxs?
        </p>
      </div>

      {/* Slider */}
      <div className="slider">
        <div className="slide-track">
          {doubledComments.map((comment, index) => (
            <div key={`${comment.id}-${index}`} className="inline-block">
              <OpinionCard
                comment={comment.comment}
                name={comment.name}
                from={comment.from}
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
