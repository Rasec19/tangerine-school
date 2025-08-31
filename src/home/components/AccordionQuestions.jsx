import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
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
          <Accordion key={data.id} className="accordion pb-4" expanded={expanded === data.panel} onChange={handleAcordion(data.panel)}>
            <AccordionSummary
              className='accordion-summary text-lg md:text-3xl font-bold'
              expandIcon={<ArrowBackIosIcon className="expanded-icon" />}
              aria-controls={`${data.panel}-content`}
              id={`${data.panel}-header`}
            >
              {data.question}
            </AccordionSummary>
            <AccordionDetails className='accordion-details text-base md:text-2xl'>
              {data.answer}
            </AccordionDetails>
          </Accordion>
        )
      })}
    </>
  );
};
