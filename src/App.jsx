import React, { useState } from "react";
import "./style.css";

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
          <div className="input-area">
            <input
              type="text"
              placeholder="TODOを入力"
              value={inputTodo}
              onChange={onChangeTodo}
            />
            <button onClick={addTodo}>追加</button>
          </div>
        )}

        <div className="todo-list-area">
          <ul>
            {todos.map((everyTodo, index) => {
              return (
                <>
                  <div key={everyTodo} className="every-list">
                    <p>{index + 1}. </p>
                    <li className="list">{everyTodo}</li>
                    <select name="progress" id={index + 1}>
                      <option value="incomplete">未完了</option>
                      <option value="doing">進行中</option>
                      <option value="complete">完了</option>
                    </select>
                    <input type="text" placeholder="詳細" />
                    <button disabled={editBool} onClick={() => editText(index)}>
                      編集
                    </button>
                    <button
                      disabled={editBool}
                      onClick={() => deleteAction(index)}
                    >
                      削除
                    </button>
                  </div>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
