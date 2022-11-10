import React from "react";
import Box from "@mui/material/Box";
import Collections from "./Collections";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Saved() {
    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 10px",
                fontWeight: "bold",
                fontSize: "14px"
            }}>
                <Box>
                    Your Collections
                </Box>
                <Box sx={{ cursor: "pointer", color: "#576b95" }}>
                    See All
                </Box>
            </Box>
            <Box sx={{ diplay: "flex", flexWrap: "wrap" }}>
                <Collections />
                <Collections />
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0 12px 10px",
                fontWeight: "bold",
                fontSize: "14px"
            }}>
                <Box>
                    Saved Items
                </Box>
                <Box sx={{ cursor: "pointer", color: "#576b95" }}>
                    All <ArrowDropDownIcon sx={{ position: "relative", left: "-8px", top: "-2px" }} />
                </Box>
            </Box>
        </>
    );
}



export default Saved