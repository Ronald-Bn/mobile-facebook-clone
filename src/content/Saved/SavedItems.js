import React from "react";
import Box from "@mui/material/Box";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function SavedItems(props) {
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 0",
            cursor: "pointer",
            borderBottom: "1px solid #ebedf0"
        }}>
            <Box sx={{ borderRadius: "10px", overflow: "hidden", height: "83px" }}>
                <img
                    width="109px"
                    height="83px"
                    style={{ objectFit: "cover" }}
                    src={props.img} />
            </Box>

            <Box sx={{ width: "100%", paddingLeft: "10px" }}>
                <p style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    color: "#90949c",
                    fontSize: "12px",
                    margin: "0"
                }}>
                    {props.postCategory}
                </p>
                <p style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: "14px",
                    fontWeight: "bold",
                    margin: "0"
                }}>
                    {props.post}
                </p>
            </Box>
            <Box>
                <MoreHorizIcon />
            </Box>
        </Box>
    );
}

export default SavedItems