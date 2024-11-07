import { Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage';
import SingleArticlePage from "./pages/SingleArticlePage";
import Header from "./components/Header";
import { useState } from "react";
import UserContext from "./context/UserContext";

export default function App() {

  const [userContext, setUserContext] = useState({
    
    username: "grumpy19",
    name: "Paul Grump",
    avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"

  })

  const isLoggedIn = Object.keys(userContext).length > 0
  

  return (
  <>
  <UserContext.Provider value={{ userContext, setUserContext, isLoggedIn }}>
    <div className='page-content'>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles/:article_id" element={<SingleArticlePage />} />
    </Routes>
    </div>
    </UserContext.Provider>
  </>
  )
}

