import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";

export default function App() {
  return (
    <div className="bg-background flex gap-4 h-screen w-screen items-center justify-center">
      <Button startIcon={<PlusIcon size="sm"/>} variant="primary" text="share" size="sm" onClick={() => {alert("share") }}/>
      <Button startIcon={<PlusIcon size="md"/>} variant="secondary" text="Subscribe" size="md" onClick={() => {alert("subscribe") }}/>
      <Button startIcon={<PlusIcon size="lg"/>} variant="primary" text="Like" size="lg" onClick={() => {alert("like") }}/>
    </div>
  )
}
