import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import HomePage from "./components/pages/HomePage";
import NotFound from "./components/pages/NotFound";
import AboutProduct from "./components/pages/AboutProduct";
import AboutUser from "./components/pages/AboutUser";
import AboutIndex from "./components/pages/AboutIndex";
import DemoNavigate from "./components/navigateRouter/DemoNavigate";
import Course from "./components/DynamicRouter/Course";
import CourseId from "./components/DynamicRouter/CourseId";
import CourseIdType from "./components/DynamicRouter/CourseIdType";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import Login from "./components/PrivateRouter/Login";
import Admin from "./components/PrivateRouter/Admin";

function App() {
  const isActiveStyle = ({ isActive }) => ({
    color: isActive ? "#f3abab" : "#867575",
    backgroundColor: isActive ? "#867575" : "#f3abab",
  });
  return (
    <div>
      {/* Thẻ Link */}

      {/* Trong thẻ link nhận 1 tham số to => to cần phải map với path được khai báo
            Thẻ Link tương tự như thẻ a trong html
            */}
      {/* <div>
        <ul>
        <li>
            <Link to={"/"}>HomePage</Link>
          </li>
          <li>
            <Link to={"/about"}>
              AboutPage
              <ul>
                <li>
                  <Link to={"/about/about-user"}>About User</Link>
                </li>
                <li>
                  <Link to={"/about/about-product"}>About Prod</Link>
                </li>
              </ul>
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>ContactPage</Link>
          </li>
        </ul>
      </div> */}

      {/* Sử dụng với NavLink */}
      <div>
        <ul>
          <li>
            <NavLink to={"/"} style={isActiveStyle}>
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} style={isActiveStyle}>
              AboutPage
              <ul>
                <li>
                  <NavLink to={"/about/about-user"} style={isActiveStyle}>
                    About User
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/about/about-product"} style={isActiveStyle}>
                    About Prod
                  </NavLink>
                </li>
              </ul>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} style={isActiveStyle}>
              ContactPage
            </NavLink>
            {/* <a href='/contact'>ContactPage</a> */}
          </li>
        </ul>
      </div>

      <DemoNavigate />

      {/* Cấu hình các Routes Route */}
      <Routes>
        {/* Nhận vào 2 tham số: 
        1. path : đường dẫn trên url
        2. element: component để hiển thị giao diện */}
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}>
          {/* Index Router */}
          <Route index element={<AboutIndex />}></Route>
          {/* Nested Route */}
          <Route path='about-product' element={<AboutProduct />}></Route>
          <Route path='about-user' element={<AboutUser />}></Route>
        </Route>
        <Route path='/contact' element={<ContactPage />}></Route>

        {/* Dynamic Router */}
        <Route path='/course' element={<Course />}></Route>
        <Route path='/course/:id' element={<CourseId />}></Route>
        <Route path='/course/:id/:type' element={<CourseIdType />}></Route>

        {/* Protected Router */}
        <Route element={<PrivateRouter />}>
          <Route path='/admin' element={<Admin />}></Route>
        </Route>

        <Route path='/login' element={<Login />}></Route>

        {/* Nhận các router không tồn tại */}
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
