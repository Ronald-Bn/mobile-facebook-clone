import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockIcon from '@mui/icons-material/Lock';


function Collections(props) {
    return (
        <Box sx={{
            border: "1px solid rgba(0, 0, 0, .18)",
            width: "130px",
            height: "150px",
            marginLeft: "10px",
            borderRadius: "5px",
            overflow: "hidden",
            display: "inline-block",
        }}>
            <Box sx={{ overflow: "hidden" }}>
                <img style={{ width: "130px", height: "80px", objectFit: "cover" }} src={props.img} />
            </Box>
            <Box sx={{
                position: "relative",
                top: "-18px",
                paddingLeft: "10px"
            }}>
                <Avatar src="21312" fontSize="small" sx={{
                    border: "2px solid #fff",
                    width: 36,
                    height: 36,
                }}>{props.category.charAt(0)}</Avatar>
            </Box>
            <Box sx={{
                position: "relative",
                top: "-16px",
                paddingLeft: "12px",
                width: "100%"
            }}>
                <Box sx={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: "12px",
                    fontWeight: "bold"
                }}>
                    {props.category}
                </Box>
                <Box sx={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: "14px",
                    color: "#90949c"
                }}>
                    <LockIcon fontSize="12" />Only me
                </Box>
            </Box>
        </Box>
    );
}


export default Collections