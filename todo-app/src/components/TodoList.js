import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
 
const TodoList = ({todos}) => {
  return (
    <div className="TodoList">{
        // todos.map ( (todo) => (  // 여기서는 json /값인가? 객체인가? -> 객체는 .찍고 사용해야 함. 객체"리터럴/함수/배열" 구분해야 함. 
        //   <TodoListItem />

        // ))

        todos.map ( (todo) => (  
        <TodoListItem todo = {todo} key={todo.id} /> //실제 출력 X -> 출력은 item.

      ))
    }
    </div>
  );
};
 
export default TodoList;