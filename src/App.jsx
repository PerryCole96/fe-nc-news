import { Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage';
import SingleArticlePage from "./pages/SIngleArticlePage";
function App() {
  

  return (
  <>
    <div className='page-content'>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles/:article_id" element={<SingleArticlePage />} />
    </Routes>
    </div>
  </>
  )
}

export default App
