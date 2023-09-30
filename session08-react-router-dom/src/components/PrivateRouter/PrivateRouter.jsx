import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter() {
  const isLogin = false;
  /* Khi dùng đăng nhập: => Lưu token (id, email, role...)
  sẽ dựa vào điều kiện để cho phép nếu thỏa mãn mới cho vào Admin
  */
  return isLogin ? <Outlet /> : <Navigate to='/login' />;
}

export default PrivateRouter;
