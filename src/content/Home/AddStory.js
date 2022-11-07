import React from "react";
import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';

function AddStory() {
    return (
        <>
            <Box sx={{ display: "inline-block", minWidth: "90px", minHeight: "160px", borderRadius: "12px", margin: "0 5px 0 5px" }}>
                <Box sx={{ position: "relative" }}>
                    <img style={{ zIndex: "-1", position: "absolute", borderRadius: "10px", objectFit: "cover" }} width="90px" height="160px" src="https://scontent.fmnl3-3.fna.fbcdn.net/v/t1.6435-9/48415344_2111842589126424_141131736288329728_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEPUMeHyNODA02AsBysDs0c3CSVQIRBsR7cJJVAhEGxHu2ciax7bjBK7N59Wx2AU7TO2Q0TumAFQx66CQ28SeMv&_nc_ohc=s3UtdsWcsjAAX9JFY5a&tn=9mgJ73YynS83WwHZ&_nc_ht=scontent.fmnl3-3.fna&oh=00_AfBlwmq0LHaTtRIiGwDocepCI8wVY-zmfG6x8Ujk4npusQ&oe=63813B0A" />
                </Box>
                <Box sx={{
                    position: "relative",
                    top: "5px",
                    left: "5px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    padding: "18px",
                    width: "24px",
                    height: "24px",
                }}>
                    <AddIcon color="primary" sx={{ position: "relative", top: "-14px", left: "-12px" }} />
                </Box>
                <Box sx={{
                    background: "linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, .1), rgba(0, 0, 0, .29), rgba(0, 0, 0, .64) )",
                    zIndex: "0",
                    width: "100%",
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#fff",
                    padding: "85px 0 5px 5px",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "12px"
                }}>
                    <Box>Add to</Box>
                    <Box>Story</Box>
                </Box>
            </Box>
        </>
    );
}

export default AddStory