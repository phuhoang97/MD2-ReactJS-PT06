import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

function ValidateFormikYup() {
  // Bước 1: cài đặt formik || yup || toast
  // npm i formik yup react-toastify
  // Bước 2: Sử dụng formik => sẽ chịu trách nhiệm xử lý trạng thái của form
  // => import formik
  // Bước 3: Khai báo formik

  // Tìm hiểu thêm useForm + Yup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
      confirmRules: "",
    },
    // Sử dụng yup để đặt điều kiện cho các ô input trong form
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Your name must be at least 5 characters")
        .max(25, "Your name must be under least 25 characters")
        .required("You must fill in this section"),
      email: Yup.string()
        .email("Invalid Email")
        .required("You must fill in this section"),
      address: Yup.string().required("You must fill in this section"),
      password: Yup.string()
        .min(8, "Your password must be at least 8 characters")
        .required("You must fill in this section"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password does not match")
        .required("You must fill in this section"),
      confirmRules: Yup.boolean().oneOf(
        [true],
        "You need to accept the terms and conditions"
      ),
    }),

    onSubmit: (values) => {
      console.log(values);
      toast.success("Register successful !");
    },
  });
  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && formik.touched.name && (
          <p style={{ color: "red" }}>{formik.errors.name}</p>
        )}
        <br />
        <label>Email: </label>
        <input
          type='text'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && formik.touched.email && (
          <p style={{ color: "red" }}>{formik.errors.email}</p>
        )}
        <br />
        <label>Address: </label>
        <input
          type='text'
          name='address'
          value={formik.values.address}
          onChange={formik.handleChange}
        />
        {formik.errors.address && formik.touched.address && (
          <p style={{ color: "red" }}>{formik.errors.address}</p>
        )}
        <br />
        <label>Password: </label>
        <input
          type='text'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && formik.touched.password && (
          <p style={{ color: "red" }}>{formik.errors.password}</p>
        )}
        <br />
        <label>ConfirmPassword: </label>
        <input
          type='text'
          name='confirmPassword'
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <p style={{ color: "red" }}>{formik.errors.confirmPassword}</p>
        )}
        <br />

        <label>Bạn có đồng ý với điều khoản: </label>
        <input
          type='checkbox'
          name='confirmRules'
          value={formik.values.confirmRules}
          onChange={formik.handleChange}
        />
        {formik.errors.confirmRules && formik.touched.confirmRules && (
          <p style={{ color: "red" }}>{formik.errors.confirmRules}</p>
        )}
        <br />

        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default ValidateFormikYup;
