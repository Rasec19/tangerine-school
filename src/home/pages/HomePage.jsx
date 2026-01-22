// import { WaveSeparator } from '../../ui/components/WaveSeparator'
import { OurMethods } from '../components/OurMethods'
import { TangerineBanner, WhyStudyWhitUs, Modalities, OurCompromise, FrequentlyQuestions, FollowUs, StudentsOpinions } from '../index'

export const HomePage = () => {

  return (
    <main>
      <TangerineBanner />
      {/* <WaveSeparator flip color="#FFC6B6" backGroundColor='bg-rose-thiny' /> */}
      <WhyStudyWhitUs />
      <OurMethods />
      <OurCompromise />
      {/* <WaveSeparator flip color="#FEF3ED" backGroundColor='bg-yellow' /> */}
      <Modalities />
      <StudentsOpinions />
      <FrequentlyQuestions />
      {/* <WaveSeparator color="#00274E" backGroundColor='bg-rose-thiny' /> */}
      <FollowUs />
    </main>
  )
}
