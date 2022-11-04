import Avatar from "@mui/material/Avatar";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';



export default function Home() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [activeButton, setActiveButton] = useState(true);
    const [list, setList] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        if (body.length === 0) {
            return;
        } else {
            setList((oldData) => [...oldData, body]);
            setBody("");
        };

        console.log(list);
    }

    useEffect(() => {
        if (title.length > 0 && body.length > 0) {
            setActiveButton(false);
        } else {
            setActiveButton(true);
        }
    });

    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 0 0 10px",
                borderTop: "1px solid #E7E9EB",
                minHeight: "58px",
                cursor: "pointer"
            }}>
                <iframe width="640" height="480" frameborder="0" allowfullscreen="true" allow="xr-spatial-tracking" src="https://my.matterport.com/show/?m=1NXSUZmzYy7"></iframe>
                <iframe width="640" height="480" frameborder="0" allowfullscreen="true" allow="xr-spatial-tracking" src="https://my.matterport.com/show/?m=7SVANramdxd" ></iframe>
                <div>
                    <Avatar src="https://scontent.fmnl3-3.fna.fbcdn.net/v/t1.6435-9/48415344_2111842589126424_141131736288329728_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEPUMeHyNODA02AsBysDs0c3CSVQIRBsR7cJJVAhEGxHu2ciax7bjBK7N59Wx2AU7TO2Q0TumAFQx66CQ28SeMv&_nc_ohc=s3UtdsWcsjAAX9JFY5a&tn=9mgJ73YynS83WwHZ&_nc_ht=scontent.fmnl3-3.fna&oh=00_AfBlwmq0LHaTtRIiGwDocepCI8wVY-zmfG6x8Ujk4npusQ&oe=63813B0A" />
                </div>
                <div
                    style={{
                        width: "100%",
                        border: "1px solid #ccd0d5",
                        borderRadius: "20px",
                        padding: "5px 0 5px 20px",
                        fontSize: "14px",
                        margin: "12px 10px",
                        cursor: "pointer"
                    }}>
                    <a>What's on your mind?</a>
                </div>
                <div style={{ margin: "10px 10px 0 0", cursor: "pointer" }}>
                    <div style={{ marginLeft: "4px" }}>
                        <CollectionsOutlinedIcon sx={{ marginleft: "20px", color: "#60646a" }} />
                    </div>
                    <span style={{ display: "block", fontSize: "12px" }} >Photo</span>
                </div>
            </Box>
        </>
    );
}


