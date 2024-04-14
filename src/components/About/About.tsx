import { Title } from "@/components/Title"
import Image from "next/image"

export const About = () => {
    return (
        <div
            className="flex md:flex-row flex-col-reverse my-24 max-w-[1000px] m-auto justify-between gap-16"
        >
            <div className="w-11/12 m-auto">
                <Title title="About Us" />
                <p className="mb-2">
                    We are a tattoo parlor serving Rochester, Monroe County, NY and
                    surrounding areas in business since 2018. Our tattoo artists specialize
                    in custom tattoos and reworking existing tattoos. Whether you have an
                    existing design, reference material, or just some ideas from your head,
                    our experienced artists will do their best to design personalised
                    tattoos according to your vision.
                </p>
                <p>
                    Give us a call at 585-645-1770 to schedule your artistic appointment!
                </p>
            </div>
            <div className="w-11/12 m-auto md:m-0">
                <Image src={"/images/studio.jpg"} alt={"studio"} width={500} height={500} className="picture-frame"/>
            </div>
        </div>
    )
}