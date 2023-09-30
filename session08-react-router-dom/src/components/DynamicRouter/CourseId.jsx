import React from "react";
import { useParams } from "react-router-dom";

function CourseId() {
  // Khi ở trên đường dẫn url có param => lấy param đấy xuống
  // => useParams
  const param = useParams();
  console.log(param); // id : "1212"
  // key: id => được định ở bên router
  // value: 1212 => sẽ được lấy ở trên params
  // Trên thực tế: param thường được dùng để lấy id người dùng
  return <div>Khóa học có id là : {param.id}</div>;
}

export default CourseId;
