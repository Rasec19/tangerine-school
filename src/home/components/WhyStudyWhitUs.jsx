import WhyStudyCards from './WhyStudyCards.jsx';

export const WhyStudyWhitUs = () => {
  return (
    <article
      id="why-with-us"
      className="bg-orange-thiny px-6 sm:px-10 py-12 sm:py-16"
    >
      <h2
        className="
          text-orange 
          font-extrabold 
          text-center
          mb-10 sm:mb-16
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
        "
      >
        ¿Por qué estudiar con nosotros?
      </h2>

      <WhyStudyCards />
    </article>
  );
};
