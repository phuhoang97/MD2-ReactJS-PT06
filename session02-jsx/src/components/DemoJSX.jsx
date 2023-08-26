// rcc => tạo ra class component
// rfce => tạo ra function component

import React from "react";
import "./DemoJSX.css";

// import { Component } from "react";

class DemoJSX extends React.Component {
  render() {
    // Cú pháp nội suy trong jsx => {}
    const number = 12;
    const text = "Hello world";
    const arr = [1, 2, 3];
    const people = {
      name: "Student A",
      age: 20,
    };
    return (
      <div>
        {/* 
        Lưu ý: Khi sử dụng css theo kiểu inline
        Các sự kiện hay các thuộc tính đều được viết theo kiểu camelCase:
        Ví dụ: 
        + onclick => onClick || onchange => onChange
        + color => color || background-color => backgroundColor
        + class => className
        */}

        <h1 style={{ backgroundColor: "pink", color: "white" }}>Demo JSX</h1>
        <p className='text-number'>
          {number} - {text}
        </p>
        <p>{arr.toString()}</p>
        <p>
          {people.name} - {people.age}
        </p>
      </div>
    );
  }
}

export default DemoJSX;
