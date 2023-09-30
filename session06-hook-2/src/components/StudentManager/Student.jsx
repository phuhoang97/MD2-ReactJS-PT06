import React from "react";

// R-5: Nhập props từ ListStudent
function Student({ inforStudent, index, handleEditStudent }) {
  // U-2: Xây dựng hàm để set lại giá trị cho hàm handleEditStudent
  const handleEdit = (student) => {
    handleEditStudent(student, true, "Update");
  };
  return (
    <tr key={inforStudent.studentId}>
      <td>{index + 1}</td>
      <td>{inforStudent.studentId}</td>
      <td>{inforStudent.studentName}</td>
      <td>{inforStudent.studentAge}</td>
      <td>{inforStudent.gender}</td>
      <td>
        <div className='template-demo'>
          <button type='button' className='btn btn-danger btn-icon-text'>
            Xem
          </button>
          {/* U-1: Khi click vào sửa sẽ gửi đối tượng đấy lên cho <ParentComp /> */}
          <button
            type='button'
            className='btn btn-warning btn-icon-text'
            onClick={() => handleEdit(inforStudent)}
          >
            Sửa
          </button>
          <button type='button' className='btn btn-success btn-icon-text'>
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Student;
