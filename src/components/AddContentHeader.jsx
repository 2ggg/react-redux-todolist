import React, { useState } from "react";
import { Button } from "./Buttons";
import { StyledAddTodoHeader } from "../components/StyledComponents";
import { useDispatch } from "react-redux";
import { typeAddTodo } from "../modules/todoListModules";

function AddContentHeader() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  // const titleRef = useRef("");
  // const contentRef = useRef("");

  const addInputTitle = (event) => {
    setTitle(event.target.value);
    // titleRef.current = event.target.value;
  };

  const addInputContent = (event) => {
    setContent(event.target.value);
    // contentRef.current = event.target.value;
  };

  const addListHandler = () => {
    dispatch(typeAddTodo(title, content));
    setTitle("");
    setContent("");
  };

  return (
    <StyledAddTodoHeader>
      <div>
          <div>
          <div>
            <label htmlFor="title">제목</label>
            <input id="title" value={title} onChange={addInputTitle} />
          </div>
          <div>
            <label htmlFor="content">내용</label>
            <input id="content" value={content} onChange={addInputContent} />
          </div>
        </div>

        <Button
          width={"60px"}
          height={"30px"}
          bgc={"blue"}
          color={"white"}
          onClick={addListHandler}
        >
          추가
        </Button>
      </div>
    </StyledAddTodoHeader>
  );
}

export default AddContentHeader;
