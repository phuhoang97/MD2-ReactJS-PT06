import React from "react";
import axios from "axios";

function DemoAxios() {
  // Axios là 1 thư viện được cung cấp bởi javascript. Tương tư như fetch giúp
  // người dùng gửi các yêu cầu http lên server

  const url = "http://localhost:8000/users";
  // Get Axios
  const handleGetAxios = () => {
    axios
      .get(url)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // Post Axios
  const person = {
    name: "Linh",
    age: 26,
    address: "HN",
    phone: "098131221",
  };

  const handlePostAxios = () => {
    axios
      .post(url, person)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // Put Axios
  const updatePerson = {
    name: "Thành",
    age: 30,
    address: "HN",
    phone: "098112311",
  };
  const handlePutAxios = () => {
    // http://localhost:8000/users/7
    axios
      .put(url + "/7", updatePerson)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // Patch Axios
  const patchPerson = {
    name: "Hiệp",
    age: 32,
    address: "HN",
    phone: "098145671",
  };
  const handlePatchAxios = () => {
    axios
      .patch(url + "/6", patchPerson)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // Put và Patch
  const handleDeleteAxios = () => {
    axios
      .delete(url + "/3")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // ajax => fetch => axios

  return (
    <div>
      <h1>Demo Axios</h1>
      <button onClick={handleGetAxios}>Get Axios</button>
      <button onClick={handlePostAxios}>Post Axios</button>
      <button onClick={handlePutAxios}>Put Axios</button>
      <button onClick={handlePatchAxios}>Patch Axios</button>
      <button onClick={handleDeleteAxios}>Delete Axios</button>
    </div>
  );
}

export default DemoAxios;
