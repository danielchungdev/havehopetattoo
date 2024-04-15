import { getArtistImageUrl } from "@/utils/getArtistImageUrl"
import { Artist } from "@/utils/types"
import Image from "next/image"
import { FC } from "react"
import { Tags } from "@/components/Tags"

interface ArtistCardProps {
    artist: Artist
}

export const ArtistCard: FC<ArtistCardProps> = ({ artist }) => {
    return (
        <div className="py-24">
            <div className="max-w-[1000px] m-auto">
                <div className="py-10 mx-3">
                    <div>
                        <Image src={getArtistImageUrl(artist.name, "profile.jpg")} alt="Profile" className="rounded-full w-32 h-32 object-cover m-auto md:m-0" height={250} width={250} />
                        <p className="font-stardom text-4xl font-bold py-2 text-center md:text-left">
                            {artist.name}
                        </p>
                        <div className="flex gap-21 flex-wrap py-2 justify-center md:justify-normal">
                            {
                                artist.specialties.map((specialty, index) => (
                                    <Tags title={specialty} key={index} />
                                ))
                            }
                        </div>
                        <div className="artist-grid gap-5 py-8">
                            {
                                artist.work.map((work, index) => (
                                    <div className="w-[300px] m-auto" key={index}>
                                        <Image src={getArtistImageUrl(artist.name, work)} height={500} width={300} alt={`Work #${index + 1}`} blurDataURL=""/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}