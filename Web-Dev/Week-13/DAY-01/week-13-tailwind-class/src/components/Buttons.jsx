
export const Button = ({
    disabled,
    children,
    onClick
}) => {
    // clx, cx
    return <div onClick={onClick} className={`rounded-2xl px-40 py-3 text-white cursor-pointer ${disabled ? "bg-blue-200" : "bg-green-400"}`}>
        {children}
    </div>
}