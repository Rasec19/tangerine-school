import { comments } from '../../data/comments.js';
import { OpinionCard } from './OpinionCard.jsx';

export const StudentsOpinions = () => {
  return (
    <article id="students-opinions" className="w-full py-28 overflow-hidden">
      <div className="flex justify-center px-4">
        <p className="text-orange font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-14 leading-tight">
          ¿Qué opinan nuestros alumnxs?
        </p>
      </div>

      <div className="flex gap-6 px-4 sm:px-6 whitespace-nowrap animate-slide hover:[animation-play-state:paused]">
        {[...comments, ...comments].map((comment, index) => (
          <div key={`${comment.id}-${index}`} className="inline-block">
            <OpinionCard
              comment={comment.comment}
              name={comment.name}
              from={comment.from}
            />
          </div>
        ))}
      </div>

    </article>
  );
};
