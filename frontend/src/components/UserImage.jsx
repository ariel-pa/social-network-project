import { Box } from "@mui/material";
import { Constant } from "./../config";

const UserImage = ({ image, size="60px" })=>{
    return(
        <Box>
            <img
                style={{objectFit: "cover", borderRadius: "50%"}}
                width={size}
                height={size}
                alt="user"
                src={`${Constant.baseUrl}/assets/${image}`}
            />
        </Box>
    )
}

export default UserImage;