import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import MenuLists from "./MenuLists";
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HelpSupportIcon from "../../img/helpsupport.png";
import HelpCenterIcon from "../../img/helpcenter.png";
import ReportIcon from "../../img/report.png";
import TermsIcon from "../../img/terms.png";
import SafetyIcon from "../../img/safety.png";


function MenuDropDownLists() {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List sx={{ width: '100%', padding: "0" }}>
            <Box onClick={handleClick} sx={{
                display: "flex",
                alignItems: "center",
            }}>
                <Box style={{ margin: "9px 18px" }}>
                    <img width="36px" height="36px" src={HelpSupportIcon} alt="Help Icon" />
                </Box>
                <Box component="div" sx={{
                    display: "block",
                    width: "100%",
                    color: "#1c1e21"
                }}>
                    <div style={{ fontSize: "1rem" }}>
                        Help & Support
                    </div>
                </Box>
                {open ? <ExpandLess /> : <ExpandMore />}
            </Box>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding >
                    <MenuLists name="Help Center" img={HelpCenterIcon} />
                    <MenuLists name="Report a Problem" img={ReportIcon} />
                    <MenuLists name="Terms & Policies" img={TermsIcon} />
                    <MenuLists name="Safety" img={SafetyIcon} />
                </List>
            </Collapse>
        </List >
    );
}

export default MenuDropDownLists