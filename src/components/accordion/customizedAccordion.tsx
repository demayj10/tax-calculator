import { styled } from '@mui/material/styles';
import { Accordion } from '@mui/material';

export const CustomizedAccordion = styled(Accordion)`
    & .MuiCollapse-wrapper {
        margin: 0;
    }
    
    & .MuiCollapse-wrapperInner {
        margin: 0;
    }
  `;
