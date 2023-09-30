import React, { useEffect, useState } from "react";

function DemoFetchAPI() {
  const [dataUser, setDataUser] = useState([]);
  const [number, setNumber] = useState(10);
  // Get Fetch API
  const handleGetFetch = () => {
    fetch("http://localhost:8000/users") // là 1 promise (Lời hứa)
      // - Thành công thì trả qua .then
      // - Nếu lỗi trả về qua .catch
      .then((res) => res.json()) // Ép kiểu dữ liệu về dạng json
      .then((data) => setDataUser(data)) // Để lấy dữ liệu
      .catch((err) => console.log(err)); // Để nhận lỗi trả về
  };

  //   useEffect(() => {
  //     fetch("http://localhost:8000/users") // là 1 promise (Lời hứa)
  //       // - Thành công thì trả qua .then
  //       // - Nếu lỗi trả về qua .catch
  //       .then((res) => res.json()) // Ép kiểu dữ liệu về dạng json
  //       .then((data) => setDataUser(data)) // Để lấy dữ liệu
  //       .catch((err) => console.log(err)); // Để nhận lỗi trả về
  //   }, [number]);

  // console.log(dataUser);

  // Post Fetch API
  const person = {
    id: 3,
    name: "Tiến",
    age: 23,
    address: "QN",
    phone: "0981315521",
  };
  const handlePostFetch = () => {
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(person),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  // Put Fetch API
  const updatePerson = {
    name: "Thành",
    age: 30,
    // address: "HN",
    phone: "098112311",
  };
  const handlePutFetch = () => {
    fetch("http://localhost:8000/users/5", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatePerson),
    }).then(() => handleGetFetch());
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
  };

  // Patch Fetch API
  const patchPerson = {
    name: "Dũng",
    age: 32,
    // address: "HN",
    phone: "098178911",
  };
  const handlePatchFetch = () => {
    fetch("http://localhost:8000/users/5", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(patchPerson),
    }).then(() => handleGetFetch());
  };

  // Khi dùng Put sẽ tạo ra bản ghi mới ghi đè lại bản ghi cũ
  // Khi dùng Patch không tạo ra bản ghi mới chỉ cập nhật lại các trường được gửi lên

  const handleDeleteFetch = () => {
    fetch("http://localhost:8000/users/3", {
      method: "DELETE",
    });
  };

  return (
    <div>
      <h1>Demo Fetch API</h1>
      {/* Get API */}
      <button onClick={handleGetFetch}>Get Fetch API</button>
      {/* Post API */}
      <button onClick={handlePostFetch}>Post Fetch API</button>
      {/* Put API */}
      <button onClick={handlePutFetch}>Put Fetch API</button>
      {/* Patch API */}
      <button onClick={handlePatchFetch}>Patch Fetch API</button>
      {/* Delte API */}
      <button onClick={handleDeleteFetch}>Delete Fetch API</button>

      {/* Hiển thị dữ liệu */}
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {dataUser.map((element, index) => (
            <tr key={element.id}>
              <td>{index + 1}</td>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.age}</td>
              <td>{element.address}</td>
              <td>{element.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DemoFetchAPI;
