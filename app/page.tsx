"use client";
import Image from "next/image";
import { FiGlobe } from "react-icons/fi";
import { ButtonLinks } from "./components/ButtonLinks";
import { GrGithub, GrGlobe, GrInstagram, GrLinkedin } from "react-icons/gr";
import UserContact from "./components/UserContact";
export default function Home() {
  const imageLoader = ({ src, width, quality }: any) => {
    return `https://wallpapers.com/images/featured/${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  const user = ()=>{
    const userContact = []
    for(let i=0;i< 20;i++){
      userContact.push(<UserContact key={i}/>)
    }
    return userContact
  }


  return (
    <>
     <header className=" ">
        <div className="flex flex-col justify-center items-center py-7 bg-slate-500 ">
          Selamat Datang
        </div>
      </header>
      {/* <div className="z-10 w-full items-center justify-center font-mono text-sm lg:flex">
        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>

        <div className=" p-4 h-screen rounded-md">
          <div className="flex flex-col justify-center items-center">
            <Image
              loader={imageLoader}
              src={"cool-profile-picture-87h46gcobjl5e4xu.jpg"}
              className="rounded-full border-4 border-zinc-300"
              height={100}
              width={100}
              alt="tes"
            />
            <h2 className="text-center text-xl font-semibold mt-2">Rustamaji</h2>
            <p className="text-center  mb-3">A software engineer in PT Akasia Code Academy</p>
          </div>
          <div className="grid grid-rows-3 gap-4 w-full">
          
            // {user()}
          
          </div>
        </div>
      </div> */}
      

      <div className="grid  gap-2 w-full overflow-y-auto p-4">
          
          {user()}
        
        </div>
    </>
  );
}
