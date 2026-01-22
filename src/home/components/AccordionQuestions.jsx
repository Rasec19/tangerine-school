import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { IoIosArrowBack } from "react-icons/io";
import { FAQ } from '../../data/frequentlyAskQuestions';
import { useState } from "react";

export const AccordionQuestions = () => {

  const [expanded, setExpanded] = useState('');

  const handleAcordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  }

  return (
    <>
      {FAQ.map((data) => {
        return (
          <Accordion key={data.id} className="accordion" expanded={expanded === data.panel} onChange={handleAcordion(data.panel)}>
            <AccordionSummary
              className='accordion-summary text-lg md:text-3xl font-extrabold text-left hyphens-auto'
              expandIcon={<IoIosArrowBack className="expanded-icon stroke-[20px]" />}
              aria-controls={`${data.panel}-content`}
              id={`${data.panel}-header`}
            >
              {data.question}
            </AccordionSummary>
            <AccordionDetails 
            sx={{
              lineHeight: 1.3,
              pr: { xs: 6, sm: 10, md: 12, lg: 15 }
            }} 
            className='accordion-details text-base md:text-2xl font-medium text-justify hyphens-auto'>
              {data.answer.split('\n').map((line, index) =>
              line.trim() ? (
                <p key={index}>{line}</p>
              ) : (
                // cuando la línea está vacía, agregamos espacio
                <div key={index} className="my-6" />
              )
            )}
            </AccordionDetails>
          </Accordion>
        )
      })}
    </>
  );
};
