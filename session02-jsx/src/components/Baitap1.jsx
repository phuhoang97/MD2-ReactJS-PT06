// rcc
import React, { Component } from "react";

export default class Baitap1 extends Component {
  // 1. Tạo project mới
  // 2. Tạo ra component: Baitap1 trong folder components (Tên component luôn in hoa chữ cái đầu)
  // 3. Tạo ra Arr có chứa khóa học
  // 4. Hiển thị khóa học trong jsx => dùng map hiển thị các phần tử trong array ra cho ng dùng
  // 5. Gọi component Baitap1 trong App.js
  
  render() {
    const courseArr = ["HTML", "CSS", "JS", "ReactJS"];
    return (
      <div>
        <h1>Danh sách khóa học</h1>
        <ul>
          {courseArr.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
    );
  }
}
