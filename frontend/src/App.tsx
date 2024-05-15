import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
// import ChatPage from "./pages/ChatPage";
import { Toaster  } from "react-hot-toast";


function App() {

  return (
    <div className="min-h-screen w-screen flex backgroundImage bg-cover bg-center">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='/chats' element={<ChatPage/>}/> */}

      </Routes>
      <Toaster  />
    </div>
  )
}

export default App
