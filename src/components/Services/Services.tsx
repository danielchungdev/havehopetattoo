import { ServiceCard } from "../ServiceCard"

export const Services = () => {

    const descriptionCustom =
        "We will collaborate with you to come up with the perfect solution and then bring your vision to life with our unique style and professional technique. We bring high quality personal design work to every tattoo—you can count on that from our artists!";
    const descriptionCover =
        "Do you have a tattoo that you’d like covered up or reworked? We have the expert knowledge and amazing artists that will work with you personally to rework the tattoos that you want to freshen up.";
    
        return (
        <div className="max-w-[1000px] m-auto my-24">
            <div className="md:w-full w-11/12 m-auto md:m-0">
                <p
                    className="font-stardom text-center text-4xl font-semibold mb-8 underline underline-offset-8 decoration-yellow-500"
                >
                    Our Services
                </p>
                <div className="flex flex-col md:flex-row justify-between m-auto gap-4">
                    <ServiceCard
                        title="Custom Design"
                        description={descriptionCustom}
                    />
                    <ServiceCard
                        title="Tattoo Cover Up"
                        description={descriptionCover}
                    />
                </div>
            </div>
        </div>
    )
}