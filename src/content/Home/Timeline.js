import React from "react";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import Badge from "@mui/material/Badge";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { styled } from "@mui/material/styles";
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import HeartReact from "../../img/react-heart.png";
import LikeReact from "../../img/react-like.png";


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

const styledFlex = [
    {
        flex: "1",
        textAlign: "center",
        fontWeight: "bold",
        color: "#616770",
        fontSize: "12px",
        padding: "0 10px",
        fontFamily: "Helvetica, Arial, sans-serif"
    }
];

function Timeline(props) {
    return (
        <>
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
                            {props.name}
                        </Box>
                        <Box sx={{
                            fontSize: "12px",
                            color: "#90949c"
                        }}>
                            <abbr>{props.date}</abbr>
                            <span aria-hidden="true"> . </span>
                            <PublicIcon fontSize="12" />
                        </Box>
                    </Box>
                    <Box sx={{}}>
                        <MoreHorizIcon />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ margin: "8px 0", padding: "0 10px" }}>
                <a href="#" style={{
                    textDecoration: "none",
                    color: "#000",
                    fontFamily: "Helvetica, Arial, sans-serif"
                }}>
                    {props.posts}
                </a>
                <Box sx={{ maxWidth: "320px", margin: "0 auto" }}>
                    <img
                        style={{ width: "100%" }}
                        src={props.img} />
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                margin: "5px 10px",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#616770",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: "14px",
            }}>

                <Box>
                    <img src={HeartReact} style={{ width: "16px", height: "16px" }} />
                    <img src={LikeReact} style={{ width: "16px", height: "16px", marginLeft: "-2px" }} />
                    <Box sx={{ display: "inline-block", marginLeft: "5px" }}>
                        Ronald and others
                    </Box>
                </Box>
                <Box>
                    9 comments
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                lineHeight: "36px",
                borderTop: "1px solid #ccd0d5",
                borderBottom: "10px solid #ccd0d5"
            }}>
                <Box sx={styledFlex}><ThumbUpOutlinedIcon />Like</Box>
                <Box sx={styledFlex}><ChatBubbleOutlineOutlinedIcon />Comment</Box>
                <Box sx={styledFlex}>Share</Box>
            </Box>
        </>

    );
}

export default Timeline