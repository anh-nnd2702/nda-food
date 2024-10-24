import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
type NfAccordionPropType = {
  summary: React.ReactNode | string,
  detail: React.ReactNode | React.ReactNode [] | string | null,
  id: string,
  sx?: string
}
const NfAccordion = ({summary, detail, id, sx} : NfAccordionPropType) => {
  
  return (
  <div id={id} className={`${sx} nf-accordion`}>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore/>}>{summary}</AccordionSummary>
      <AccordionDetails>{detail}</AccordionDetails>
    </Accordion>
  </div>
  )
};

export default NfAccordion;
