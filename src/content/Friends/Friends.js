import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { db } from "../../firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import PreLoader from "../../components/PreLoader";
import FriendLists from "./FriendLists";


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

    return (
        <>
            {data ?
                <Box>
                    <Box sx={{ borderBottom: "1px solid #c9ccd1", padding: "10px" }}>
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
                                <FriendLists
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
                                    <FriendLists
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

export default Friends