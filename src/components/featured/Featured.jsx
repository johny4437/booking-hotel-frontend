import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/2416653/pexels-photo-2416653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="featuredImage"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>124 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="featuredImage"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>138 properties</h2>
        </div>
      </div>
      {/* <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/273204/pexels-photo-273204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="featuredImage"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>124 properties</h2>
        </div>
      </div> */}
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/2017747/pexels-photo-2017747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="featuredImage"
        />
        <div className="featuredTitles">
          <h1>Santiago</h1>
          <h2>124 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
