import React, { Component } from "react";
import ChildrenComp from "./ChildrenComp";

export default class ParentComp extends Component {
  // Truyền dữ liệu từ ParentComp => ChildrenComp
  // Bước 1: Gọi component cần truyền dữ liệu component con
  // Bước 2: Truyền dữ liệu xuống component con
  //   => Dữ liệu được truyền xuống sẽ có dạng là cặp key={value}
  render() {
    // Truyền thông qua biến
    const greeting = "Welcome To RA !!!";
    const people = {
      name: "Dương",
      age: 30,
    };

    return (
      <div>
        <ChildrenComp
          greetingKey={greeting}
          number={12}
          people={people}
          totalParent={this.props.total}
        />
      </div>
    );
  }
}
