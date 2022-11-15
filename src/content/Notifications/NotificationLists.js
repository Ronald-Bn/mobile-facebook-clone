import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Badge from "@mui/material/Badge";
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";


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
                <ListItemAvatar sx={{ minWidth: "0", paddingRight: "10px" }}>
                    <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                            <SmallAvatar>
                                <img src={props.sAvatar} width="16px" height="16px" />
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
                                {props.name}
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

export default NotificationsList