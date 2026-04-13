import type { ReactElement } from "react";

interface SidebarItemProps{
    text: string;
    icon: ReactElement
} 

export const SidebarItem = ({text , icon} : SidebarItemProps) => {
    return <div className="flex items-center font-bold text-darkSurface mt-2
    cursor-pointer rounded hover:bg-border transition-ease duration-200">
        <div className="p-2">
            {icon}
        </div>
        <div className="p-2">
            {text}
        </div>
    </div>
}