import React, { Component } from "react";

export default class DemoForm3 extends Component {
  // Lấy giá trị trong nhiều ô input
  // Bước 1: Khởi tạo State
  constructor() {
    super();
    this.state = {
      studentName: "",
      age: "",
      address: "",
      course: "HTML",
      demo: "Hello World",
    };

    // Bước 2: Khai báo: name, value, onChange cho các ô input => Lưu ý name: trùng với tên state
  }

  // Bước 3: Khai báo hàm handleChangeInput
  handleChangeInput = (e) => {
    console.log(e);
    this.setState({
      // Sử dụng cú pháp của ES6 => enhance object literal
      [e.target.name]: e.target.value,
      // studentName: "Nguyen Van A"
      // age: 18 ...
    });
  };

  // Bước 4: viết hàm handleSubmit
  handleSubmit = (e) => {
    // Chặn sự kiện mặc định của form
    e.preventDefault();
    alert(` Tên SV: ${this.state.studentName}
    Tuổi: ${this.state.age}
    Địa chỉ: ${this.state.address}
    Khóa học: ${this.state.course}
    `);
    // this.setState({ demo: this.state.studentName });
  };
  render() {
    return (
      <div>
        <h1>Demo Form 3 - Xử lý nhiều ô input</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Student Name: </label>
          <input
            type='text'
            name='studentName'
            value={this.state.studentName}
            onChange={this.handleChangeInput}
          />
          <br />
          <label>Age: </label>
          <input
            type='text'
            name='age'
            value={this.state.age}
            onChange={this.handleChangeInput}
          />
          <br />
          <label>Address: </label>
          <input
            type='text'
            name='address'
            value={this.state.address}
            onChange={this.handleChangeInput}
          />
          <br />
          <label>Course: </label>
          <select
            name='course'
            value={this.state.course}
            onChange={this.handleChangeInput}
          >
            <option value='HTML'>HTML</option>
            <option value='CSS'>CSS</option>
            <option value='JS'>JS</option>
            <option value='ReactJS'>ReactJS</option>
          </select>
          <br />
          <button type='submit'>Submit</button>
        </form>
        <h2>{this.state.demo}</h2>
      </div>
    );
  }
}
