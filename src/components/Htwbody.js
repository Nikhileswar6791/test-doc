import React from "react";
import "./Htwbody.css";

import Htwmain from "./Htwmain";
const Htwbody = () => {
  return (
    <div className="htw">
      <div className="htw-header">
        {" "}
        <div className="overlay"></div>
        <div className="content">
          <h4>How the Technology Works</h4>
        </div>
        {/* <div className="head-p">
          <p> </p>
        </div> */}
      </div>
      <p>
        We at Doctorspectra target for a comprehensive assessment of produce
        quality. This includes both internal and external inspections,
        complemented by advanced data analysis and AI algorithms. The system
        provides precise evaluations regarding freshness, ripening timelines,
        and detects potential contaminants, ensuring the safety and quality of
        the produce.
      </p>
      <Htwmain />
      <hr className="hr"></hr>
    </div>
  );
};

export default Htwbody;
