import React from 'react'

const TodoListArea = (props) => {
    const {todos, editBool, editText, deleteAction} = props
  return (
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
  )
}

export default TodoListArea