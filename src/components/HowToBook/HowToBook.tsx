import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

export const HowToBook = () => {
    return (
        <div className="bg-neutral-950">
            <div className="max-w-[1000px] m-auto">
                <div className="text-center font-semibold text-amber-400 md:text-2xl text-lg py-24">
                    <p className="mb-4">To book your appointment, contact Have Hope Tattoo today.</p>
                    <p>You may visit use at 182 Monroe Ave, Rochester, NY 14604</p>
                    <div className="text-center mt-8 flex justify-center">
                        <a href="https://www.facebook.com/havehopetattoo" target="_blank">
                            <FaFacebookSquare size={30} className="text-amber-400"/>
                        </a>
                        <a href="https://www.instagram.com/havehopetattoo/?hl=en" target="_blank">
                            <FaInstagramSquare size={30} className="text-amber-400"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}