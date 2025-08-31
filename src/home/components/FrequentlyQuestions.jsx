import { AccordionQuestions } from "./AccordionQuestions";

export const FrequentlyQuestions = () => {
  return (
    <>
      <article
        className="bg-blue-strong px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-40"
        id="FAQ"
      >
        <div className="flex flex-col justify-center items-center">
          {/* Título */}
          <div className="mb-8 sm:mb-10 md:mb-12 px-2 text-center">
            <h3
              id="title"
              className="text-orange font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug"
            >
              Frequently asked questions
            </h3>
          </div>

          {/* Acordeón */}
          <div className="w-full sm:w-4/5 md:w-3/5 px-2 sm:px-0">
            <AccordionQuestions />
          </div>
        </div>
      </article>
    </>
  );
};
