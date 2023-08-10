import { TopItemsProps } from "@/types/homeTypes";
import Link from "next/link";
import React from "react";

const TopItems: React.FC<TopItemsProps> = ({ name, icon: Icon }) => {
  return (
    <Link
      href="/"
      className="cursor-pointer flex items-center md:text-base text-xs"
    >
      <span className="mr-2">
        <Icon />
      </span>
      {name}
    </Link>
  );
};

export default TopItems;
