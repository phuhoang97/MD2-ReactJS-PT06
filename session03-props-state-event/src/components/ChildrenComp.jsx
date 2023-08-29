import React, { Component } from "react";

export default class ChildrenComp extends Component {
  // Để nhận được dữ liệu từ component cha => this.props.key
  render() {
    // Sử dụng cú pháp destructuring
    const { greetingKey, number, people } = this.props;
    const { name, age } = this.props.people;
    // this.props => là 1 object
    return (
      <div>
        <h2>{this.props.greetingKey}</h2>
        <p>Number là: {this.props.number}</p>
        <p>
          Họ tên: {this.props.people.name} - Tuổi: {this.props.people.age}
        </p>

        <h3>
          {greetingKey} - {number} - {name} + {age}
        </h3>
        <h4>Total: {this.props.totalParent}</h4>
      </div>
    );
  }
}
