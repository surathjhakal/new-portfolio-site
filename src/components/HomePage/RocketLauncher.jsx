import React, { useState } from "react";
import { BsAirplaneFill } from "react-icons/bs";
import "./RocketLauncher.css";

const RocketLauncher = () => {
  return (
    <div className="planeLauncher">
      <div className="planeOuter">
        <BsAirplaneFill size={35} />
      </div>
    </div>
  );
};

export default RocketLauncher;
