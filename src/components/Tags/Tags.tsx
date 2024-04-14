import { FC } from "react";

interface TagsProps {
    title: string
}

export const Tags: FC<TagsProps> = ({ title }) => {

    const capitalizeFirstLetter = (word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    return (
        <div className="bg-neutral-950 text-yellow-400 px-5 py-1 rounded-full m-1">
            <p>{capitalizeFirstLetter(title)}</p>
        </div>
    )
}