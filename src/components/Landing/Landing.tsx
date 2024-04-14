import { Button } from "../Button"
import { getImageUrl } from "@/utils/getImageUrl"

export const Landing = () => {

    return (
        <div
            className={`w-screen h-[700px] bg-center bg-cover bg-no-repeat`}
            style={{backgroundImage: `url(${getImageUrl("wallpaper.jpg")})`}}
        >
            <div className=" max-w-[1000px] m-auto h-full md:m-auto">
                <div className="pt-[200px] md:pt-[350px]">
                    <div className="w-11/12 md:w-6/12 m-auto md:m-0 bg-neutral-950 text-white rounded-md p-8">
                        <h1 className="text-4xl font-semibold mb-2 font-stardom">
                            Have Hope Tattoo & Gallery
                        </h1>
                        <p>
                            Your award-winning custom tattoo shop in Rochester, Monroe County,
                            NY. We inspire Hope through high-end ink artistry.
                        </p>
                        <Button text="Book now!" />
                    </div>
                </div>
            </div>
        </div >
    )
}