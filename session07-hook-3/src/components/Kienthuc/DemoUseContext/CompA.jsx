import React, { createContext, useState } from "react";
import CompB from "./CompB";
import "./CompA.css";

// Bước 1: Tạo ngữ cảnh

export const themeContext = createContext();

function CompA() {
  // Truyền props Từ A => B => C
  // useContext là 1 hook được cung cấp để chia sẻ dữ liệu trong cây DOM
  //   => Thay vì truyền props có thể sử dụng useContext

  // Trường hợp 1: Truyền Props
  //   const [theme, setTheme] = useState("light");

  //   const handleChangeTheme = () => {
  //     setTheme(theme === "light" ? "dark" : "light");
  //   };

  // Trường hợp 2: Sử dụng useContext => chia sẻ dữ liệu
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  //   console.log(theme);
  return (
    <div>
      <h1>Demo useContext</h1>
      {/* Trường hợp 1 */}
      {/* <CompB theme={theme} />
      <button onClick={handleChangeTheme}>Click</button> */}

      {/* Trường hợp 2 */}
      <themeContext.Provider value={theme}>
        <CompB />
      </themeContext.Provider>
      <button onClick={handleChangeTheme}>Click</button>
    </div>
  );
}

export default CompA;
