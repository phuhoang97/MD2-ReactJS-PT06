import "./App.css";
// import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";

function App() {
  // Phân chia component để tái sử dụng nhiều lần
  // Phân chia component dựa vào chức năng và tính năng
  return (
    <div>
      <HomePage />
      {/* <AboutPage /> */}
    </div>
  );
}

export default App;
