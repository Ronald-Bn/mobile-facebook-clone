import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from "@mui/material/IconButton"
import IconTabs from "./Tabs";
import SearchIcon from '@mui/icons-material/Search';
import SvgIcon from "@mui/material/SvgIcon";

export default function Navbar() {
    return (
        <>
            <Box sx={{
                background: "#3b5998",
                minHeight: "40px",
                display: "flex",
                justifyContent: "space-between",
                textAlign: "center",
                justifyItems: "center"
            }}>
                <IconButton>
                    <AccountCircleIcon style={{ color: '#fff' }} />
                </IconButton>
                <div style={{
                    width: '100%',
                    color: '#fff',
                    alignSelf: "center",
                    borderBottom: "1px solid #c4d2e7",
                    margin: "0 20px",
                }}>
                    <a style={{ display: "block" }}>
                        <SearchIcon style={{ color: '#c4d2e7' }} />
                        <span style={{ fontSize: "14px", width: '90%', color: "#c4d2e7" }}>Search</span>
                    </a>
                </div>
                <IconButton>
                    <SvgIcon sx={{ color: "#fff" }}>
                        <path d="M12,2C6.486,2,2,6.262,2,11.5c0,2.545,1.088,4.988,3,6.772v4.346l4.08-2.039C10.039,20.858,11.02,21,12,21 c5.514,0,10-4.262,10-9.5S17.514,2,12,2z M13.167,14.417l-2.917-2.333L5,14.417l5.833-5.833l2.917,2.333L19,8.583L13.167,14.417z" />
                    </SvgIcon>
                </IconButton>
            </Box>
            <Box>
                <IconTabs />
            </Box>
        </>
    );
}



