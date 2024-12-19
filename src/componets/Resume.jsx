import React from "react";
import "../styles/resume.css";
import resumeicon1 from "../assets/resume-icon1.png";
import resumeicon2 from "../assets/resume-icon2.png";

const Resume = () => {
  return (
    <>
      <div className="resume_container">
        <div className="resume_title">
          <div className="resume_mainConatinet">
            <h3>resume</h3>
          </div>

          <div className="resume_subtitleContaintent">
            <p>resume</p>

            <div className="resume_container_parentdiv">
              <div></div>
            </div>
          </div>
        </div>





        <div className="ExperienceandEducationContainer">
          <div className="resumeExpeince"  style={{ height: "200px", width: "50%", border: "2px solid red" }} >

            <div className="resumeExperience">
              <img src={resumeicon1} />
              <h1>Experience</h1>
            </div>

            <div></div>

          </div>


          <div className="resumeEducationContainer" style={{ height: "200px", width: "50%", border: "2px solid red" }}>

            <div className="resumeEucation">
              <img src={resumeicon2} />
              <h1>Education</h1>
            </div>

            <div></div>

          </div>


        </div>



      </div>
    </>
  );
};

export default Resume;
