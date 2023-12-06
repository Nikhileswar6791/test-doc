import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import "./count.css";
function ComponentToRender() {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef();

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root element
      rootMargin: "0px",
      threshold: 0.06, // Trigger when 50% of the component is visible
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, options);

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div ref={componentRef}>
      {isVisible ? (
        <div>
          <div className="row">
            <div className="col-sm-12 col-md-4 percentage">
              <h4>Check entire batch with high accuracy</h4>
              <CountUp className="count-up" end={90} />
              <span className="count-up">%</span>
            </div>
            <div className="col-sm-12 col-md-4 percentage">
              <h4>Reduce food wastage</h4>
              <CountUp className="count-up" end={50} />
              <span className="count-up">%</span>
            </div>
            <div className="col-sm-12 col-md-4 percentage">
              <h4>Increased productivity</h4>
              <CountUp className="count-up" end={25} />{" "}
              <span className="count-up">%</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ComponentToRender;
