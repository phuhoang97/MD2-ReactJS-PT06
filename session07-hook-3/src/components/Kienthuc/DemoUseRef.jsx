import React, { useRef, useState } from "react";

// let timer;

function DemoUseRef() {
  // useRef là 1 hook được cung cấp bởi react. Được dùng để lưu 1 giá trị ra ngoài phạm vi của function
  const [time, setTime] = useState(60);
  console.log(useState);

  let timer = useRef();
  //   console.log(timer.current);

  const handleStart = () => {
    timer.current = setInterval(() => setTime((prev) => prev - 1), 1000);
    console.log("Start", timer);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    console.log("Stop", timer);
  };

  return (
    <div>
      <h1>Demo useRef</h1>
      <p>{time}</p>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}

export default DemoUseRef;
