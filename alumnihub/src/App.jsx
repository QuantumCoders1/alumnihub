import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import AdminPage from "./components/adminhome";
import AlumniHome from "./components/alumnihome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/alumni" element={<AlumniHome />} />
    </Routes>
  );
}

export default App;

