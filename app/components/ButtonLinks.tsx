import Link from "next/link";
import React from "react";

interface ButtonLinksProps {
  title: string;
  url: string;
  icon: JSX.Element;
}

export const ButtonLinks: React.FC<ButtonLinksProps> = ({
  title,
  url,
  icon,
}) => {
  return (
    <Link
      href={url}
      className='w-full flex items-center border-2 border-zinc-500 p-4 rounded-full cursor-pointer"'
    >
      {icon}
      <div className="flex justify-end ml-4">
        <p className="text-center">{title}</p>
      </div>
    </Link>
  );
};
