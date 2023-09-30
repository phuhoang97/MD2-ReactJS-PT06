import React from "react";
import Component4 from "./Component4";

function ReviewProps({ numberProp, arrProps, typeNullProps }) {
  console.log(numberProp); // 10
  console.log(arrProps); // [1,2,3]
  console.log(typeNullProps); // null

  return (
    <div>
      <h1>Review Props</h1>
      <p>Giá trị Props là: {numberProp}</p>
      <Component4 numberProp2={numberProp} />
    </div>
  );
}

export default ReviewProps;
