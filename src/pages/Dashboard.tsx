import { useEffect, useState } from "react"
import { Button } from "../components/Button.tsx"
import { Card } from "../components/Card.tsx"
import { ContentModal } from "../components/ContentModal.tsx"
import { PlusIcon } from "../icons/PlusIcon.tsx"
import { ShareIcon } from "../icons/ShareIcon.tsx"
import { SideBar } from "../components/Sidebar.tsx"
import { useContent } from "../hooks/useContent.tsx"
import axios from "axios"
import { BACKEND_URL } from "../config.tsx"


export const Dashboard = () => {
    const [modelOpen , setModelOpen] = useState(false);
    const {contents , refresh} = useContent()

    useEffect(() => {
        refresh()
    } , [modelOpen])

    return (
        <div className="h-screen flex">
            <SideBar/>

            <div className="ml-72 flex flex-col w-full bg-background">
                
                <ContentModal open={modelOpen} onClose={() => setModelOpen(false)}/>

                <div className="p-4 flex justify-end gap-4">
                    <Button 
                        onClick={() => setModelOpen(true)} 
                        text="Add content" 
                        variant="primary" 
                        startIcon={<PlusIcon/>} 
                    />
                    <Button 
                        text="Share brain" 
                        variant="secondary" 
                        startIcon={<ShareIcon/>}
                        onClick={async () => {
                            const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
                                share: true
                            } , {
                                headers:{
                                    "Authorization":localStorage.getItem("token")
                                }
                            })
                            const shareUrl = `http://localhost:5173/share/${response.data.hash}`
                            alert(shareUrl)
                        }}
                    />
                </div>

                <div className="flex-1 mt-6 max-h-140 overflow-y-auto px-4 pb-4 flex gap-4 flex-wrap justify-center items-start">
                    {contents?.length ? 
                        contents.map(({type ,link , title}) => (
                            <Card type={type} link={link} title={title} />
                        )) 
                        : 
                        <p className="text-textMuted text-3xl font-bold h-full w-full flex items-center justify-center">
                            No Content found
                        </p>
                    }
                </div>

            </div>
        </div>
    )
}