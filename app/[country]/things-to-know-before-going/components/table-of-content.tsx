"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Info } from "lucide-react";
import { ICONS } from "@/constants/icon";

interface TableOfContentProps {
  heading: string;
  items: any;
  className?: string;
}

const TableOfContent: React.FC<TableOfContentProps> = ({
  heading,
  items,
  className = "",
}) => {
  const [isTocOpen, setIsTocOpen] = useState(false);

  return (
    <div className={className}>
      <div className="flex items-center mb-4">
        <h3 className="text-lg md:text-xl font-bold text-gray-900">
          {heading}
        </h3>
        <button
          className="ml-auto block md:hidden text-[#ff9776] text-sm font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-[#ff9776]"
          onClick={() => setIsTocOpen((v) => !v)}
          aria-expanded={isTocOpen}
          aria-controls="toc-list"
        >
          {isTocOpen ? "Hide" : "Show"}
        </button>
      </div>
      <ul
        id="toc-list"
        className={`space-y-2 md:space-y-3 transition-max-height duration-500 ease-in-out overflow-hidden md:overflow-visible ${
          isTocOpen ? "max-h-[1000px]" : "max-h-0"
        } md:max-h-full`}
        style={{ transitionProperty: "max-height" }}
      >
        {items.map((item: any, index: number) => {
          const IconComponent = ICONS[item.icon as keyof typeof ICONS] || Info;
          return (
            <li key={`toc-${item.heading}-${index}`}>
              <Link
                href={`#${item.heading.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-3 md:gap-2 text-gray-800 hover:text-gray-500 hover:underline transition-colors font-medium text-sm md:text-lg"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full !bg-white flex-shrink-0">
                  <IconComponent className="w-5 h-5 text-[#ff9776]" />
                </span>
                <span className="truncate">{item.heading}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableOfContent;
