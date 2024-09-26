"use client";
import { useState } from "react";
import "./animation.css";
const Animation = function () {
  var [margin, setMargin] = useState(-65);

  var divStyle = {
    marginTop: margin,
  };

  const handleChange = function () {
    setMargin(-320);
    setTimeout(function () {
      setMargin(-65);
    }, 400);
  };

  return (
    <>
      <main>
        <div style={divStyle}>
          <img src="dove.png" alt="a picture of a dove"/>
        </div>
        <section></section>
      </main>
      <button onClick={handleChange}>Jump</button>
    </>
  );
};

export default Animation;
