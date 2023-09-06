import React, { Component } from "react";

export default class DemoEvent extends Component {
  // Khai báo state
  constructor() {
    super();
    this.state = {
      name: "Nguyễn Văn A",
    };

    // Định nghĩa từ khóa this cho hàm
    this.handleClick4 = this.handleClick4.bind(this);
  }
  // Sử dụng với Arrow Function
  handleClick1 = () => {
    console.log("Click 1");
  };

  handleClick2 = () => {
    console.log("Click 2");
    console.log(this.state.name);
  };

  // Sử dụng với function thường
  handleClick3() {
    console.log("Click 3");
  }

  handleClick4() {
    console.log("Click 4");
    console.log(this.state.name);
  }

  handleClick5 = (greeting) => {
    console.log("Click 5");
    console.log(greeting);
  };

  // Khi sử dụng với arrow function có thể loại bỏ được từ khóa this trong class
  // Còn khi sử dụng với function thường cần khai báo từ khóa this cho hàm
  render() {
    return (
      <div>
        {/* Trường hợp 1: Hàm sẽ được chạy luôn khi component render */}
        <button onClick={this.handleClick1()}>Click 1</button>
        {/* Trường hợp 2: Hàm sẽ được chạy khi click */}
        <button onClick={this.handleClick2}>Click 2</button>
        {/* Trường hợp 3: Hàm sẽ được chạy luôn khi component render */}
        <button onClick={this.handleClick3()}>Click 3</button>
        {/* Trường hợp 4: Hàm sẽ được chạy khi click nhưng nếu có sử dụng từ khóa this trong hàm cần định nghĩa từ khóa this*/}
        <button onClick={this.handleClick4}>Click 4</button>
        {/* Trường hợp 5: Truyền tham số cho hàm */}
        <button onClick={() => this.handleClick5("Hello World")}>
          Click 5
        </button>
        {/* Lưu ý cách số 2 và số 5 */}
      </div>
    );
  }
}
