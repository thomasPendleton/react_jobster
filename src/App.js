import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Landing, Error, Register } from "./pages"
import { ToastContainer, toast } from "react-toastify"
import {SharedLayout, Alljobs, Addjob, Profile, Stats } from './pages/dashboard'
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />} >
            <Route index element={<Stats />} />
            <Route path="add-job" element={ <Addjob />} />
            <Route path="all-jobs" element={<Alljobs />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="landing" element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose="5000"
          hideProgressBar="false"
          closeOnClick="true"
          pauseOnHover="true"
          theme="light"
        />
      </Router>
    </div>
  )
}

export default App
