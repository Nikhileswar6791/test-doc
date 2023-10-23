import React from "react";
import "./Htwbody.css";

import Htwmain from "./Htwmain";
const Htwbody = () => {
  return (
    <div className="htw">
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
