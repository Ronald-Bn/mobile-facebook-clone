import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { AvatarGroup, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { db } from "../firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import PreLoader from "../components/PreLoader";

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

function Friends() {
    const [data, setData] = useState(null);

    const fetchFriends = async () => {
        await getDocs(query(collection(db, "friends"), orderBy("requestedAt", "desc")))
            .then((QuerySnapshot) => {
                const newData = QuerySnapshot.docs
                    .map((doc) => ({ ...doc.data() }));
                setData(newData);
                console.log(newData);
            })
    };

    useEffect(() => {
        fetchFriends();
    }, []);

    return (

        <>

            {data ?
                <Box>
                    <Box sx={{ border: "1px solid #c9ccd1", padding: "10px" }}>
                        <LightButton sx={{ fontSize: "14px", marginRight: "6px" }}>
                            Suggestion
                        </LightButton>
                        <LightButton>
                            Friends
                        </LightButton>
                    </Box>
                    <Box sx={{ paddingLeft: "10px" }}>
                        <Box sx={{ paddingTop: "10px" }}>
                            <h3 style={{ fontSize: "20px", display: "inline" }}>Friend Requests</h3>
                            <h3 style={{ color: "red", display: "inline", fontSize: "20px" }}> {data.length} </h3>
                        </Box>
                        {data.map((data, index) => {
                            return (
                                <FriendsList
                                    key={index}
                                    name={data.name}
                                    profileImg={data.profileImg}
                                    mfriends={data.mfriends}
                                />
                            )
                        })
                        }

                        <Box sx={{ textAlign: "right" }}>
                            <LightButton sx={{ width: "95%", borderRadius: "5px", margin: "15px 12px 0 0 " }}>See all</LightButton>
                        </Box>
                        <Box sx={{ paddingTop: "10px" }}>
                            <h3 style={{ fontSize: "20px" }}>People You May Know</h3>
                        </Box>
                        <Box>
                            {data.map((data, index) => {
                                return (
                                    <FriendsList
                                        key={index}
                                        name={data.name}
                                        profileImg={data.profileImg}
                                        mfriends={data.mfriends}
                                    />
                                )
                            })
                            }
                        </Box>
                    </Box>
                </Box> : <PreLoader />
            }
        </>
    );
}

function FriendsList(props) {
    const listStyles = {
        width: "100%",
        display: "flex",
    }

    return (
        <Box sx={listStyles}>
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
                        <Avatar alt="Remy Sharp" src="https://scontent.fmnl6-2.fna.fbcdn.net/v/t1.6435-1/125083551_782480535817114_2563996518197902930_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEj0UtWSZOccV5c9J-iKx5ExJ8IcjkIRgPEnwhyOQhGA_iF7L3dNM2qk5wFj6onpUyCbDshw5kLOIzIKtae1WfS&_nc_ohc=i3OU3qnt-hgAX-AWUPT&_nc_ht=scontent.fmnl6-2.fna&oh=00_AfD_xtPcRGV_vXg71GFLjED-D_lYrZ5v6Cgk_Kh-F-QCbQ&oe=638AEDA2" sx={{ width: 24, height: 24 }} />
                        <Avatar alt="Travis Howard" src="https://scontent.fmnl6-2.fna.fbcdn.net/v/t39.30808-1/295673297_1241989396551522_4637806117988664089_n.jpg?stp=c0.2.56.56a_cp0_dst-jpg_p56x56&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFt5WLLD9dhI0daujxzL-z59hRd74ItJyD2FF3vgi0nICnxjDosQkOzZhY6LOqUD9E4Qosmjh5Q4Ij5BxCZGYJ9&_nc_ohc=YTl3LuEZCYgAX9QkcFI&_nc_oc=AQmeqEvhgmBCuIYS1SG-RJeAzsnAfEXgdduCJOKbogpUnlzxmLxqjWV_6y_M24nWpKs&_nc_ht=scontent.fmnl6-2.fna&oh=00_AfDi7MzzrIWC9vB53u5wfuJdwBFwdYlobkwexe_j1vxtBw&oe=63680F14" sx={{ width: 24, height: 24 }} />
                    </AvatarGroup>
                    <ListItemText sx={{ fontSize: "14px", color: "#808080" }} >
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



export default Friends