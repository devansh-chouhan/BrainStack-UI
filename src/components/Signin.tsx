import { Input } from "./Input"
import { Button } from "./Button"
import { useRef } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"


export const Signin = () => {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    async function signin(){
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value
        if (!username || !password) {
            alert("Please fill all fields");
            return;
        }
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
                username,
                password
            });
            const jwt = response.data.token
            localStorage.setItem("token" , jwt)
            navigate("/dashboard")
        } catch (e) {
            alert("Signin failed " + e);
        }
    }


    return <div className="h-screen w-screen bg-background flex justify-center items-center">
        <div className="bg-surface rounded-xl shadow-md min-w-38 p-8 flex flex-col gap-4">
            <Input ref={usernameRef} placeholder="Username" />
            <Input ref={passwordRef} placeholder="Password" />

            <div className="flex justify-center mt-4 rounded-2xl">
                <Button text="Signin" variant="primary" fullWidth={true} loading={false} onClick={signin} />
            </div>
        </div>
    </div>
}