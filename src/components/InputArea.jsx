import React from "react";

const InputArea = ({ inputTodo, onChangeTodo, addTodo }) => {
  return (
    <div>
      <div className="input-area">
        <input
          type="text"
          placeholder="TODOを入力"
          value={inputTodo}
          onChange={onChangeTodo}
        />
        <button onClick={addTodo}>追加</button>
      </div>
    </div>
  );
};

export default InputArea;
