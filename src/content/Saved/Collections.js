import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockIcon from '@mui/icons-material/Lock';


function Collections() {
    return (
        <Box sx={{
            border: "1px solid black",
            width: "130px",
            height: "150px",
            marginLeft: "10px",
            fontWeight: "bold",
            borderRadius: "5px",
            overflow: "hidden",
            display: "inline-block"
        }}>
            <Box sx={{ overflow: "hidden" }}>
                <img src="https://external.fmnl3-1.fna.fbcdn.net/emg1/v/t13/14819246760499116719?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FNFy6ZBNHWdk%2Fmaxresdefault.jpg&fb_obo=1&utld=ytimg.com&stp=c0.5000x0.5000f_dst-emg0_p130x80_q75_u&_nc_eui2=AeHnqJOeMeEzLrdjH8E1u76PGd637icKobkZ3rfuJwqhuYiD3OxYVlAF2MEbhSergiuxnpByYTR0qwOMLA_ssj0x&ccb=13-1&oh=06_AbGniFsCj-9P2R_zeTWsB8e_J3sBT06CEjeE9wD77eg6jA&oe=636BFBF8&_nc_sid=40c256" />
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
                }} />
            </Box>
            <Box sx={{
                position: "relative",
                top: "-18px",
                paddingLeft: "10px", margin: "", width: "100%"
            }}>
                <Box sx={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: "12px" }}>English</Box>
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