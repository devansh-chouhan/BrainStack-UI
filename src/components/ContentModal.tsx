import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button.tsx";
import { Input } from "./Input.tsx";

export const ContentModal = ({open , onClose}) => {

    return <div>
        {open && <div className="w-screen h-screen bg-darkBg fixed top-0 left-0 
        opacity-96 flex justify-center items-center">
                <div className="bg-white opacity-100 rounded p-4 flex flex-col gap-2">
                    <div className="flex justify-end cursor-pointer" onClick={onClose}>
                        <CrossIcon />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Input placeholder={"Title"}/>
                        <Input placeholder={"Link"}/>
                    </div>
                    <div className="flex justify-center">
                        <Button variant="primary" text="Submit"/>
                    </div>
                </div>
        </div>}
    </div>

}

