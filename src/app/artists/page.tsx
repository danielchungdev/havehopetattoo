import { Credits } from "@/components/Credits";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { HowToBook } from "@/components/HowToBook";
import { Artists } from "@/components/Artists";
import Head from "next/head";
import data from "../../../public/data/artists.json"

export default function Page() {
  return (
    <>
      <Head>
        <title>Have Hope Tattoo | Artists</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <main>
        <Navbar />
        <Artists artists={data} />
        <HowToBook />
        <Footer />
        <Credits />
      </main>
    </>
  );
}