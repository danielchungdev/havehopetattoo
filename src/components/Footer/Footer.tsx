import { FaClock, FaMap, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Title } from "@/components/Title";
import Image from "next/image";

export const Footer = () => {
    return (
        <div className="bg-neutral-900 py-24 text-white">
            <div
                className="max-w-[1000px] m-auto md:flex-row flex flex-col justify-between gap-10"
            >
                <Image
                    src="/images/logo.png"
                    className="md:w-4/12 w-11/12 m-auto md:m-0 mb-16 md:mb-0"
                    alt="Logo"
                    width={500}
                    height={500}
                />
                <div className="md:w-4/12 w-11/12 m-auto md:m-0 mb-16 md:mb-0">
                    <Title title="About Us" />
                    <p>
                        Have Hope Tattoo gives back to the community by supporting local
                        charitable events and opening our studio in Rochester, New York as an
                        avenue for local artists to showcase their work. At Have Hope Tattoo,
                        we give new life to tattoo artistry.
                    </p>
                    <div className="mt-8 flex">
                        <a href="https://www.facebook.com/havehopetattoo" target="_blank">
                            <FaFacebookSquare size={30} className="text-yellow-500"/>
                        </a>
                        <a
                            href="https://www.instagram.com/havehopetattoo/?hl=en"
                            target="_blank"
                        >
                            <FaInstagramSquare size={30} className="text-yellow-500" />
                        </a>
                    </div>
                </div>
                <div className="md:w-4/12 w-11/12 m-auto md:m-0 mb-16 md:mb-0">
                    <Title title="Contact Us" />

                    <div>
                        <div className="flex gap-2">
                            <BsFillTelephoneFill scale="1" className="self-center" />
                            <p className="text-lg">Phone</p>
                        </div>
                        <div className="flex gap-2">
                            <BsFillTelephoneFill scale="1" className="self-center text-transparent" />
                            <p className="text-lg text-yellow-500">585-645-1770</p>
                        </div>
                    </div>

                    <div className="my-4">
                        <div className="flex gap-2">
                            <FaMap className="self-center" scale={1} />
                            <p className="text-lg">Address</p>
                        </div>
                        <div className="flex gap-2">
                            <FaMap className="self-center text-transparent" scale={1} />
                            <p className="text-lg text-yellow-500">
                                182 Monroe Ave Rochester NY, 14604
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="flex gap-2">
                            <FaClock className="self-center" scale={1} />
                            <p className="text-lg">Hours of Operation</p>
                        </div>
                        <div className="flex gap-2">
                            <FaClock scale={1} className="self-center text-transparent" />
                            <div className="block">
                                <p className="text-lg text-yellow-500">Tue-Sat 12:00 PM - 9:00 PM</p>
                                <p className="text-lg text-yellow-500">Sun-Mon 12:00 PM - 5:00PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}