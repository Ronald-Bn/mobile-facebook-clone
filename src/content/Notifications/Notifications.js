import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LiveIcon from "../../img/live.png";
import PageIcon from "../../img/paged.png";
import PostIcon from "../../img/post.png";
import TaggedIcon from "../../img/tagged.png";
import PreLoader from "../../components/PreLoader";
import { db } from "../../firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import NotificationLists from "./NotificationLists";


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

    function Icons(category) {
        const array = [LiveIcon, PageIcon, PostIcon, TaggedIcon];
        const Icon = array[category];
        return Icon;
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
                return (<NotificationLists
                    key={index}
                    name={data.name}
                    posts={data.posts}
                    sAvatar={Icons(data.category)}
                    time={data.createdAt.toDate().toDateString()}
                    img={data.profileImg}
                />);
            }) : <PreLoader />}
        </Box>
    )
}


export default Notifications