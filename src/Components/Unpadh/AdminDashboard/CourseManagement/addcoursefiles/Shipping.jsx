import React from "react";
import "../addcoursefiles/shipping.css";

function Shipping() {
  return (
    <div className="ship-main">
      <h2>Shipping Type</h2>
      <div className="box-flex">
        <div className="full">
          <input type="radio" id="sel" name="seller" />
          <label for="sel">Fullfilled by Seller</label>
          <p>
            You’ll be responsible for product delivery.
            <br />
            Any damage or delay during shipping may cost you a Damage fee.
          </p>
        </div>

        <div className="full">
          <input type="radio" id="sel" name="seller" />
          <label for="sel"> Fullfilled by Phoenix</label>
          <p>
            Your product, Our responsibility.
            <br />
            For a measly fee, we will handle the delivery process for you.
          </p>
        </div>
      </div>
      <div className="see">
        <p>
          See our <span>delivery terms conditions</span> for details.
        </p>
      </div>
    </div>
  );
}

export default Shipping;
