import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Badge from "@mui/material/Badge";
import { styled } from '@mui/material/styles';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import RecommendIcon from '@mui/icons-material/Recommend';
import PreLoader from "../components/PreLoader";
import { db } from "../firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Typography from "@mui/material/Typography";



function Notifications() {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        await getDocs(query(collection(db, "notifications"), orderBy("createdAt", "desc")))
            .then((QuerySnapshot) => {
                const newData = QuerySnapshot.docs
                    .map((doc) => ({ ...doc.data() }));
                setData(newData);
            })
    };

    useEffect(() => {
        fetchData();
    }, []);

    function RandomIcons() {
        const array = [PlayCircleIcon, FlagCircleIcon, CircleNotificationsIcon, CloudCircleIcon, RecommendIcon];
        const arrayColor = ["primary", "secondary", "success", "action", "disabled"];
        const matches = Math.floor(Math.random() * 4);
        const Icon = array[matches];
        const IconColor = arrayColor[matches];
        return <Icon color={IconColor} />
    }

    return (
        <Box>
            {data && <>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 10px" }}>
                    <Box>
                        <b>Notifications</b>
                    </Box>
                    <Box>
                        <Button>Mark All As Read</Button>
                    </Box>
                </Box >
                <Box sx={{ padding: "5px 10px", border: "1px solid #E7E9EB" }} >
                    Earlier
                </Box>
            </>}
            {data ? data.map((data, index) => {
                return (<NotificationsList
                    key={index}
                    name={data.name}
                    posts={data.posts}
                    sAvatar={RandomIcons()}
                    time={data.createdAt.toDate().toDateString()}
                    img={data.profileImg}
                />);
            }) : <PreLoader />}
        </Box>
    )
}

function NotificationsList(props) {
    const SmallAvatar = styled(Avatar)(({ theme }) => ({
        width: 16,
        height: 16,
        backgroundColor: "#fff"
    }));

    const PrimaryText = {
        color: "#000",
        fontSize: "14px",
    };

    const SecondaryText = {
        color: "#808080",
        fontSize: "12px",
    };

    return (
        <List sx={{
            width: '100%',
            bgcolor: 'background.paper',
            borderBottom: "1px solid #E7E9EB",
            padding: "0",
            cursor: "pointer",
        }}>
            <ListItem sx={{ padding: "0 10px" }}>
                <ListItemAvatar>
                    <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                            <SmallAvatar>
                                {props.sAvatar}
                            </SmallAvatar>
                        }
                    >
                        <Avatar src={props.img} />
                    </Badge>
                </ListItemAvatar>
                <ListItemText
                    primaryTypographyProps={{ style: PrimaryText }}
                    primary={
                        < React.Fragment >
                            <Typography
                                sx={{ display: 'inline', fontWeight: "bold" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {props.name} :
                            </Typography>
                            {props.posts}
                        </React.Fragment>
                    }
                    secondaryTypographyProps={{ style: SecondaryText }}
                    secondary={props.time} />
            </ListItem>
        </List >
    );
}



export default Notifications