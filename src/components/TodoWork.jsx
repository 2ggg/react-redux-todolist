import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from './Buttons';
import { DetailTodoBox, DetailToeoWrap, StyledAddTodoHeader } from './StyledComponents';

function TodoWork() {
  const params = useParams();
  const navigate = useNavigate();
  const todo = useSelector((state) => {
    return state.todoLIstHandler;
  });
  const foundData = todo.find((item) => {
    return item.id === parseInt(params.id);
  })

  return (
    <DetailToeoWrap>
      <DetailTodoBox>
        <StyledAddTodoHeader className='border-radius'>
          <div>
            <label className='detail-ID'>ID : {foundData.id}</label>
            <Button
              width={"80px"}
              height={"30px"}
              color={"white"}
              onClick={() => navigate("/")}
            >
              이전으로
            </Button>
          </div>
        </StyledAddTodoHeader>
        <div>
          <h2>{foundData.title}</h2>
          <label>{foundData.content}</label>
        </div>
      </DetailTodoBox>
    </DetailToeoWrap>
  )
}

export default TodoWork