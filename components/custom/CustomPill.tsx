"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export default function CustomPill({ city }: { city: string }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div
        className={cn(
          "px-3 py-1 border border-slate-200 rounded-full flex flex-row justify-start items-center transition-all text-slate-400 hover:bg-rose-50 hover:text-rose-500 hover:border-rose-200 cursor-pointer",
          isClicked &&
            "border-rose-500 text-rose-500 bg-rose-50 hover:border-rose-500"
        )}
        onClick={handleClick}
      >
        <p>{city}</p>
      </div>
    </>
  );
}
