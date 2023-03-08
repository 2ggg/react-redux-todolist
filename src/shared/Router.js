import { BrowserRouter, Route, Routes } from "react-router-dom"
import TodoWork from "../components/TodoWork";
import TodoWorks from "../components/TodoWorks";
import Home from "../pages/Home"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="todoworks" element={<TodoWorks/>}/>
        <Route path="todoworks/:id" element={<TodoWork/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;