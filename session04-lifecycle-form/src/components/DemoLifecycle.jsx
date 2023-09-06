// rcc
import React, { Component } from "react";

export default class DemoLifecycle extends Component {
  // Từ phiên bản 18.x => không sử dụng lifecycle
  // vì chuyển từ class component => function component.
  // Các thuộc tính trong lifecycle cũng được thay thế bằng useEffect trong hook

  /*
   Lifecycle là vòng đời của 1 component
     1. Khởi tạo:
        + Khai báo state, props, ...
        + Sẽ được chạy đầu tiên, trước giai đoạn mounting
        Ví dụ: In ra ngoài màn hình state = 10

        => Khai báo constructor => super => state

     2. Mounting:
        + Sẽ được chạy ngày sau giai đoạn khởi tạo

        => componentWillMount => render => componentDidMount
     3. Updating:

       => Từ giai đoạn render => componentDidUpdate
     4. UnMounting
        => componentWillUnmount
  
  */

  //   UNSAFE_componentWillMount() {
  //     console.log("componentWillMount");
  //   }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("Render");
    return <div>Hello World</div>;
  }
}
