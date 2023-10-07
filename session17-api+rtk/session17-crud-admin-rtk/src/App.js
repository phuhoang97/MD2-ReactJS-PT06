import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CarList from "./components/CarList";
import CarForm from "./components/CarForm";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/admin/cars' element={<CarList />}></Route>
        <Route path='/admin/cars/add' element={<CarForm />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
