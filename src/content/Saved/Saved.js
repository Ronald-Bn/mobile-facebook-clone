import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Collections from "./Collections";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SavedItems from "./SavedItems";
import { db } from "../../firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import PreLoader from "../../components/PreLoader";


function Saved() {
    const [data, setData] = useState(null);
    const [savedData, setSavedData] = useState(null);

    const fetchCollections = async () => {
        await getDocs(query(collection(db, "collections"), orderBy("category", "asc")))
            .then((QuerySnapshot) => {
                const newData = QuerySnapshot.docs.map((doc) => ({ ...doc.data() }));
                setData(newData);
                console.log(newData);
            })
    };

    const fetchSaved = async () => {
        await getDocs(query(collection(db, "saved"), orderBy("createdAt", "asc")))
            .then((QuerySnapshot) => {
                const newSavedData = QuerySnapshot.docs.map((doc) => ({ ...doc.data() }));
                setSavedData(newSavedData);
                console.log(newSavedData);
            })
    }

    useEffect(() => {
        fetchCollections();
    }, []);

    useEffect(() => {
        fetchSaved();
    }, []);

    return (
        <>
            {savedData ?
                <>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "12px",
                        fontWeight: "bold",
                        fontSize: "14px"
                    }}>
                        <Box>
                            Your Collections
                        </Box>
                        <Box sx={{ cursor: "pointer", color: "#576b95" }}>
                            See All
                        </Box>
                    </Box><Box sx={{ diplay: "flex", flexWrap: "wrap" }}>
                        {data.map((data, index) => {
                            return (
                                <Collections
                                    key={index}
                                    img={data.img}
                                    category={data.category} />
                            );
                        })}
                    </Box><Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "12px 0 ",
                        margin: "0 10px",
                        fontWeight: "bold",
                        fontSize: "14px",
                        borderBottom: "1px solid #ebedf0"
                    }}>
                        <Box>
                            Saved Items
                        </Box>
                        <Box sx={{ cursor: "pointer", color: "#576b95" }}>
                            All
                            <Box sx={{ display: "inline-block", width: "12px" }}>
                                <ArrowDropDownIcon fontSize="small" sx={{ position: "relative", top: "-1px", left: "-3px" }} />
                            </Box>
                        </Box>
                    </Box><Box sx={{ padding: "0 10px" }}>
                        {savedData.map((data, index) => {
                            return (
                                <SavedItems key={index} img={data.img} postCategory={data.postCategory} post={data.post} />
                            );
                        })}
                    </Box></>
                : <PreLoader />}
        </>
    );
}

export default Saved