interface InputProps{
    placeholder: string;
    onChange: () => void
} 

export const Input = ({onChange , placeholder}:InputProps) => {
    return <div>
        <input placeholder={placeholder} type="text" className="px-4 py-2 border rounded" onChange={onChange}/>
    </div>
}