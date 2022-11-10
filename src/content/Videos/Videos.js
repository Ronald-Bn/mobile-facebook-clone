import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import PostVideos from "./PostVideos";
import { db } from "../../firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import PreLoader from "../../components/PreLoader";



function Videos() {
    const [data, setData] = useState(null);

    const fetchVideos = async () => {
        await getDocs(query(collection(db, "videos"), orderBy("createdAt", "desc")))
            .then((QuerySnapshot) => {
                const newData = QuerySnapshot.docs
                    .map((doc) => ({ ...doc.data() }));
                setData(newData);
                console.log(newData);
            })
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    return (
        <>
            {data ?
                <Box>
                    {data.map((data, index) => {
                        return (
                            <PostVideos key={index}
                                name={data.name}
                                date={data.createdAt.toDate().toDateString()}
                                posts={data.post}
                                video={data.video}
                            />
                        );
                    })}
                </Box>

                : <PreLoader />}


        </>
    );
}



export default Videos