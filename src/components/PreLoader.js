import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';


function PreLoader() {
    return (
        <Box sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#E7E9EB",
            textAlign: "center",
            color: "#808080"
        }}>
            <CircularProgress size={30} thickness={6} color='inherit' value={100} />
        </Box>
    );
}

export default PreLoader