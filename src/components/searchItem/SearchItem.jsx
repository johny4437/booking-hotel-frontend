import React from "react";
import "./searchitem.css";
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o="
        alt=""
        className="srcImg"
      />
      <div className="srcDesc">
        <h1 className="srcTitle">Tower Street Apartments</h1>
        <span className="srcDistance">500m from center</span>
        <span className="srcTaxiOp">Free airport taxi</span>
        <span className="srcSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="srcFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="srcCancelOp">Free cancellation </span>
        <span className="srcCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="srcDetails">
        <div className="srcRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="srcDetailTexts">
          <span className="srcPrice">$112</span>
          <span className="srcTaxOp">Includes taxes and fees</span>
          <button className="srcCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
