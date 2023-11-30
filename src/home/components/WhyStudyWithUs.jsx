import WhyStudyCards from './WhyStudyCards'

export const WhyStudyWithUs = () => {
  return (
    <article className='w-full bg-white my-10 p-8' id='why-with-us'>
      <div className='flex justify-center mb-6'>
        <h2 className='text-4xl'>¿Por qué estudiar en Tangerine School?</h2>
      </div>
      <div className='flex justify-between items-baseline'>
        <WhyStudyCards />
        <WhyStudyCards />
        <WhyStudyCards />
      </div>
    </article>
  )
}
