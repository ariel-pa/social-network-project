import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { Constant } from "./../../config";

const AdvertWidget = () =>{
    const theme = useTheme();
    const dark = theme.palette.neutral.dark;
    const main = theme.palette.neutral.main;
    const medium = theme.palette.neutral.medium;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create ad</Typography>
            </FlexBetween>
            <img 
                width="100%"
                height="auto"
                alt="advert"
                src={`${Constant.baseUrl}/assets/info4.jpeg`}
                style={{
                    borderRadius: "0.75rem",
                    margin: "0.75rem 0"
                }}
            />
            <FlexBetween>
                <Typography color={main}>MikaCosmetics</Typography>
                <Typography color={medium}>mikacosmetics.com</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                Your pathway to stunning and inmaculate beauty and made sure your skin 
                is exfoliating skin shining like ligth
            </Typography>
        </WidgetWrapper>
    )
}

export default AdvertWidget;