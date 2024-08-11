import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Chat from "./pages/Chat/Chat"
import ProfileUpdate from "./pages/ProfileUpdate/ProfileUpdate"


const App = () => {
  return (
    <Routes>
      <Route  path="/"  element={<Login></Login>} />
      <Route path = "/chat" element={<Chat></Chat>}/>
      <Route path ="/profile" element={<ProfileUpdate></ProfileUpdate>}/>
     
    </Routes>
  )
}

export default App