import React, { Component } from "react";

export default class DemoForm1 extends Component {
  // Cách xử lý form với 1 ô input
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleChangeInput = (e) => {
    // để lấy value => e.target.value
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    // Cần chặn sự kiện mặc định của thẻ form
    e.preventDefault();
    alert(` Tên Sinh viên là: ${this.state.text}`);
  };

  render() {
    // Lưu ý: ở trong form sẽ có sự kiện onSubmit => button cần có type là submit
    return (
      <div>
        <h1>Demo Form 1</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Student name: </label>
          <input
            type='text'
            value={this.state.text}
            onChange={this.handleChangeInput}
          />
          <button type='submit'>Click</button>
        </form>
      </div>
    );
  }
}
