import { About } from "@/components/About";
import { Credits } from "@/components/Credits";
import { Footer } from "@/components/Footer";
import { HowToBook } from "@/components/HowToBook";
import { Landing } from "@/components/Landing";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Have Hope Tattoo | Home</title>
        
      </Head>
      <main>
        <Navbar />
        <Landing />
        <About />
        <Services />
        <HowToBook />
        <Footer />
        <Credits />
      </main>
    </>
  );
}
