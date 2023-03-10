import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoCard } from "./StyledComponents";
import { Button } from './Buttons';
import { Link } from 'react-router-dom';
import { typeChangeDone, typeDeleteTodo } from '../modules/todoListModules';

function TodoWorks({ isDone }) {
  //state = store에 있는 state 전체
  const todo = useSelector((state) => state.todoLIstHandler);
  console.log('초기값',todo);

  return (
    <>
      {/*
        todo
        .filter((item) => item.isDone === isDone)
        .map((item) => <TodoCardList key={item.id} item={item} />)
      */
        // todo.map((item) => item.isDone === isDone ? <TodoCardList key={item.id} item={item} />:null)
        todo.map((item) => item.isDone === isDone && <TodoCardList key={item.id} item={item} />)
      }
    </>
  );
}

function TodoCardList({item}) {
  const dispatch = useDispatch();
  const [todoList, setTodoList] = useState([]);
  
  const todoState = useSelector((state) => {
    return state.todoLIstHandler;
  });

  const changeDone = () => {
    // dispatch(typeChangeDone(item.id, item.isDone));
    console.log(dispatch(typeChangeDone(item.id, item.isDone)));
    setTodoList([...todoState]);
  }

  const deleteTodo = () => {
    dispatch(typeDeleteTodo(item.id));
    setTodoList([...todoState]);
  }

  return (
    <TodoCard>
      <div>
        <h4>{item.title}</h4>
        <label>{item.content}</label>
        <Link
          to={`/todoworks/${item.id}`}
          style={{
            textDecoration: "none",
            fontSize: "12px",
          }}
        >
          <p>상세보기</p>
        </Link>
      </div>
      <div>
        <Button
          width={"50px"}
          height={"30px"}
          bgc= {item.isDone}
          color={"white"}
          onClick={changeDone}
        >
          완료
        </Button>
        <Button
          width={"50px"}
          height={"30px"}
          bgc={"red"}
          color={"white"}
          onClick={deleteTodo}
        >
          삭제
        </Button>
      </div>
    </TodoCard>
  )
}

export default TodoWorks;
