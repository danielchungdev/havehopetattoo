import { FC } from "react"
import { Title } from "../Title"
import { Button } from "../Button"

interface ServiceCardProps {
    title: string,
    description: string,
}

export const ServiceCard: FC<ServiceCardProps> = ({ title, description }) => {
    return (
        <div
            className="md:w-1/2 bg-neutral-950 text-white md:p-10 p-5 rounded-lg"
        >
            <Title title={title} />
            <p className="h-36">{description}</p>
            <div className="flex justify-end">
                <Button text="Book now!" />
            </div>
        </div>
    )
}