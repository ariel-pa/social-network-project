import { Box } from "@mui/material";
import {styled} from "@mui/system";

/* 
styled permite aplicar css al
componente Box
 */
const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

export default FlexBetween;