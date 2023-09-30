import React, { useEffect, useState } from "react";
import LayoutNavbar from "../layout/LayoutNavbar";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

function HomePage() {
  const [data, setData] = useState([]);

  // State search input
  const [searchInput, setSearchInput] = useState("");

  // State sort
  const [sortType, setSortType] = useState("asc");
  const [sortTypeName, setSortTypeName] = useState("");

  const handleSort = (sortName) => {
    setSortTypeName(sortName);
    setSortType(sortType === "asc" ? "desc" : "asc");
  };

  // Phân trang
  // Trang hiện tại
  const [curPage, setCurPage] = useState(1);
  // Số lượng hiển thị trong 1 trang
  const [limitPerPage, setLimitPerPage] = useState(10);
  // Tổng số trang
  const [totalPage, setTotalPage] = useState(1);

  const loadUser = async () => {
    let url = `http://localhost:8000/users?_page=${curPage}&_limit=${limitPerPage}`;
    if (searchInput) {
      url = `http://localhost:8000/users?q=${searchInput}&_order=desc&_page=${curPage}&_limit=${limitPerPage}`;
    } else if (sortTypeName) {
      if (sortType === "desc") {
        url = `http://localhost:8000/users?_sort=${sortTypeName}&_order=desc&_page=${curPage}&_limit=${limitPerPage}`;
      } else {
        url = `http://localhost:8000/users?_sort=${sortTypeName}&_order=asc&_page=${curPage}&_limit=${limitPerPage}`;
      }
    }

    let result = await axios.get(url);
    const countRes = result.headers["x-total-count"]; // 20
    const totalRes = Math.ceil(countRes / limitPerPage); // 20 / 10
    setTotalPage(totalRes);
    /* trong fetch: res có data || trong axios: res.data mới có data xem lại ví dụ lúc gọi api*/
    setData(result.data);
  };

  let paginationItem = [];
  for (let i = 1; i <= totalPage; i++) {
    paginationItem.push(
      <Pagination.Item
        key={i}
        onClick={() => setCurPage(i)}
        active={i === curPage}
      >
        {i}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    loadUser();
  }, [searchInput, sortTypeName, sortType, curPage]);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/users/${id}`);
    loadUser();
  };

  return (
    <div>
      <LayoutNavbar />

      <h3 style={{ margin: "20px", textAlign: "center" }}>Home Page</h3>

      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "10px auto",
          justifyContent: "space-around",
        }}
      >
        <Link to={"/add-user"}>
          <button type='button' class='btn btn-outline-success'>
            Add User
          </button>
        </Link>

        <form className='d-flex' role='search'>
          <input
            className='form-control me-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className='btn btn-outline-success' type='submit'>
            Search
          </button>
        </form>
      </div>

      <table
        className='table table-striped table-hover text-center'
        style={{ width: "80%", margin: "20px auto" }}
      >
        <thead className='table-dark'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Email</th>
            <th scope='col'>
              Age
              <i
                className='fa-solid fa-sort'
                onClick={() => handleSort("age")}
              ></i>
            </th>
            <th scope='col'>Address</th>
            <th scope='col' colSpan={3}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={element.id}>
              <td>{index + 1}</td>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.phone}</td>
              <td>{element.email}</td>
              <td>{element.age}</td>
              <td>{element.address}</td>
              <td>
                <button type='button' class='btn btn-outline-info'>
                  View
                </button>
              </td>
              <td>
                <Link to={`/edit-user/${element.id}`}>
                  <button type='button' class='btn btn-outline-warning'>
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  type='button'
                  class='btn btn-outline-danger'
                  onClick={() => handleDelete(element.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={10} align='center'>
              {/* Phân trang */}
              <Pagination style={{ display: "flex", justifyContent: "center" }}>
                <Pagination.Prev />
                {paginationItem}
                <Pagination.Next />
              </Pagination>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default HomePage;
