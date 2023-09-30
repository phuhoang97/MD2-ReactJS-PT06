import "./App.css";
// import IndexColor from "./components/LiftingStateUp/IndexColor";
import ParentComp from "./components/StudentManager/ParentComp";

function App() {
  return (
    <div className='App'>
      <ParentComp />

      {/* Lifting State Up */}
      {/* <IndexColor /> */}
    </div>
  );
}

export default App;
