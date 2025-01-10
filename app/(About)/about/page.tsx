'use client'
import React,{useRef,useLayoutEffect} from "react"
import Image from "next/image"
import gsap from "gsap"

const About = () => {
    const headingRef = useRef<HTMLHeadingElement>(null)
    
    const paraRef1 = useRef<HTMLParagraphElement>(null);

    useLayoutEffect(() => {
        // Ensure the ref is not null before using it
        if (paraRef1.current) {
            gsap.from(paraRef1.current.children, {
                duration: 0.8,
                y: -50,
                delay: 1,
                opacity: 0,
                stagger: 0.3,
            });
        }
    }, []);

    useLayoutEffect(()=>{
        if(headingRef.current){
            gsap.from(headingRef.current.children,{
                duration:0.8,
                y:50,
                delay:2,
                opacity:0,
            })
        }
    },[])

    return (
        <div className="flex py-5 flex-col">
            <div className="pb-3 flex justify-center items-center">
                <p ref={paraRef1} className="text-3xl font-extrabold gap-2 flex">
                    <span>
                        Passion
                    </span> 
                    <span>
                        Fuels
                    </span> 
                    <span>
                        Purpose!
                    </span>
                </p>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
                    <div className='w-[77%] h-[55%] md:w-[45%] md:h-[40%] border mr-2 mb-2 flex flex-col space-y-2 p-5'>
                        <h1 ref={headingRef} className="font-medium pb-2 text-center alignc-center justify-center flex">ABOUT ME!</h1>
                        <p className="font-normal">
                            I thrive at the intersection of data, development, and automation. My ability to adapt and innovate has been honed through diverse experiences, including completing an internship at Softtech and certifications under the guidance of industry leaders like Shashank Mishra.
                        </p>
                        <p className="font-normal">
                            I aim to contribute to organizations that value creativity, precision, and technical excellence. Whether it&apos;s optimizing complex data systems or developing state-of-the-art web applications, I am always eager to take on challenges that push the boundaries of technology.
                        </p>
                        <p className="font-normal">
                            Feel free to connect with me and explore my work—let&apos;s create impactful solutions together!
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