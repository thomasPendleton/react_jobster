import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Landing, Error, Dashboard, Register } from "./pages"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="landing" element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  )
}

export default App
