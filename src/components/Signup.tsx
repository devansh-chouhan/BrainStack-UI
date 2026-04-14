import { Input } from "./Input"
import { Button } from "./Button"
import { useRef } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"


export const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    async function signup(){
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value
        if (!username || !password) {
            alert("Please fill all fields");
            return;
        }
        try {
            await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                username,
                password
            });
            navigate("/signin")
            alert("Signup successfully");
        } catch (e) {
            alert("Signup failed " + e);
        }
    }

    return <div className="h-screen w-screen bg-background flex justify-center items-center">
        <div className="bg-surface rounded-xl shadow-md min-w-38 p-8 flex flex-col gap-4">
            <Input ref={usernameRef} placeholder="Username" />
            <Input ref={passwordRef} placeholder="Password" />

            <div className="flex justify-center mt-4 rounded-2xl">
                <Button text="Signup" variant="primary" fullWidth={true} loading={false} onClick={signup} />
            </div>
        </div>
    </div>
}