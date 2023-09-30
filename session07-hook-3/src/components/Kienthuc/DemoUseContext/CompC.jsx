import React, { useContext } from "react";
import { themeContext } from "./CompA";

function CompC() {
  const theme = useContext(themeContext);
  return (
    <div className={theme}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
      dolorem quae quaerat tempora fugit ipsam pariatur alias quam natus
      aspernatur!
    </div>
  );
}

export default CompC;
