import React from "react";
import { useLocation } from "react-router-dom";

function ContactPage() {
  // Để nhận được dữ liệu từ useNavigate => useLocation để nhận dữ liệu từ navigate chuyển sang
  const location = useLocation();
  // location = {state: {number : 10}}
  // console.log(location.state.number); // 10
  return <div>{location.state ? location.state.number : "ContactPage"}</div>;
}

export default ContactPage;
