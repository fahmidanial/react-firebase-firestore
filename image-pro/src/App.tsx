import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { AuthProvider } from "./context/auth";

function App() {

  return (
    <AuthProvider>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/SignUp" element={<Signup />} />
    </Routes>
    </AuthProvider>
  ) 
}

export default App
