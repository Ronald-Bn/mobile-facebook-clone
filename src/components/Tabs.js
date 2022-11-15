import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { Link, useLocation } from 'react-router-dom';


export default function IconTabs() {
    const [value, setValue] = useState(0);
    const y = ["/", "/Friends", "/Saved", "/Videos", "/Notifications", "/Menu"];
    const { pathname } = useLocation();

    useEffect(() => {
        for (let i = 0; i < y.length; i++) {
            if (pathname === y[i]) {
                setValue(i);
            }
        }
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const minWidth = {
        minWidth: "0",
        padding: "0",
        minHeight: "40px",
    };

    return (
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" variant="fullWidth" sx={{ minHeight: "40px", borderBottom: "1px solid #E7E9EB" }}>
            <Tab sx={{ minWidth }} icon={<HomeIcon />} to="/" component={Link} />
            <Tab sx={{ minWidth }} icon={<GroupOutlinedIcon />} to="/Friends" component={Link} />
            <Tab sx={{ minWidth }} icon={<BookmarkBorderOutlinedIcon />} to="/Saved" component={Link} />
            <Tab sx={{ minWidth }} icon={<OndemandVideoOutlinedIcon />} to="/Videos" component={Link} />
            <Tab sx={{ minWidth }} icon={<NotificationsOutlinedIcon />} to="/Notifications" component={Link} />
            <Tab sx={{ minWidth }} icon={<MenuOutlinedIcon />} to="/Menu" component={Link} />
        </Tabs>
    );
}
