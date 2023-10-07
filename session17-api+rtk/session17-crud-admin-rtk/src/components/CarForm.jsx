import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postCars, putCars } from "../redux/carSlice";

function CarForm({ selectCar }) {
  const [inputForm, setInputForm] = useState({
    id: "",
    name: "",
    price: "",
  });

  const { name, price } = inputForm;

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (selectCar) {
      dispatch(putCars({ inputForm, id: selectCar.id }));
    } else {
      dispatch(postCars(inputForm));
    }
    setInputForm({ name: "", price: "" });
  };

  useEffect(() => {
    if (selectCar) {
      setInputForm({
        name: selectCar.name,
        price: selectCar.price,
      });
    }
  }, [selectCar]);
  return (
    <div>
      <h2>Cars Form</h2>
      <form onSubmit={handleSubmitForm}>
        <label>Name: </label>
        <input
          type='text'
          value={name}
          name='name'
          onChange={handleChangeInput}
        />
        <br />
        <label>Price: </label>
        <input
          type='text'
          value={price}
          name='price'
          onChange={handleChangeInput}
        />
        <br />
        <button type='submit'>{selectCar ? "Update Car" : "Add Car"}</button>
      </form>
    </div>
  );
}

export default CarForm;
