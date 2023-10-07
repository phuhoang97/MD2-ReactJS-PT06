import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk("fetchCars", async () => {
  const response = await axios.get("http://localhost:8000/cars");
  return response.data;
});

export const postCars = createAsyncThunk("postCars", async (car) => {
  const response = await axios.post("http://localhost:8000/cars", car);
  return response.data;
});

export const deleteCars = createAsyncThunk("deleteCars", async (idCar) => {
  await axios.delete(`http://localhost:8000/cars/${idCar}`);
  return idCar;
});

export const putCars = createAsyncThunk("putCars", async (objCar) => {
  const response = await axios.put(
    `http://localhost:8000/cars/${objCar.id}`,
    objCar.inputForm
  );
  return response.data;
});

const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Để xử lý 1 api: pending || fulfiled || rejected
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.status = "Success";
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.error = "Error";
      });
    builder.addCase(postCars.fulfilled, (state, action) => {
      state.cars.push(action.payload);
    });
    builder.addCase(deleteCars.fulfilled, (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    });
    builder.addCase(putCars.fulfilled, (state, action) => {
      state.cars = state.cars.map((car) =>
        car.id === action.payload.id ? action.payload : car
      );
    });
  },
});

export default carSlice.reducer;
