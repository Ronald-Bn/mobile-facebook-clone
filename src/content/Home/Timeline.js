import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { styled } from "@mui/material/styles";
import PublicIcon from '@mui/icons-material/Public';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: "-2px",
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '1px solid currentColor',
            content: '""',
        },
    },
}));

function Timeline() {
    return (
        <Box sx={{
            display: "flex",
            padding: "10px 10px 0",
            margin: "0 0 12px"
        }}>
            <StyledBadge anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }} variant="dot" color="success" overlap="circular">
                <Avatar src="https://scontent.fmnl3-3.fna.fbcdn.net/v/t1.6435-9/48415344_2111842589126424_141131736288329728_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEPUMeHyNODA02AsBysDs0c3CSVQIRBsR7cJJVAhEGxHu2ciax7bjBK7N59Wx2AU7TO2Q0TumAFQx66CQ28SeMv&_nc_ohc=s3UtdsWcsjAAX9JFY5a&tn=9mgJ73YynS83WwHZ&_nc_ht=scontent.fmnl3-3.fna&oh=00_AfBlwmq0LHaTtRIiGwDocepCI8wVY-zmfG6x8Ujk4npusQ&oe=63813B0A" alt="" />
            </StyledBadge>
            <Box sx={{ display: "flex", width: "100%", minHeight: "40px", alignItems: "center" }}>
                <Box sx={{ paddingLeft: "8px", fontFamily: "Helvetica, Arial, sans-serif", width: "100%" }}>
                    <Box sx={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        lineHeight: "16px"
                    }}>
                        Ronald D. Babailan
                    </Box>
                    <Box sx={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "#90949c"
                    }}>
                        1hr
                        <PublicIcon fontSize="12" />
                    </Box>
                </Box>
                <Box sx={{}}>
                    <MoreHorizIcon />
                </Box>
            </Box>
        </Box>
    );
}

export default Timeline