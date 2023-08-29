import React, { Component } from "react";

export default class DemoState extends Component {
  // Bước 1: Khởi tạo lớp cha => constructor()
  constructor() {
    // Bước 2: Gọi lớp cha => super()
    super();
    // Bước 3: Khai báo state
    this.state = {
      student: "Dương",
      question: "Có làm bài tập hay không?",
      answer: "Cóooo !!!",
      toggle: false,
    };
  }

  // Sử dụng setState => cập nhật lại giá trị state ban đầu
  // Lưu ý khi đặt tên:
  //   + các hàm xử lý 1 việc gì đó: Đặt handle (Xử lý) trước hàm và viết theo kiểu camelCase
  //   + các sự kiện thường có tiền đó phía trước là on => onClick, onChange, onSubmit
  handleChangeState = () => {
    this.setState({ answer: "Khôngggg" });
  };

  handleToggleDisplay = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div>
        <h1>Demo State</h1>
        <p>
          {this.state.student} - {this.state.question}
        </p>
        <p>Answer: {this.state.answer}</p>
        <button onClick={this.handleChangeState}>Click Me !!!</button>

        <h2>setState liên tục</h2>
        {/* 
        toán tử 3 ngôi là cú pháp viết tắt của if else

        if(this.state.toggle) {
            //logic 1
        } else {
            //logic 2
        }

        this.state.toggle ? logic 1 : logic 2
        */}

        {this.state.toggle ? (
          <div>
            <h4>Chúc các bạn học tập tốt !!!</h4>
            {/* Khi sử dụng sự kiện để gọi hàm
            + Trong class component cần có từ khóa this
            + Hàm nameFunction() => sẽ được viết nameFunction (Không có dấu ())
            */}
            <button onClick={this.handleToggleDisplay}>Click me !!!</button>
          </div>
        ) : (
          <div>
            <h4>Về nhà đọc lại bài và làm bài tập đầy đủ</h4>
            <button onClick={this.handleToggleDisplay}>Click me !!!</button>
          </div>
        )}
      </div>
    );
  }
}
