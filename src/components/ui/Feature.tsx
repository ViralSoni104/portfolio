import { cn } from "@/lib/utils";
import React from "react";

export const Feature = ({
  title,
  desc,
  IconComponent,
  index,
}: {
  title: string;
  desc: string;
  IconComponent:React.ElementType;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-7 relative group/feature dark:border-neutral-800",
        (index === 1 || index === 4) && "lg:border-l dark:border-neutral-800",
        "lg:border-b dark:border-neutral-800"
      )}
    >
      {index <= 5 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      
        <div className="mb-4 relative z-10 px-10 dark:text-neutral-400">
        {<IconComponent size={18}/>}

        </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-redpink transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-100 dark:text-gray-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-100 dark:text-gray-100 max-w-xs relative z-10 px-10">
        {desc}
      </p>
    </div>
  );
};
