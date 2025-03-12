import { workFile } from "@/data";
import { useState } from "react";
import Projects from "./Projects";
import Image from 'next/image';

type workType={
  id:string;
  category:string;
  src:string;
};
const works:workType[] = [];
workFile.forEach((item) => {
  if(item.title==="Projects"){
    works.push({
      id:"projects",
      category:"Projects",
      src:"No Projects Found!",
      });
    }
  else{
    for (let i = 1; i <= item.files; i++) {
      const fileType =
            item.title === "Videos" ? "mp4" : item.title === "Brochures" ? "pdf" : "jpeg";
      works.push({
        id: `${fileType} ${item.title.toLowerCase()}_${i}`,
        category: item.title,
        src:`work/${item.title}/${item.title.toLowerCase()}_(${i}).${fileType}`,
      });
      console.log(works);
    }
  }
});

const WorkGridLayout = () => {
  const removeExtension = (path:string) => path.replace(/\.[^/.]+$/, "");
  const [activeTab, setActiveTab] = useState("Projects");
  
  const filteredImages = works.filter((work) => work.category === activeTab);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  return (
    <div className="w-full bg-black border text-gray-100 dark:bg-black dark:border-white/[0.2] border border-nuteral-800 p-2">
      <div className="flex  flex-col md:flex-row grid grid-cols-1 md:grid-cols-4 gap-4 p-2">
        {/* Sidebar Tabs */}
        <div className="flex flex-row overflow-x-auto md:flex-col col-span-full md:col-span-1 col-start-1 gap-4 p-4 border border-white/[0.2]">
          {workFile.map((item) => (
            <button
              key={item.title}
              onClick={() => setActiveTab(item.title)}
              className={`p-3 transition rounded-lg ${
                activeTab === item.title
                  ? "bg-redpink text-gray-100 font-normal"
                  : "bg-gray-100 hover:bg-btnPrimary text-black hover:text-gray-100"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="col-span-1 md:col-span-3 flex flex-row">
          {activeTab === "Projects" ? (
            <Projects/>
          ):
          (
            <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-5 md:gap-3 space-y-4">
              {filteredImages.map((work) => (
                <div key={work.id} className="overflow-hidden rounded-sm shadow-lg">
                  {work.category==="Videos"&&
                    <video key={work.id} controls preload="metadata" className="w-auto rounded-sm shadow-lg">
                      <source src={work.src} type="video/mp4" />
                    </video>
                  }
                  {work.category==="Brochures" && (
                    <div className="relative w-full p-4 rounded-md shadow-md border border-gray-700 bg-gray-900 flex flex-col items-center justify-center">
                    {/* First page preview */}
                    <img
                        src={`${baseUrl}/${removeExtension(work.src)}.jpg`}
                        alt="PDF Preview"
                        loading="lazy"
                        width={500}
                        height={500}
                        className="w-full h-auto rounded-sm transition-transform duration-300 hover:scale-105"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.style.display = "none")}
                      />
                    <div className="absolute top-5 right-5 bg-gray-800 bg-opacity-70 px-3 py-1 text-sm text-gray-300 rounded-md">
                      📄 PDF Preview
                    </div>
                    {/* Button to open full PDF */}
                    <a
                      href={work.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full text-center inline-block px-5 py-2 text-white bg-redpink hover:bg-gray-100 hover:text-black rounded-md shadow-md transition-all duration-300"
                    >
                      Open Full PDF
                    </a>
                  </div>                
                  )}
                  {work.id.includes("jpeg")&&
                  <Image
                    src={`${baseUrl}/${work.src}`}
                    alt={activeTab}
                    loading="lazy"
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-sm transition-transform duration-300 hover:scale-105"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.style.display = "none")}
                  />}
                </div>
            ))}
            </div>
          )}
        </div>
       </div>
    </div>
  );
};

export default WorkGridLayout;