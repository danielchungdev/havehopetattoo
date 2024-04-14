"use client"
import Link from "next/link"
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

export const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handleOpenClose = () => {
        setOpen(!open)
    }

    return (
        <div className="bg-neutral-950 fixed top-0 shadow-md w-screen">
            <div
                className="flex justify-between max-w-[1000px] lg:m-auto mx-5 py-8 text-white"
            >
                <Link href="/"
                ><p className="lg:text-3xl text-2xl font-stardom">
                        Have Hope Tattoo & Gallery
                    </p></Link
                >
                <div className="gap-8 my-auto hidden md:flex">
                    <Link href="/">Home</Link>
                    <Link href="/artists">Our Artists</Link>
                    <div className="flex gap-2">
                        <BsFillTelephoneFill scale={0.8} className="self-center" />
                        <p>585-645-1770</p>
                    </div>
                </div>

                <div className="md:hidden">
                    <button onClick={handleOpenClose}>
                        <RxHamburgerMenu size={30} />
                    </button>
                </div>

                <div
                    className={`px-6 w-[50vw] fixed bg-stone-900 h-screen top-0 right-0 ease-in-out duration-200 transition ${open ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="text-center my-8">
                        <div className="flex justify-end">
                            <button onClick={handleOpenClose}>
                                <IoCloseOutline className="text-white" size={30} />
                            </button>
                        </div>

                        <Link href="/" className="block text-white py-2">Home</Link>
                        <Link href="/artists" className="block text-white py-2"
                        >Our Artists</Link
                        >
                        <div className="grid place-content-center">
                            <div className="flex gap-2 text-black py-2">
                                <BsFillTelephoneFill size={20} className="self-end text-white" />
                                <p className="text-white">585-645-1770</p>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}