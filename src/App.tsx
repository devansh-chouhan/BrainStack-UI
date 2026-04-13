import { Button } from "./components/Button.tsx"
import { Card } from "./components/Card.tsx"
import { PlusIcon } from "./icons/PlusIcon.tsx"
import { ShareIcon } from "./icons/ShareIcon.tsx"


export default function App() {
  return (
    <div className="p-4">
        <div className="flex justify-end gap-4">
          <Button text="Add content" variant="primary" startIcon={<PlusIcon/>} />
          <Button text="Share brain" variant="secondary" startIcon={<ShareIcon/>}/>
        </div>
        <div className="flex gap-4">
            <Card type="twitter" link="https://x.com/tiagopog/status/807811447862468608" title="Tweet" />
            <Card type="youtube" link="https://www.youtube.com/watch?v=tbPOFYwL7Ss" title="Youtube Integers" />
        </div>
    </div>
  )
}
