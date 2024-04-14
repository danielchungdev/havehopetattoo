"use client"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Credits } from "@/components/Credits"
import { HowToBook } from "@/components/HowToBook"
import { ArtistCard } from "@/components/ArtistCard"
import { Artist } from "@/utils/types"
import { useEffect, useState } from "react"
import { getArtist } from "@/utils/getArtist"
import Head from "next/head"

export default function Page({ params }: { params: { artistId: string } }) {

    const [artist, setArtist] = useState<Artist>({
        id: 0,
        name: "",
        specialties: [],
        description: "",
        activeyears: 0,
        dateOfBirth: "",
        pictureurl: "",
        work: []
    })

    useEffect(() => {
        let artist = getArtist(params.artistId)
        if (artist) {
            setArtist(artist)
        }
    }, [])

    return (
        <>
            <Head>
                <meta property="og:title" content={`Have Hope Tattoo | ${artist.name}`} key="title" />
            </Head>
            <main>
                <Navbar />
                <ArtistCard artist={artist} />
                <HowToBook />
                <Footer />
                <Credits />
            </main>
        </>
    )
}