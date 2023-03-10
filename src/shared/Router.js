import { BrowserRouter, Route, Routes } from "react-router-dom"
import TodoWork from "../components/TodoWork";
import TodoWorks from "../components/TodoWorks";
import Home from "../pages/Home"
import TestButtons from "../pages/TestButtons";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="todoworks" element={<TodoWorks/>}/>
        <Route path="todoworks/:id" element={<TodoWork/>}/>
        <Route path="testBtn" element={<TestButtons/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;