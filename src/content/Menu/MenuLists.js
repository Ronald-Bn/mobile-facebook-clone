import React from "react";
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';

function MenuLists(props) {
    return (
        <Link style={{ cursor: "pointer", textDecoration: "none" }} to={props.path}>
            <Box sx={{
                display: "flex",
                alignItems: "center"
            }}>
                <div style={{ margin: "9px 18px" }}>
                    <img width="36px" height="36px" src={props.img} alt={props.name} />
                </div>
                <div style={{ display: "block", width: "100%", color: "#1c1e21" }}>
                    <div style={{ fontSize: "1rem" }}>
                        {props.name}
                    </div>
                    <div style={{ fontSize: "1rem" }}>
                        {props.view}
                    </div>
                </div>
            </Box>
        </Link >
    );
}

export default MenuLists