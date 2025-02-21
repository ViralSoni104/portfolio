"use client";
import { stackHeadline, workHeadline } from "@/data";
import { Typewriter } from "@/components/ui/Typewriter";
import WorkGridLayout from "@/components/WorkGridLayout";
import Introduction from "@/components/Introduction";
import Background from "@/components/Background";
import Bio from "@/components/Bio";
import TechStack from "@/components/TechStack";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="bg-black-100 flex flex-col items-center overflow-hidden mx-auto px-5 sm:px-10">
      <div className="min-h-screen w-[100vw] grid grid-cols-12">
        <Background />
        <div className="col-span-10 col-start-2 relative w-full">
          <Introduction />
          <div className="flex flex-col py-[2.5vh] md:py-[8vh] gap-5 items-center">
            <Bio />
            <Typewriter id="skills" className="mt-6 font-bold flex flex-wrap gap-x-2 justify-center" text={stackHeadline} />
            <TechStack />
            <Typewriter id="work" className="mt-6 font-bold flex flex-wrap gap-x-2 justify-center" text={workHeadline} />
            <WorkGridLayout />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
