import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import LazyLoad from "react-lazy-load";
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
        // Render your component content here
        <div>
          <div className="row">
            <div className="col percentage">
              <h4>Percentage 1</h4>
              <CountUp className="count-up" end={25} />
              <span className="count-up">%</span>
            </div>
            <div className="col percentage">
              <h4>Percentage 2</h4>
              <CountUp className="count-up" end={45} />
              <span className="count-up">%</span>
            </div>
            <div className="col percentage">
              <h4>Percentage 3</h4>
              <CountUp className="count-up" end={50} />{" "}
              <span className="count-up">%</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ComponentToRender;
