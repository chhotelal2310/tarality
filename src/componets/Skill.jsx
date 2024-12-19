import React from "react";
import '../styles/skill.css'

const Skill = () => {
    return <>
        <div className="skill_container">


            <div className="skill_title">
                <div className="skill_mainConatinet">
                    <h3> my skills</h3>
                </div>
                <div className="skill_subtitleContaintent">
                    <p> my skills</p>
                    <div className="skill_container_parentdiv">
                        <div></div>
                    </div>
                </div>
            </div>


            <div className="Skill_ContentAndPercentage">
                <div style={{ width: '50%' }}>
                    <div className="skillContentheading">
                        <h2>All the skills that I have in that field of work are <br /> mentioned.</h2>
                    </div>

                    <div className="skill_contentParagraph">
                        <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.</p>
                        <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                    </div>
                </div>



                <div style={{ width: '50%' }} className="skill_contentpercenatge">

                    <div className="skill_photoshop">
                        <span className="percentage"><span>Photoshop</span><span>95%</span></span>
                        <div></div>
                    </div>

                    <div className="Motion_Graphic">
                        <span className="percentage"><span>Motion Graphic</span> <span>75%</span></span>
                        <div></div>
                    </div>


                    <div className="Adobe_XD">
                        <span className="percentage"><span>Adobe XD</span><span>90%</span></span>
                        <div></div>
                    </div>

                    <div className="UX_Design">
                        <span className="percentage"><span>UX Design</span><span>85%</span></span>
                        <div></div>
                    </div>

                    <div className="HTML">
                        <span className="percentage"><span>HTML</span><span>80%</span></span>
                        <div></div>
                    </div>

                    <div className="Digital_Marketing">
                       <span className="percentage"> <span>Digital Marketing</span><span>90%</span></span>
                        <div></div>
                    </div>

                </div>

            </div>
        </div>

    </>
}

export default Skill;
