import React, { useState } from "react";
import ReviewLiftingStateUp from "./ReviewLiftingStateUp";

function ReviewUseState() {
  // 1. Props là gì?
  // 2. State là gì?
  // 3. So sánh props và state

  const [number, setNumber] = useState(10);

  // [number, setNumber] => sử dụng cú pháp destructoring
  const handleChange = () => {
    setNumber(20);
  };

  return (
    <div>
      <h1>Review State</h1>
      <p>Number là : {number}</p>
      <button onClick={handleChange}>Click</button>

      <ReviewLiftingStateUp setNumberProps={setNumber} />
    </div>
  );
}

export default ReviewUseState;
