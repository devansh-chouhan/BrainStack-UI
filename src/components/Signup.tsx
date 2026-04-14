import { Input } from "./Input";
import { Button } from "./Button";
import { useRef, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate, Link } from "react-router-dom";
import { BrainCircuit, UserPlus } from "lucide-react";

export const Signup = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function signup() {
    setLoading(true);
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    
    if (!username || !password) {
      alert("Please fill all fields");
      setLoading(false);
      return;
    }
    
    try {
      await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        password,
      });
      navigate("/signin");
      // In a real app, use a toast
    } catch (e) {
      alert("Signup failed: " + (e as any).response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center flex-col items-center gap-3">
          <div className="p-3 bg-primary rounded-2xl shadow-lg shadow-primary/20">
            <BrainCircuit size={40} className="text-white" />
          </div>
          <h2 className="text-center text-3xl font-extrabold text-text-primary tracking-tight">
            Create your account
          </h2>
          <p className="text-center text-sm text-text-secondary">
            Start capturing your digital brain today
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 shadow-premium rounded-2xl border border-border">
          <div className="space-y-6">
            <Input 
              label="Username" 
              ref={usernameRef} 
              placeholder="Enter your username" 
            />
            
            <Input 
              label="Password" 
              ref={passwordRef} 
              type="password"
              placeholder="Create a strong password" 
            />

            <div className="pt-2">
              <Button
                text="Create Account"
                variant="primary"
                fullWidth={true}
                loading={loading}
                onClick={signup}
                startIcon={<UserPlus size={18} />}
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-text-secondary">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-semibold text-primary hover:text-primary-hover transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};