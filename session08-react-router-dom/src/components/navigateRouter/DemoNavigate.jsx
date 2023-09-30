import React from "react";
import { useNavigate } from "react-router-dom";

function DemoNavigate() {
  // useNavigate là 1 hook được cung cấp bởi react-router-dom
  // được sử dụng để điều hướng trang web
  const navigate = useNavigate();
  return (
    <div>
      {/* useNavigate với 1 tham số */}
      <button onClick={() => navigate("/contact")}>Go to Contact</button>
      {/* useNavigate với history */}
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate(-2)}>Back Back</button>
      <button onClick={() => navigate(1)}>forward</button>
      <button onClick={() => navigate(2)}>forward forward</button>
      {/* useNavigate với replace = true */}
      <button onClick={() => navigate("/contact", { replace: true })}>
        Go to Contact - not save history
      </button>
      {/* useNavigate with data */}
      <button onClick={() => navigate("/contact", { state: { number: 10 } })}>
        Go to Contact - with data
      </button>
      {/*  */}
    </div>
  );
}

export default DemoNavigate;
