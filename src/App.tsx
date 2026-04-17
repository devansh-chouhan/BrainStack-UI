import { BrowserRouter , Routes , Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";
import { Signin } from "./components/Signin.tsx";
import { Signup } from "./components/Signup.tsx";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home.tsx";
import { SharedBrain } from "./pages/SharedBrain.tsx";

export default function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/share/:shareLink" element={<SharedBrain />} />
        <Route path="/dashboard" 
        element={<ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>} />
      </Routes>
  </BrowserRouter>
}
