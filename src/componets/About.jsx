import React from "react";
import userpic from "../assets/user-pic.jpg";
import "../styles/about.css";
import Button from "@mui/material/Button";
const About = () => {
    const obj = {
        Birthday: "May 07, 1990",
        Phone: "+1 876-369-9009",
        Email: "devis@example.com",
        From: "2661 Hich meadow lane bear creek",
        Language: "English, Germanic",
        Freelance: "Available",
    };

    return (
        <div className="about_container">
            <div className="about_title">
                <h1>ABOUT ME</h1>
            </div>

            <div className="about_image_and_detail">
                <div className="about_image">
                    <img src={userpic} />
                </div>

                <div className="about_details">
                    <h2>Hi There! I'm Edward Davis</h2>
                    <h4>Visual Designer</h4>
                    <p style={{ lineHeight: "1.5rem" }}>
                        I am a Visual Designer with a strong focus on digital branding.
                        Visul design seeks to attract, inspire, create desires and motivate
                        people to respond to messages, with a view to making a favorable
                        impact.
                    </p>

                    <div>
                        {Object.keys(obj).map((key) => {
                            return (
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        padding:
                                            "8px 0" /********** yeha per vertical padding diya paya hai each row ko**********/,
                                        color:
                                            "#f3f4f5" /************text color each content **********************/,
                                    }}
                                >
                                    <span
                                        style={{
                                            flex: "0 0 100px" /******************Fixed width for the key column***************/,
                                            textAlign:
                                                "left" /***************diplay on the left side se *******************/,
                                        }}
                                    >
                                        {key}
                                    </span>
                                    <span
                                        style={{
                                            flex: "0 0 20px" /***************Fixed width for the colon**************/,
                                            textAlign:
                                                "center" /********************  Center-align the colon*************************/,
                                        }}
                                    >
                                        :
                                    </span>
                                    <span
                                        style={{
                                            flex: "1" /******************** Remaining space for the value column*****************/,
                                            textAlign:
                                                "left" /**************** *Align text to the left******************/,
                                        }}
                                    >
                                        {obj[key]}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="about_button">
                        <Button variant="contained">Download CV</Button>
                        {/* <button>Download CV</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
