import React from "react";
import Avatar from "@mui/material/Avatar";
import { AvatarGroup, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";


function FriendsLists(props) {
    const BlueButton = styled(Button)({
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "20px",
        textTransform: 'none',
        backgroundColor: "#1877f2",
        fontFamily: "Helvetica",
        '&:hover': {
            backgroundColor: '#1877f2',
        },
    });

    const LightButton = styled(Button)({
        color: "#000",
        fontWeight: "bold",
        borderRadius: "20px",
        textTransform: 'none',
        backgroundColor: "#f0f2f5",
        fontFamily: "Helvetica",
        '&:hover': {
            backgroundColor: '#f0f2f5',
        },
    });

    return (
        <Box sx={{ width: "100%", display: "flex" }}>
            <Box sx={{ marginRight: "10px", paddingTop: "6px" }}>
                <Avatar alt={props.name} src={props.profileImg} sx={{
                    width: "92px",
                    height: "92px"
                }} />
            </Box>
            <Box sx={{ width: "100%", marginRight: "12px" }}>
                <ListItemText>
                    {props.name}
                </ListItemText>
                <Box>
                    <AvatarGroup max={2} sx={{ float: "left" }}>
                        <Avatar alt="Remy Sharp" src={props.profileImg} sx={{ width: 24, height: 24 }} />
                        <Avatar alt="Travis Howard" src={props.profileImg} sx={{ width: 24, height: 24 }} />
                    </AvatarGroup>
                    <ListItemText sx={{ fontSize: "14px", color: "#808080", marginLeft: "55px" }} >
                        {props.mfriends + " mutual friends"}
                    </ListItemText>
                    <Box sx={{ display: "flex", justifyContent: "space-between", paddingTop: "10px" }}>
                        <Box sx={{ width: "50%", fontWeight: "bold", paddingRight: "10px" }}>
                            <BlueButton sx={{ width: "100%", fontWeight: "bold", borderRadius: "5px" }}>Confirm</BlueButton>
                        </Box>
                        <Box sx={{ width: "50%", fontWeight: "bold" }}>
                            <LightButton sx={{ width: "100%", fontWeight: "bold", borderRadius: "5px" }} >Cancel</LightButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}

export default FriendsLists