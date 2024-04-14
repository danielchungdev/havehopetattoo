import { FC } from "react"

interface TitleProps{
    title: string,
}

export const Title: FC<TitleProps> = ({ title }) => {
    return (
        <div className="flex gap-[10px]">
            <div className="w-[5px] h-[35px] bg-yellow-500"></div>
            <p className="font-stardom text-4xl font-semibold mb-4">{title}</p>
        </div>
    )
}