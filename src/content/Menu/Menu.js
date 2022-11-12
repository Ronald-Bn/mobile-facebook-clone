import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Link } from 'react-router-dom';
import { MenuData } from "../../data/MenuData";
import MenuLists from "./MenuLists";
import MenuDropDownLists from "./MenuDropdDownLists";
import LogoutIcon from "../../img/logout.png";


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
                        <MenuLists key={index} name={item.name} img={item.img} />
                    );
                })}
                <MenuDropDownLists />
                <MenuLists name="Logout" img={LogoutIcon} />
            </Box>
        </>
    );
}


export default Menu