import React from "react";
import { Link } from "react-router-dom";

function LayoutNavbar() {
  return (
    <div>
      {" "}
      <div>
        <ul>
          <li>
            {/* Trong thẻ link nhận 1 tham số to => to cần phải map với path được khai báo
      Thẻ Link tương tự như thẻ a trong html
      */}
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
      </div>
    </div>
  );
}

export default LayoutNavbar;
