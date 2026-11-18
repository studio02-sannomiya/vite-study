import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FaqAccordion() {
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Q. MUIとは何ですか？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React向けのUIコンポーネントライブラリです。
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Q. 色や余白は変更できますか？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            はい。sxプロパティやテーマ設定で変更できます。
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
