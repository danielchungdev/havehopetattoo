import { FC } from "react"

interface ButtonProps {
    text: string,
    onClick?: () => {}
}

export const Button: FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button className="mt-8 bg-neutral-100 text-black p-3 rounded-md hover:bg-neutral-200" onClick={onClick}>{text}</button>
    )
}