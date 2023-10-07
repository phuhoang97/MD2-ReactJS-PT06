import React, { useEffect, useState } from "react";
import SlideBar from "./SlideBar";
import { useDispatch, useSelector } from "react-redux";
import { deleteCars, fetchCars } from "../redux/carSlice";
import CarForm from "./CarForm";

function CarList() {
  const cars = useSelector((state) => state.cars.cars);
  // console.log(cars);
  const status = useSelector((state) => state.cars.status);
  // Edit
  const [selectCar, setSelectCar] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  if (status === "Loading") {
    return (
      <div
        style={{ fontSize: "50px", textAlign: "center", marginTop: "300px" }}
      >
        Loading ...
      </div>
    );
  }

  const handleEditForm = (car) => {
    // console.log(car);
    setSelectCar(car);
  };

  // console.log(selectCar);
  return (
    <div>
      <SlideBar />
      <h2 style={{ textAlign: "center" }}>Cars List</h2>
      <table
        border={1}
        align='center'
        width={"30%"}
        style={{ textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {cars.map((element, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.price}</td>
              <td>
                <button onClick={() => handleEditForm(element)}>Edit</button>
              </td>
              <td>
                <button onClick={() => dispatch(deleteCars(element.id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <span style={{ textAlign: "center" }}>
        <CarForm selectCar={selectCar} />
      </span>
    </div>
  );
}

export default CarList;
