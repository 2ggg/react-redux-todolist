import AddContentHeader from '../components/AddContentHeader';
import * as StyledComponents from "../components/StyledComponents";
import TodoWorks from '../components/TodoWorks';

function Home() {
  return (
    <StyledComponents.StyledWrap>
      <StyledComponents.StyledContainer>
        <StyledComponents.StyledAddTodoHeader>

          {/* 리스트 추가하기 버튼 있는 헤더 */}
          <AddContentHeader/>
        </StyledComponents.StyledAddTodoHeader>

        {/* 투두리스트 */}
        <StyledComponents.StyledColumn>
          <h2>하는 중</h2>
          <TodoWorks isDone={false}/>
          <h2>해냈다!</h2>
          <TodoWorks isDone={true}/>
        </StyledComponents.StyledColumn>

      </StyledComponents.StyledContainer>
    </StyledComponents.StyledWrap>
  );
}

export default Home