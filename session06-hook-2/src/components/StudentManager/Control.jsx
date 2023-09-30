// rfce

import React from "react";

// T-4: Nhập props từ cha
function Control({ toggle, handleToggle }) {
  // console.log(toggle);
  // T-5: Viết hàm cập nhật lại toggle
  const handleAddToggle = () => {
    handleToggle(!toggle);
  };
  return (
    <div className='card-header'>
      <div className='row'>
        <div className='col-3'>
          <button
            type='button'
            className='btn btn-primary btn-icon-text'
            onClick={handleAddToggle}
          >
            Thêm mới sinh viên
          </button>
        </div>
        <div className='col-6'>
          <form className='search-form' action='#'>
            <i className='icon-search' />
            <input
              type='search'
              className='form-control'
              placeholder='Search Here'
              title='Search here'
            />
            <button className='btn btn-primary btn-icon-text'>Tìm kiếm</button>
          </form>
        </div>
        <div className='col-3 d-flex align-items-center'>
          <select className='form-control'>
            <option value=''>Sắp xếp</option>
            <option value=''>ABC def</option>
            <option value=''>ABC def</option>
            <option value=''>ABC def</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Control;
