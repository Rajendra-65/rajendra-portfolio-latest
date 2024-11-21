import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-between">
      <div className = 'w-[45%] h-[450px] border mr-2 mb-2'>
        <div className = 'w-full h-full'>
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
      <div className = "w-[45%] h-[450px] border mr-2 mb-2">
        <div className = 'w-full h-full mt-[100px]'>
          <h1 className="flex justify-center">Turning Vision Into Code and Reality</h1>
          <div>
            <h2 className="px-1 py-2 ">
              As a skilled full-stack developer, data-engineer/analyst , i am dedicated to turning ideas into the innovative web applications , building robust pipeline , withdrawing meaningful insight from data, visualize with visualization tool and building big-data solutions. Explore my latest projects and articles, showcasing my expertise in web-development, data-engineering and data-analysis.
            </h2>
          </div>
          <div className="flex justify-center place-items-center">
            <div>
              <Link
                href={""}
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
