import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button.tsx";
import { Input } from "./Input.tsx";
import axios from "axios";
import { BACKEND_URL } from "../config.tsx";

const ContentType = {
    Youtube: "youtube",
    Twitter: "twitter"
}

export const ContentModal = ({open , onClose}) => {
    const titleRef = useRef<HTMLInputElement>(null)
    const linkRef = useRef<HTMLInputElement>(null)
    const [type , setType] = useState(ContentType.Youtube)

    async function addContent(){
        const title = titleRef.current?.value
        const link = linkRef.current?.value

        await axios.post(`${BACKEND_URL}/api/v1/content` , {
            link , 
            title , 
            type
        },{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })

        onClose()
    }

    return <div>
        {open && <div className="w-screen h-screen bg-darkBg fixed top-0 left-0 
        opacity-96 flex justify-center items-center">
                <div className="bg-white opacity-100 rounded p-4 flex flex-col gap-2">
                    <div className="flex justify-end cursor-pointer" onClick={onClose}>
                        <CrossIcon />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Input ref={titleRef} placeholder={"Title"}/>
                        <Input ref={linkRef} placeholder={"Link"}/>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        Type:
                        <Button text="Youtube" 
                        variant={type === ContentType.Youtube ? "primary" : "secondary"}
                        onClick={() => setType(ContentType.Youtube)}/>
                        <Button text="Twitter" 
                        variant={type === ContentType.Twitter ? "primary" : "secondary"}
                        onClick={() => setType(ContentType.Twitter)}/>
                    </div>
                    <div className="flex justify-center mt-2">
                        <Button onClick={addContent} variant="primary" text="Submit" fullWidth={true}/>
                    </div>
                </div>
        </div>}
    </div>

}

