'use client'
import { useRef,useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const imageContainerRef = useRef(); // Ref for the container
  const headingRef = useRef()
  
  const RotateImage = (event) => {
      const { offsetX, offsetY, target } = event.nativeEvent;
      const { offsetWidth, offsetHeight } = target;

      const tiltX = ((offsetY / offsetHeight) - 2) * 10; // Adjust the tilt intensity
      const tiltY = ((offsetX / offsetWidth) - 2) * 10;
      
      
        gsap.to(imageContainerRef.current, {
          rotateX:tiltX,
          rotateY:tiltY,
          duration:0.3,
          ease:'power3.out'
        });
  };
  
  const ResetImage = () => {
      // Reset animation on mouse leave
      gsap.to(imageContainerRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
  };

  useGSAP(()=>{
    // @ts-expect-error it is in test
    gsap.from(headingRef.current, {
      y:50,
      duration:1,
      delay:1,
      opacity:0
    });
})

  

  return (
    <div className="flex flex-col justify-center align-middle items-center  place-items-start md:flex-row md:justify-between">
      <div className = 'w-[77%] h-[55%] md:w-[45%] md:h-[40%] border mr-2 mb-2'>
        <div 
          ref={imageContainerRef}
          onMouseEnter={RotateImage}
          onMouseLeave={ResetImage}
          className = 'w-full h-full'
        >
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
      <div className = "w-[77%] h-[55%] md:w-[45%] md:h-[40%] border mr-2 mb-2 border-slate-800">
        <div className = 'w-full h-full mt-[50px]'>
          <h1 ref={headingRef} className="flex justify-center text-2xl font-extrabold">Turning Vision Into Code and Reality</h1>
          <div>
            <h2 className="px-1 py-2 ">
              As a skilled full-stack developer, data-engineer/analyst , i am dedicated to turning ideas into the innovative web applications , building robust pipeline , withdrawing meaningful insight from data, visualize with visualization tool and building big-data solutions. Explore my latest projects and articles, showcasing my expertise in web-development, data-engineering and data-analysis.
            </h2>
          </div>
          <div className="flex justify-center place-items-center">
            <div>
              <Link
                href={"https://drive.google.com/drive/folders/10rtD7oIRlvtBreSAmXyro4WiuBZkSTMb?usp=sharing"}
                target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
              >
                Resume 
              </Link>
            </div>
            <div>
              <Link 
                href="mailto:rajendrbehera9@gmail.com" 
                target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light'
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
