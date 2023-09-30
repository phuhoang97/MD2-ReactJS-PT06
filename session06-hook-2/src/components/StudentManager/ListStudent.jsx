import React from "react";
import Student from "./Student";

// R-3: Nhập dữ liệu từ cha => destructoring
// U-5: Nhập hàm và gửi xuống cho <Student />
function ListStudent({ students, handleEditStudent }) {
  //   console.log(props.students); // trả về 1 đối tượng
  return (
    <div className='card-body'>
      <h3 className='card-title'>Danh sách sinh viên</h3>
      <div className='table-responsive pt-3'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>#</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Tuổi</th>
              <th>Giới tính</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {/* R-4: map ra các phần từ trong students => Truyền dữ liệu xuống cho Students*/}
            {students.map((element, index) => (
              <Student
                key={index}
                inforStudent={element}
                index={index}
                handleEditStudent={handleEditStudent}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListStudent;
