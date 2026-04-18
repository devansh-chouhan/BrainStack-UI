import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import {Signup} from "./components/Signup";
import {Signin} from "./components/Signin";
import {ProtectedRoute} from "./components/ProtectedRoute";
import LoadingPage from "./components/LoadingPage";

const Dashboard = lazy(() => import("./pages/Dashboard").then(m => ({ default: m.Dashboard })));
const SharedBrain = lazy(() => import("./pages/SharedBrain").then(m => ({ default: m.SharedBrain })));
const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/share/:shareLink" element={<SharedBrain />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}