import React from "react"
import Image from "next/image"

const About = () => {
    return (
        <div className="flex py-5 flex-col">
            <div className="pb-3 flex justify-center items-center">
                <p className="text-3xl font-extrabold">Passion Fuels Purpose!</p>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
                    <div className='w-[77%] h-[55%] md:w-[45%] md:h-[40%] border mr-2 mb-2 flex flex-col space-y-2'>
                        <h1 className="font-medium pb-2">ABOUT ME!</h1>
                        <p className="font-normal">
                            I thrive at the intersection of data, development, and automation. My ability to adapt and innovate has been honed through diverse experiences, including completing an internship at Softtech and certifications under the guidance of industry leaders like Shashank Mishra.
                        </p>
                        <p className="font-normal">
                            I aim to contribute to organizations that value creativity, precision, and technical excellence. Whether it's optimizing complex data systems or developing state-of-the-art web applications, I am always eager to take on challenges that push the boundaries of technology.
                        </p>
                        <p className="font-normal">
                            Feel free to connect with me and explore my work—let's create impactful solutions together!
                        </p>
                    </div>
                    <div className='w-[77%] h-[55%] md:w-[45%] md:h-[40%] border rounded-md mr-2 mb-2 flex flex-row'>
                        <div className="w-full h-full p-3 border rounded-md">
                            <Image
                                src={"/Rajendra-portfolio-image.jpeg"}
                                layout="responsive"
                                width={612}
                                height={612}
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    objectFit: "cover"
                                }}
                                alt="postImage"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About