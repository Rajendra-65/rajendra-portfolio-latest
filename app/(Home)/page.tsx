import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-middle items-center  place-items-start md:flex-row md:justify-between">
      <div className = 'w-[77%] h-[55%] md:w-[45%] md:h-[40%] border mr-2 mb-2'>
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
      <div className = "w-[77%] h-[55%] md:w-[45%] md:h-[40%] border mr-2 mb-2 border-slate-800">
        <div className = 'w-full h-full mt-[50px]'>
          <h1 className="flex justify-center text-2xl font-extrabold">Turning Vision Into Code and Reality</h1>
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
