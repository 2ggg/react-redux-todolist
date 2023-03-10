import { useState } from "react";

function TestButtons() {
  const [money, setMoney] = useState(0);
  const inputNumber = (e) => {
    const input = e.target.value;
    let result = '';
    if(!isNaN(input)){
      for(let n of input){

      }
      setMoney(input);
    }else{console.log('숫자 아님');}
  }

  return (
    <>
      Button
      <div>
        <button btnSize={"Large"}>
          Large Primary Button
        </button>
        <button btnSize={"Medium"}>
          Medium
        </button>
        <button btnSize={"small"}>
          small
        </button>
      </div>
      <div>
        <button btnSize={"Large"}>
          Large Negative Button
        </button>
        <button btnSize={"Medium"}>
          Medium
        </button>
        <button btnSize={"small"}>
          small
        </button>
      </div>

      <form action="return false">
        <div>
          Input
          <span>
            이름
            <input 
              
            />
          </span>
          <span>
            가격
            <input onChange={(e) => inputNumber(e)} value={money}/>
          </span>
        </div>
        <div>
          Modal
          <button>open modal</button>
          <button>open modal</button>
        </div>

        Select
        <select name="" id="">
          <option value="">자바</option>
          <option value="">스프링</option>
          <option value="">리액트</option>
          <option value="">리액트네이티브</option>
        </select>
      </form>
    </>
  );
};

export default TestButtons;