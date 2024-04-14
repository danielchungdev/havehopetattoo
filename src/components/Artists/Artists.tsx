import { FC } from "react"
import Link from "next/link"
import { getArtistImageUrl } from "@/utils/getArtistImageUrl"
import { Artist } from "@/utils/types"

interface ArtistsProps {
    artists: Artist[]
}

export const Artists: FC<ArtistsProps> = ({ artists }) => {
    return (
        <div className="py-24">
            <div className="max-w-[1000px] m-auto">
                <h1 className="font-stardom text-4xl font-semibold text-center my-8">
                    Our Artists
                </h1>
                <div className="max-w-[1000px] m-auto">
                    <div className="artist-grid gap-y-8">
                        {
                            artists.map((artist, index) => (
                                <Link href={`/artist/${artist.id}`} key={index}>
                                    <div
                                        style={{ backgroundImage: `url(${getArtistImageUrl(artist.name, "profile.jpg")})` }}
                                        className={`m-auto shadow-2xl grid place-content-center rounded-md w-[300px] h-[500px] bg-no-repeat bg-cover bg-center md:text-transparent text-white hover:text-white transition duration-200 ease-in-out`}
                                    >
                                        <h2 className="font-semibold font-stardom text-4xl">
                                            {artist.name}
                                        </h2>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div >
            </div >
        </div >
    )
}