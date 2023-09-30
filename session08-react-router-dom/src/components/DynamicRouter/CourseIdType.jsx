import React from "react";
import { useParams } from "react-router-dom";

function CourseIdType() {
  const param = useParams();
  return (
    <div>
      Khóa học có id: {param.id} - Khóa học: {param.type}
    </div>
  );
}

export default CourseIdType;
