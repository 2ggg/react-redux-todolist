import { todoListData } from "../shared/data";

const initialState = [...todoListData];
export const addTodo = "ADD_TODO";
export const deleteTodo = "DELETE_TODO";
export const changeDone = "CHANGE_DONE";

export const typeAddTodo = (title, content) => {
  //return 값들이 action으로 들어감
  return {
    type: addTodo,
    title,
    content,
  };
};

export const typeChangeDone = (id, isDone) => {
  //return 값들이 action으로 들어감
  return {
    type: changeDone,
    id,
    isDone,
  };
};

export const typeDeleteTodo = (id) => {
  //return 값들이 action으로 들어감
  return {
    type: deleteTodo,
    id,
  };
};

const todoLIstHandler = (state = initialState, action) => {
  switch (action.type) {
    case addTodo:
      state.push({
        id: state[state.length - 1].id + 1,
        title: action.title,
        content: action.content,
        isDone: false,
      });
      console.log("추가", state);
      return [...state];

    case changeDone:
      const index = state.findIndex((obj) => obj.id === action.id);
      state[index].isDone = !action.isDone;
      console.log("isdone", state[index].isDone, state);
      return [...state];

    case deleteTodo:
      state.splice(state.findIndex((obj) => obj.id === action.id), 1);
      console.log("삭제후", state);
      return [...state];

    default:
      return state;
  }
};

export default todoLIstHandler;
