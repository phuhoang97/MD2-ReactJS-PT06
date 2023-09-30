import React from "react";
import { useSearchParams } from "react-router-dom";

function Course() {
  const [searchParam, setSearchParam] = useSearchParams();
  // useSearchParams là 1 hook được cung cấp bởi react-router-dom
  // dùng để thay đổi query string trên url và có thể lấy được sự thay đổi bằng searchParam.get("key")
  return (
    <div>
      <h1>Demo useSearchParam</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ReactJS</td>
            <td>1200</td>
            <td>
              <button
                onClick={() =>
                  setSearchParam({ courseName: "ReactJS", price: "1200" })
                }
              >
                Detail
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Java</td>
            <td>1400</td>
            <td>
              <button
                onClick={() =>
                  setSearchParam({ courseName: "Java", price: "1400" })
                }
              >
                Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Lấy sự thay đổi dựa trên query */}
      <h3>Chi tiết khóa học</h3>
      <p>
        Khóa học có tên là: {searchParam.get("courseName")} - Giá tiền:
        {searchParam.get("price")}
      </p>
    </div>
  );
}

export default Course;
