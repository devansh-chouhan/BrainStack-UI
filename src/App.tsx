import { Signin } from "./components/Signin.tsx";
import { Signup } from "./components/Signup.tsx";
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter , Routes , Route } from "react-router-dom";


export default function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
  </BrowserRouter>
}
