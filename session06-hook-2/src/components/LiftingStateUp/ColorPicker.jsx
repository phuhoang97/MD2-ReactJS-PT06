import React from "react";

function ColorPicker({ setColor, handleChangeColorPicker }) {
  //   console.log(setColor);
  /* Cách 1: sử dụng setColor
    const handleChangeColor = (e) => {
      setColor(e.target.value);
    };
    */

  /* Cách 2: Truyền đối số để gửi lên cha */

  const handleChangeColor = (e) => {
    handleChangeColorPicker(e.target.value);
  };

  return (
    <div>
      <input type='color' onChange={handleChangeColor} />
    </div>
  );
}

export default ColorPicker;
