import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

function IndexColor() {
  // Lifting State Up là: Nâng (Chuyển) trạng thái từ component con lên component cha => sử dụng event
  // Bởi vì react là one way data binding (luồng dữ liệu 1 chiều)

  const [color, setColor] = useState("#000000");
  // Cách 1: Sử dụng setColor (Là 1 hàm dùng để cập nhật lại state)

  // Cách 2: Xây dựng 1 hàm đẻ truyền xuống
  const handleChangeColorPicker = (e) => {
    setColor(e);
  };

  return (
    <div>
      <h1>Lifting State Up</h1>
      {/* Cách 1: Sự dụng setColor */}
      {/* <ColorPicker setColor={setColor} /> */}

      {/* Cách 2: Xây dựng hàm để truyền state */}
      <ColorPicker handleChangeColorPicker={handleChangeColorPicker} />
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          margin: "0 auto",
        }}
      ></div>
    </div>
  );
}

export default IndexColor;
