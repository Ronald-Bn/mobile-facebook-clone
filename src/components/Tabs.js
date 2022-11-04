import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from 'react-router-dom';




export default function IconTabs() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const minWidth = {
        minWidth: "0",
        padding: "0",
        minHeight: "40px",
    };

    return (
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" variant="fullWidth" sx={{ minHeight: "40px" }}>
            <Tab sx={{ minWidth }} icon={<HomeIcon />} to="/" component={Link} />
            <Tab sx={{ minWidth }} icon={<GroupOutlinedIcon />} to="/Friends" component={Link} />
            <Tab sx={{ minWidth }} icon={<BookmarkBorderOutlinedIcon />} to="/Saved" component={Link} />
            <Tab sx={{ minWidth }} icon={<OndemandVideoOutlinedIcon />} to="/Videos" component={Link} />
            <Tab sx={{ minWidth }} icon={<NotificationsOutlinedIcon />} to="/Notifications" component={Link} />
            <Tab sx={{ minWidth }} icon={<MenuOutlinedIcon />} to="/Menu" component={Link} />
        </Tabs>
    );
}
