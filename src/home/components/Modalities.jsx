import Note from '../../assets/nota-tangerine.png';
import Note2 from '../../assets/nota-tangerine2.png';
import Note3 from '../../assets/nota-tangerine3.png';

export const Modalities = () => {
  return (
    <>
      <article className="bg-rose-thiny px-4 sm:px-8 md:px-16 py-24" id="modalities">
        <div className="w-full flex flex-col items-center gap-6 text-center" >
          <h3 id="title" className="text-orange text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Modalidades
          </h3>
          <p
            id="paragraph"
            className="text-blue-strong text-lg md:text-xl lg:text-2xl font-medium sm:px-0 px-4"
          >
            Tenemos tres modalidades diferentes para que elijas la que más te convenga:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:mt-12 mt-2" >
          <div className="w-full flex flex-col items-center justify-center">
            <img className="card-spin" src={Note} alt="Modalidad 12 horas" loading="lazy" />
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <img className="card-spin" src={Note2} alt="Modalidad 16 horas" loading="lazy" />
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <img className="card-spin" src={Note3} alt="Modalidad 20 horas" loading="lazy" />
          </div>
        </div>
      </article>

    </>
  );
};
