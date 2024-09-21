import React from "react";
import "./Getdemo.scss";
// import BusinessNavbar from "./Businessnav";
import HeadingCard from "./BusinessAPI";
import Trusted from "./Trusted";

function GetDemo() {
  return (
    <div>
      <div className="get-container">
        <div className="get-demo">
          <div className="get-conrain1">
            <h1>Get your demo</h1>
          </div>

          <div className="get-contain2">
            <p>
              Tell us your needs and we’ll start on a custom plan to drive
              results.
            </p>
          </div>
          <div className="get-contains">
            <div className="get-contain3">
              <h4>With Uredx as your learning partner, you can:</h4>
            </div>
            <div className="contians">
              <div className="card">
                <HeadingCard />
              </div>
              <div className="true-by">
                <h1>Trusted by</h1>
              </div>
              <div className="">
                <Trusted />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetDemo;
