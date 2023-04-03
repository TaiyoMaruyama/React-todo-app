import React, { useState } from "react";
import "./style.css";
import TodoListArea from "./components/TodoListArea";
import InputArea from "./components/InputArea";

const App = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState(["todo1つ目です", "todo2つ目です"]);
  const [editTodo, setEditTodo] = useState("");
  const [editIndex, setEditIndex] = useState(0);
  const [editBool, setEditBool] = useState(false);

  //入力値の感知
  const onChangeTodo = (event) => {
    setInputTodo(event.target.value);
  };

  //インプットの追加ボタンの関数
  const addTodo = () => {
    if (inputTodo === "") return;
    const newTodos = [...todos, inputTodo];
    setTodos(newTodos);
    setInputTodo("");
  };

  //削除ボタンの関数
  const deleteAction = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  //TODOの編集機能
  const editText = (index) => {
    const editTodo = todos[index];
    setEditIndex(index);
    setEditTodo(editTodo);
    setEditBool(true);
  };

  //入力値の感知
  const onChangeEditTodo = (event) => {
    setEditTodo(event.target.value);
  };

  //TODOの編集を保存する
  //filter map
  const editSaveButton = () => {
    const newTodos = [...todos];
    newTodos.splice(editIndex, 1);
    newTodos.splice(editIndex, 0, editTodo);
    setTodos(newTodos);
    setEditTodo("");
    setEditBool(false);
  };

  //TODO編集をキャンセルする
  const cancelEdit = () => {
    setEditTodo("");
    setEditBool(false);
  };

  return (
    <>
      <div className="main-page">
        {editBool ? (
          <div className="edit-area">
            <input
              type="text"
              value={editTodo}
              onChange={onChangeEditTodo}
              placeholder="編集内容が入ります"
            />
            <button disabled={!editBool} onClick={editSaveButton}>
              保存
            </button>
            <button disabled={!editBool} onClick={cancelEdit}>
              キャンセル
            </button>
          </div>
        ) : (
          <InputArea
            inputTodo={inputTodo}
            onChangeTodo={onChangeTodo}
            addTodo={addTodo}
          />
        )}
        <TodoListArea
          todos={todos}
          editBool={editBool}
          editText={editText}
          deleteAction={deleteAction}
        />
      </div>
    </>
  );
};

export default App;
