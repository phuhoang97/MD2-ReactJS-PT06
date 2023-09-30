import React from "react";
import { Outlet } from "react-router-dom";

function AboutPage() {
  // Sử dụng outlet để xác định vị trí hiển thị các component con
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AboutPage;
