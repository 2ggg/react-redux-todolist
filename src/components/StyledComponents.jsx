import styled from "styled-components";

export const StyledWrap = styled.div`
  width: 100vw;
  height: 1500px;
  background-color: #eeeeee;
`;

export const StyledContainer = styled.div`
  min-width: 800px;
  max-width: 1200px;
  background-color: #fff;
  margin: 0 auto;
`;

export const StyledAddTodoHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f8ff;
  padding: 10px 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 430px;
  }

  label {
    font-weight: 900;
    margin-right: 10px;
  }

  .detail-ID {
    font-weight: 500;
    font-size: 15px;
  }

  .detail-ID, button {
    margin: 0 20px;
  }
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 10px 0;
  align-items: center;

  h2 {
    font-size: 20px;
  }
`;

export const TodoCard = styled.div`
  max-width: 80%;
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid lightblue;
  border-radius: 10px;
  margin: 10px 0;
  padding: 20px;

  h4 {
    font-weight: 900;
    font-size: large;
    margin-bottom: 10px;
  }

  label {
    color: #3b3b3b;
    margin-bottom: 10px;
  }

  button {
    margin: 0 0 0 10px;
  }
`;

export const DetailToeoWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailTodoBox = styled.div`
  width: 400px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;

  h2 {
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 10px;
  }

  > div {
    padding: 20px;
  }
`;