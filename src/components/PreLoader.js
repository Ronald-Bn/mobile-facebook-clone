import React from "react";
import Box from "@mui/material/Box";

function PreLoader() {
    return (
        <Box sx={{ width: "100%", height: "100vh", backgroundColor: "#E7E9EB", textAlign: "center" }}>
            <p>loading</p>
        </Box>
    );
}

export default PreLoader