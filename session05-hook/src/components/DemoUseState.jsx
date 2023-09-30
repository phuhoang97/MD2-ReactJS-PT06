// Đổi rcc (Class) => rfce (Function)

import React, { useState } from "react";

function DemoUseState() {
  // Trong ReactJs có 2 loại component: Class component và Function Component
  // => Từ phiên bản 16.8 đã chuyển sang sử dụng function component

  /* Cú pháp khai báo state trong Function => useState

  const [nameState, setNameState] = useState(initialState);

  this.state = {number: 0}
  this.setState = setNameState

  Trong đó:
  + nameState: là tên state có giá trị khởi tạo ban đầu là initialState => nameState = initialState
  + setNameState: là hàm dùng để cập nhật lại giá trị cho nameState
  + initialState: Giá trị khởi tạo

  // Lưu ý: khi sử dụng useState cần phải import
  */

  // Các kiểu dữ liệu: kiểu dữ liệu nguyên thủy và kiểu dữ liệu tham chiếu

  // Number:
  const [number, setNumber] = useState(0);
  //   console.log(number); // 0
  //   console.log(setNumber); // hàm dùng để cập nhật lại state

  // String
  const [text, setText] = useState("Hello World !!!");

  const handleChangeText = () => {
    setText("Welcome To RA !!!");
  };

  // Boolean
  const [toggle, setToggle] = useState(true);

  const handleChangeToggle = () => {
    setToggle(!toggle);
  };

  // Array
  const [arrNumber, setArrNumber] = useState([1, 2, 3, 4]);

  const handleRandomNumber = () => {
    setArrNumber([...arrNumber, Math.floor(Math.random() * 10)]);
  };

  // Object
  const [objList, setObjList] = useState({
    objNumber: 10,
    objArrList: [3, 5, 7],
  });

  const handleRandomObj = () => {
    setObjList({
      ...objList,
      objArrList: [...objList.objArrList, Math.floor(Math.random() * 100)],
    });
  };

  // Array + Object
  const [data, setData] = useState([
    { id: 1, name: "Dương", age: 20, phone: "023454313" },
    { id: 2, name: "Linh", age: 22, phone: "02368313" },
    { id: 3, name: "Huy", age: 24, phone: "023446813" },
    { id: 4, name: "Phương", age: 26, phone: "023235413" },
  ]);
  return (
    <div>
      <h1>Demo useState</h1>
      {/* Kiểu dữ liệu number */}
      <div>
        <h3>Number</h3>
        {/* trong class component: this.state.number; để cập lại state this.setState({...}) */}
        <p>{number}</p>
        {/* Viết trước tiếp hàm setState */}
        <button onClick={() => setNumber(number - 1)}>Down</button>
        <button onClick={() => setNumber(number + 1)}>Up</button>
      </div>
      {/* Kiểu dữ liệu string */}
      <div>
        <h3>String</h3>
        <p>{text}</p>
        {/* Viết thông qua 1 hàm */}
        <button onClick={handleChangeText}>Change text</button>
      </div>
      {/* Kiểu dữ liệu boolean */}
      <div>
        <h3>Boolean</h3>
        {toggle ? (
          <div>
            <p>Chúc các bạn học tập tốt</p>
            <button onClick={handleChangeToggle}>Change</button>
          </div>
        ) : (
          <div>
            <p>Chăm chỉ làm bài tập điiii</p>
            <button onClick={handleChangeToggle}>Change</button>
          </div>
        )}
      </div>
      {/* Kiểu dữ liệu array */}
      <div>
        <h3>Array</h3>
        <p>{arrNumber.toString()}</p>
        <button onClick={handleRandomNumber}>Random</button>
      </div>
      {/* Kiểu dữ liệu object */}
      <div>
        <h3>Object</h3>
        <p>{objList.objNumber}</p>
        <button
          onClick={() =>
            setObjList({ ...objList, objNumber: objList.objNumber - 1 })
          }
        >
          Down
        </button>
        <button
          onClick={() =>
            setObjList({ ...objList, objNumber: objList.objNumber + 1 })
          }
        >
          Up
        </button>
        <p>{objList.objArrList}</p>
        <button onClick={handleRandomObj}>Random</button>
      </div>

      {/* Kiểu dữ liệu array + object */}
      {/* 
      Sau dấu => mà sử dụng {} => cần từ khóa return
      Sau dấu => mà không sử dụng {} => không cần từ khóa return
      */}
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={element.id}>
              {console.log(element)}
              <td>{index + 1}</td>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.age}</td>
              <td>{element.phone}</td>
              <td>
                <button>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DemoUseState;
