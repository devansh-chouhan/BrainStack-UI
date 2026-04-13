import { useState } from "react"
import { Button } from "../components/Button.tsx"
import { Card } from "../components/Card.tsx"
import { ContentModal } from "../components/ContentModal.tsx"
import { PlusIcon } from "../icons/PlusIcon.tsx"
import { ShareIcon } from "../icons/ShareIcon.tsx"
import { SideBar } from "../components/Sidebar.tsx"



export const Dashboard = () => {
    const [modelOpen , setModelOpen] = useState(false);

    return (
        <div >
            <SideBar/>
            <div className="ml-72 p-4 min-h-screen bg-background">
            <ContentModal open={modelOpen} onClose={() => setModelOpen(false)}/>
            <div className="flex justify-end gap-4">
                <Button onClick={() => setModelOpen(true)} text="Add content" variant="primary" startIcon={<PlusIcon/>} />
                <Button text="Share brain" variant="secondary" startIcon={<ShareIcon/>}/>
            </div>
            <div className="flex gap-4">
                <Card type="twitter" link="https://x.com/tiagopog/status/807811447862468608" title="Tweet" />
                <Card type="youtube" link="https://www.youtube.com/watch?v=tbPOFYwL7Ss" title="Youtube Integers" />
            </div>
            </div>
        </div>
    )
}