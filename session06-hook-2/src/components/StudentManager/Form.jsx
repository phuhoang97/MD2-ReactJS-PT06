import React, { useEffect, useState } from "react";

// C-7: Nhận hàm handleSubmitAdd
// U-7: Nhận selectStudent => obj student để hiển thị trong các ô input
function Form({ handleSubmitAdd, selectStudent, actionName, handleUpdate }) {
  // C-1: Tạo state chứa các đối tượng sinh viên
  const [inputForm, setInputForm] = useState({
    studentId: "",
    studentName: "",
    studentAge: 0,
    gender: "Nam",
    birthDay: "",
    birthPlace: "",
    address: "",
  });

  // C-2: Sử dụng dectructoring phân rã state
  const {
    studentId,
    studentName,
    studentAge,
    gender,
    birthDay,
    birthPlace,
    address,
  } = inputForm;

  // C-3: trong các ô input thêm các trường name, value, onChange => để lấy các giá trị trong các ô input

  // C-4: Viết sự kiện cho hàm handleChangeInput => lấy giá trị ng dùng nhập vào
  const handleChangeInput = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  // console.log(inputForm);

  // Dữ liệu inputForm => submit => Parent (students)
  // => ở Parent cần gửi hàm xuống cho con để set các giá trị vào trong mảng ban đầu

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmitAdd(inputForm, false);
  };

  // U-8: Hiện thị dữ liệu vào trong các ô input
  useEffect(() => {
    // Callback sẽ được gọi mỗi khi component mount
    setInputForm(selectStudent);
  }, [selectStudent]);

  // U-9: Khi update dữ liệu sẽ cập nhật lại data
  const handleUpdateForm = () => {
    handleUpdate(inputForm, false);
  };

  return (
    <div className='col-5 grid-margin'>
      <div className='card'>
        <div className='card-body'>
          <h3 className='card-title'>Thông tin sinh viên</h3>
          <form
            className='form-sample'
            onSubmit={
              actionName === "Add" ? handleSubmitForm : handleUpdateForm
            }
          >
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Mã sinh viên</label>
              <div className='col-sm-9'>
                {/* Nếu không sử dụng dectructoring =>  value={inputform.studentId} */}
                <input
                  type='text'
                  className='form-control'
                  name='studentId'
                  value={studentId}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Tên sinh viên</label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='form-control'
                  name='studentName'
                  value={studentName}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Tuổi</label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='form-control'
                  name='studentAge'
                  value={studentAge}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Giới tính</label>
              <div className='col-sm-9'>
                <select
                  className='form-control'
                  name='gender'
                  value={gender}
                  onChange={handleChangeInput}
                >
                  <option value={"Nam"}>Nam</option>
                  <option value={"Nữ"}>Nữ</option>
                  <option value={"Khác"}>Khác</option>
                </select>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Ngày sinh</label>
              <div className='col-sm-9'>
                <input
                  className='form-control'
                  placeholder='dd/mm/yyyy'
                  name='birthDay'
                  value={birthDay}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Nơi sinh</label>
              <div className='col-sm-9'>
                <select
                  className='form-control'
                  name='birthPlace'
                  value={birthPlace}
                  onChange={handleChangeInput}
                >
                  <option value={"HN"}>Hà Nội</option>
                  <option value={"HCM"}>TP. Hồ Chí Minh</option>
                  <option value={"Dn"}>Đà Nẵng</option>
                  <option value={"QN"}>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Địa chỉ</label>
              <div className='col-sm-9'>
                <textarea
                  className='form-control'
                  name='address'
                  value={address}
                  onChange={handleChangeInput}
                />
              </div>
            </div>

            <button type='submit' className='btn btn-primary me-2'>
              {actionName === "Add" ? "Submit" : "Update"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
