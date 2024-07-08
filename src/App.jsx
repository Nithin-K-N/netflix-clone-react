import { BrowserRouter as Router ,Routes,Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  
  const nav = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        nav('/')
      } else {
        console.log("Logged out");
        nav('/login')
      }
    })
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/player/:id" element={<Player/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
