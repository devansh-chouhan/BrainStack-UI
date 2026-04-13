import { Input } from "./Input"
import { Button } from "./Button"


export const Signin = () => {
    return <div className="h-screen w-screen bg-background flex justify-center items-center">
        <div className="bg-surface rounded-xl shadow-md min-w-38 p-8 flex flex-col gap-4">
            <Input placeholder="Username" />
            <Input placeholder="Password" />

            <div className="flex justify-center mt-4 rounded-2xl">
                <Button text="Signin" variant="primary" fullWidth={true} loading={false} />
            </div>
        </div>
    </div>
}