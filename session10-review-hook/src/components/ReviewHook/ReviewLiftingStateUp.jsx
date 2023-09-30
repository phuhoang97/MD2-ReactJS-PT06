import React from "react";

function ReviewLiftingStateUp({ setNumberProps }) {
  // Chuyển (nâng) trạng thái (state) => Để cập nhật lại cho components cha
  const handleLifting = () => {
    setNumberProps(50);
  };
  return (
    <div>
      <button onClick={handleLifting}>Lifting State Up</button>
    </div>
  );
}

export default ReviewLiftingStateUp;
