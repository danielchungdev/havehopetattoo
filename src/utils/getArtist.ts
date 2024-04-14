import artists from "../../public/data/artists.json"
import { Artist } from "./types";

export const getArtist = (artistId: string): Artist | undefined => {
    let id:number = parseInt(artistId)
    return artists.find((artist) => artist.id === id);
}