import React, { useState } from "react";
import "../addcoursefiles/coursetitle.css";

import { FaGlobe } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { PiNotePencilLight } from "react-icons/pi";

import { TbFileUpload } from "react-icons/tb";

import Hello from "./Hello";
import Shipping from "./Shipping";
import Global from "./Global";
import Attributes from "./Attributes";
import Advanced from "./Advanced";

function Display() {
  const [selectedComponent, setSelectedComponent] = useState(<Hello />);

  const renderComponent = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="dis-main">
      <div className="dis">
        <h2>Display images</h2>
      </div>

      <div className="upload">
        {/* Hidden file input */}
        <input type="file" id="fileInput" style={{ display: "none" }} />

        {/* Custom button with icon */}
        <label htmlFor="fileInput" className="upload-text">
          <span>
            Drag your image here or{" "}
            <span className="spcl-text">Browse from device</span>
          </span>
        </label>
        <label htmlFor="fileInput" className="upload-icon">
          <span>
            <TbFileUpload />
          </span>
        </label>
      </div>

      <div className="inven">
        <h2>Inventory</h2>
      </div>
      <div className="buttonMain">
        <div className="buttons">
          <div className="one">
            <PiNotePencilLight />
            <button onClick={() => setSelectedComponent(<Hello />)}>
              Pricing
            </button>
          </div>

          <div className="two">
            <PiShoppingCartLight />
            <button onClick={() => setSelectedComponent(<Shipping />)}>
              Shipping
            </button>
          </div>
          <div className="two">
            <FaGlobe />
            <button onClick={() => setSelectedComponent(<Global />)}>
              Global Delivery
            </button>
          </div>
          <div className="two">
            <PiShoppingCartLight />
            <button onClick={() => setSelectedComponent(<Attributes />)}>
              Attributes
            </button>
          </div>
          <div className="two">
            <IoLockClosedOutline />
            <button onClick={() => setSelectedComponent(<Advanced />)}>
              Advanced
            </button>
          </div>
        </div>
        <div className="component">{selectedComponent}</div>
      </div>
    </div>
  );
}

export default Display;
