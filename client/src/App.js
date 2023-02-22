import "./App.css";
import Landing from "./components/Display question/Landing";
import Problems from "./components/Problems/Problems";
import RecordList from "./components/recordList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login";
import SignupPage from "./Pages/SignUp";
import Edit from "./components/edit";
import Create from "./components/create";
import NavBar from "./NavBar";
function App() {
  return (
    <>
    <div>
      <NavBar/>
    </div>
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/admin/problems" element={<RecordList />} /> 
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/admin/create" element={<Create />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/problems" element={<Problems/>} />
            <Route path="/solve/:id" element={<Landing/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    </>
  );
}

export default App;
