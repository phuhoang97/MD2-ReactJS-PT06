// rfce

import React, { useState } from "react";
import Control from "./Control";
import ListStudent from "./ListStudent";
import Form from "./Form";

function ParentComp() {
  // CRUD => C-Create (Thêm mới) / R-Read (Đọc) / U-Update (Cập nhật) / D-Delete (Xóa)
  // R-1: Khai báo state lưu trữ thông tin sinh viên
  const [students, setStudent] = useState([
    {
      studentId: "SV001",
      studentName: "Nguyễn Văn A",
      studentAge: 20,
      gender: "Nam",
      birthDay: "12/02/2000",
      birthPlace: "HN",
      address: "HN",
    },
    {
      studentId: "SV002",
      studentName: "Nguyễn Văn B",
      studentAge: 21,
      gender: "Nam",
      birthDay: "14/08/1988",
      birthPlace: "HCM",
      address: "HCM",
    },
    {
      studentId: "SV003",
      studentName: "Nguyễn Thị C",
      studentAge: 19,
      gender: "Nữ",
      birthDay: "18/10/2004",
      birthPlace: "DN",
      address: "DN",
    },
  ]);

  // T-1: Khai báo state toggle
  const [toggle, setToggle] = useState(false);

  // T-2: Xây dựng hàm để setToggle
  const handleToggle = (pramTogge) => {
    setToggle(pramTogge);
  };

  // C-5: Xây dựng hàm để nhận đối tượng từ các ô input trong Form
  // hàm nhận 2 tham số:
  // newStudent: chính là student được gửi lên từ Form
  // toggle: dùng để set lại giá trị toggle khi submit xong
  const handleSubmitAdd = (newStudent, toggle) => {
    // console.log(newStudent);
    setStudent([...students, newStudent]);
    setToggle(toggle);
  };

  // U-3: Khai báo state để lưu trữ dữ liệu khi nhận data từ <Student />
  // Xây dựng hàm handleEditStudent để nhận các giá trị từ <Student />
  // Khai báo state dùng để xác định lúc nào là update lúc nào là add
  const [selectStudent, setSelectStudent] = useState({});
  const [actionName, setActionName] = useState("Add");
  const handleEditStudent = (student, toggleEdit, actionNameEdit) => {
    setSelectStudent(student);
    setToggle(toggleEdit);
    setActionName(actionNameEdit);
  };

  // U-10: Xây dựng hàm handleUpdate
  const handleUpdate = (objStudent, toggleUpdate) => {
    const updateData = students.map((element) =>
      element.studentId === objStudent.studentId ? objStudent : element
    );
    setStudent(updateData);
    setToggle(toggleUpdate);
  };

  // console.log(action);
  // console.log(toggle);
  return (
    <div className='row'>
      <div className='col-lg-7 grid-margin stretch-card'>
        <div className='card'>
          {/* START CONTROL */}
          {/* T-3: Truyền hàm handleToggle */}
          <Control toggle={toggle} handleToggle={handleToggle} />
          {/* END CONTROL */}
          {/* START LIST STUDENT */}
          {/* R-2: Truyền dữ liệu xuống cho ListStudent bằng props */}
          {/* U-4: Gửi hàm xuống cho <Student /> */}
          <ListStudent
            students={students}
            handleEditStudent={handleEditStudent}
          />
          {/* END LIST STUDENT */}
        </div>
      </div>
      {/* START FORM SINH VIEN */}
      {/* T-6: dựa vào toggle để bật tắt form */}
      {/* C-6: Truyền handleSubmitAdd xuống cho Form */}
      {/* U-6: Truyền selectStudent để hiển thị data trong các ô input và gửi actionName để đổi submit thành Update */}
      {toggle ? (
        <Form
          handleSubmitAdd={handleSubmitAdd}
          selectStudent={selectStudent}
          actionName={actionName}
          handleUpdate={handleUpdate}
        />
      ) : (
        ""
      )}

      {/* END FORM SINH VIÊN */}
    </div>
  );
}

export default ParentComp;
