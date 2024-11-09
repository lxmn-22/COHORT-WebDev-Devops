
export const Input = ({
    disabled,
    children,
    onClick,
    type,
    placeholder
}) => {
    // clx, cx
    return <div onClick={onClick} className={`rounded-2xl px-2 py-2 text-white cursor-pointer bg-blue-500`}>
        <input type={type} placeholder={placeholder} className="bg-blue-500 outline-none"></input>
    </div>
}