import React, { Component } from "react";

export default class DemoForm2 extends Component {
  // Lấy giá trị ở trong select - option
  // Bước 1: Khai báo state => Để lưu trữ các giá trị trong component
  // Bước 2: Lấy giá trị và set lại giá trị của state
  // Bước 3: Hiển thị dữ liệu cho người dùng
  constructor() {
    super();
    this.state = {
      course: "JS",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Khóa học là: ${this.state.course}`);
  };

  render() {
    console.log(this.state.course);
    return (
      <div>
        <h1>Demo Form 2 - Select Option</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Khóa học: </label>
          {/* Viết trực tiếp cho sự kiện */}
          <select
            value={this.state.course}
            onChange={(e) => this.setState({ course: e.target.value })}
          >
            <option value='HTML'>HTML</option>
            <option value='CSS'>CSS</option>
            <option value='JS'>JS</option>
            <option value='ReactJS'>ReactJS</option>
          </select>
          <button type='submit'>Click</button>
        </form>
      </div>
    );
  }
}
