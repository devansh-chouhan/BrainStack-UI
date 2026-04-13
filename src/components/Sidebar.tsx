import { LogoIcon } from "../icons/LogoIcon.tsx"
import { TwitterIcon } from "../icons/TwitterIcon.tsx"
import { YoutubeIcon } from "../icons/YoutubeIcon.tsx"
import { SidebarItem } from "./SidebarItem.tsx"

export const SideBar = () => {
    return <div className="h-screen bg-surface border-r w-72 fixed left-0 top-0">
        
        <div className="p-4">
            <div className="flex items-center gap-2">
                <LogoIcon/>
                <h1 className="font-bold text-2xl">
                    BrainStack
                </h1>
            </div >
            <div className="mt-8">
                <SidebarItem text="Twitter" icon={<TwitterIcon/>}/>
                <SidebarItem text="Youtube" icon={<YoutubeIcon/>}/>
            </div>
        </div>
    </div>
}