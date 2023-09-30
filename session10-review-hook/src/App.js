import "./App.css";
import TodoList from "./components/CRUDTodoList/TodoList";
import ReviewProps from "./components/ReviewHook/ReviewProps";
import ReviewUseState from "./components/ReviewHook/ReviewUseState";

function App() {
  // Từ App.js => truyền props => RevewProps
  // number = 10 => key={value}

  const number = 10;
  const arr = [1, 2, 3];
  const typeNull = null;

  return (
    <div className='App'>
      {/* <ReviewProps
        numberProp={number}
        arrProps={arr}
        typeNullProps={typeNull}
      />
      <ReviewUseState /> */}
      <TodoList />
    </div>
  );
}

export default App;
