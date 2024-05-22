import React from "react";
import Image from "next/image";
import Link from "next/link";

const UserContact = () => {
  const imageLoader = ({ src, width, quality }: any) => {
    return `https://wallpapers.com/images/featured/${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  return (
    
    <Link href={"/message"} className="flex justify-start items-center border p-2 rounded-md cursor-pointer">    
      <Image
        loader={imageLoader}
        src={"cool-profile-picture-87h46gcobjl5e4xu.jpg"}
        className="rounded-full border-2 border-zinc-300"
        alt="user"
        width={50}
        height={50}
      />
      <div className="ml-4">
      <h1 className="text-md font-bold">Jhon Doe</h1>
      <p className="text-xs font-light">Lorem ipsum dolor.....</p>
      </div>
    </Link>
  );
};

export default UserContact;
