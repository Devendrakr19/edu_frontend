import React, { useState } from "react";

import "../addcoursefiles/attributes.css";

function Attributes() {
  return (
    <div className="attr-main">
      <div className="attr-h2">
        <h2>Attributes</h2>
      </div>
      <div className="attr">
        <input type="checkbox" id="check" name="box" />
        <label for="check">Fragile Product</label>
      </div>

      <div className="attr">
        <input type="checkbox" id="check" name="box" />
        <label for="check">Biodegradable </label>
      </div>

      <div className="attr">
        <input type="checkbox" id="check" name="box" />
        <label for="check">Frozen Product</label>
      </div>
      <div className="max">
        <input type="" placeholder="Max.allowed Temperature" />
      </div>

      <div className="attr">
        <input type="checkbox" id="check" name="box" />
        <label for="check">Frozen Product</label>
      </div>
      <div className="date">
        <label htmlFor="datetime"> </label>

        <input type="date" />
      </div>
    </div>
  );
}

export default Attributes;
