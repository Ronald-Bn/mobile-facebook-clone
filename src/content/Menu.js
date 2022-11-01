import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Link } from 'react-router-dom';
import { MenuData } from "../data/MenuData";
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HelpIcon from "../img/icons8-help-50.png";
import HelpCenterIcon from "../img/icons8-about-50.png";
import ReportIcon from "../img/icons8-error-50.png";
import TermsIcon from "../img/icons8-bookmark-50-1.png";
import SafetyIcon from "../img/icons8-shield-50.png";
import LogoutIcon from "../img/icons8-logout-50.png";


function Menu() {
    const avatar = "https://scontent.fmnl3-3.fna.fbcdn.net/v/t1.6435-9/48415344_2111842589126424_141131736288329728_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEPUMeHyNODA02AsBysDs0c3CSVQIRBsR7cJJVAhEGxHu2ciax7bjBK7N59Wx2AU7TO2Q0TumAFQx66CQ28SeMv&_nc_ohc=s3UtdsWcsjAAX9JFY5a&tn=9mgJ73YynS83WwHZ&_nc_ht=scontent.fmnl3-3.fna&oh=00_AfBlwmq0LHaTtRIiGwDocepCI8wVY-zmfG6x8Ujk4npusQ&oe=63813B0A";
    return (
        <>
            <Link style={{ cursor: "pointer", textDecoration: "none" }} to="/">
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "14px 10px",
                    borderTop: "1px solid #E7E9EB",
                    color: "#000"
                }}>
                    <div>
                        <Avatar src={avatar} sx={{ width: 48, height: 48 }} />
                    </div>
                    <div style={{ display: "block", margin: "0 10px", width: "100%" }}>
                        <div style={{ fontSize: "20px" }}>
                            Ronald Babailan
                        </div>
                        <div style={{ fontSize: "14px", color: "#808080" }}>
                            View your Profile
                        </div>
                    </div>
                </Box>
            </Link>
            <hr style={{ margin: "0.3em 10px" }} />
            <Box>
                {MenuData.map((item, index) => {
                    return (
                        <MenuList key={index} name={item.name} img={item.img} />
                    );
                })}
                <DropdownListGroup />
                <MenuList name="Logout" img={LogoutIcon} />
            </Box>
        </>
    );
}

function DropdownListGroup() {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const styledBox = [
        {
            display: "flex", alignItems: "center", padding: "4px 10px",
        },
        {
            display: "block", margin: "0 20px", width: "100%", color: "#1c1e21"
        },
    ];

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper', padding: "0" }}>
            <Box onClick={handleClick} sx={styledBox[0]} >
                <Box>
                    <img src={HelpIcon} alt="Help Icon" />
                </Box>
                <Box component="div" sx={styledBox[1]}>
                    <div style={{ fontSize: "1rem" }}>
                        Help & Support
                    </div>
                </Box>
                {open ? <ExpandLess /> : <ExpandMore />}
            </Box>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <MenuList name="Help Center" img={HelpCenterIcon} />
                    <MenuList name="Report a Problem" img={ReportIcon} />
                    <MenuList name="Terms & Policies" img={TermsIcon} />
                    <MenuList name="Safety" img={SafetyIcon} />
                </List>
            </Collapse>
        </List >
    );
}

function MenuList(props) {
    return (
        <Link style={{ cursor: "pointer", textDecoration: "none" }} to={props.path}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                padding: "4px 10px",
            }}>
                <div>
                    <img src={props.img} alt={props.name} />
                </div>
                <div style={{ display: "block", margin: "0 20px", width: "100%", color: "#1c1e21" }}>
                    <div style={{ fontSize: "1rem" }}>
                        {props.name}
                    </div>
                    <div style={{ fontSize: "1rem" }}>
                        {props.view}
                    </div>
                </div>
            </Box>
        </Link>
    );
}

export default Menu