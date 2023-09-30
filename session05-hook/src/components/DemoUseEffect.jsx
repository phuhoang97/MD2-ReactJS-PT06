import React, { useEffect, useState } from "react";

function DemoUseEffect() {
  const [number, setNumber] = useState(10);
  const [text, setText] = useState("Hello World");
  /* 
    + useEffect là 1 hook được cung cấp bởi react
    + useEffect được dùng để: callAPI, Listen DOM Event, Update DOM, CleanUP, ...
    + Cú pháp của useEffect:
    useEffect(callback, [])
    */

  // Trường hợp 1: useEffect không có deps
  // + Cú pháp: useEffect(() => {});
  /* + Tính chất:
        - Callback sẽ luôn được gọi mỗi khi component mount (render element)
        - Callback sẽ luôn được gọi mỗi khi component re-render
  */
  //   useEffect(() => {
  //     console.log("useEffect được gọi");
  //   });

  // Trường hợp 2: useEffect có deps
  // + Cú pháp: useEffect(() => {}, []);
  /* + Tính chất:
        - Callback sẽ luôn được gọi mỗi khi component mount (render element)
        - Callback sẽ chạy 1 lần khi component re-render
  */
  //   useEffect(() => {
  //     console.log("useEffect được gọi");
  //   }, []);

  // Trường hợp 3: useEffect có deps có cleanUp
  // + Cú pháp: useEffect(() => {}, [deps]);
  /* + Tính chất:
        - Callback sẽ luôn được gọi mỗi khi component mount (render element)
        - Callback sẽ chạy mỗi khi component re-render
  */
  useEffect(() => {
    console.log("useEffect được gọi");
  }, [number]);
  // mỗi khi number thay đổi thì sẽ gọi lại callback

  return (
    <div>
      <h1>Demo useEffect</h1>
      <p>{number}</p>
      <button onClick={() => setNumber(number - 1)}>Down</button>
      <button onClick={() => setNumber(number + 1)}>Up</button>

      <p>{text}</p>
      <button onClick={() => setText("Welcome ...")}>Change Text</button>
    </div>
  );
}

export default DemoUseEffect;
