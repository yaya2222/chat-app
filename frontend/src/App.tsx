import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ChatPage from "./pages/ChatPage";


function App() {

  return (
    <div className="min-h-screen w-screen flex backgroundImage bg-cover bg-center">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/chats' element={<ChatPage/>}/>

      </Routes>
    </div>
  )
}

export default App
