import React, { useState } from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import {
  bio,
  email,
  emailCopyDoneTitle,
  emailCopyTitle,
  resumeDownalodFileName,
  resumeFilePath,
  resumeTitle,
} from "@/data";
import MagicButton from "./MagicButton";
import { FaDownload } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";

const Bio = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } 
      else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy"); // Older method for copying
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center text-center gap-6">
      {/* Bio Text */}
      <div className="text-2xl md:text-3xl font-normal max-w-[60ch] md:max-w-[55ch]">
        <TextGenerateEffect words={bio} />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Resume Download */}
        <a href={resumeFilePath} download={resumeDownalodFileName}>
          <MagicButton
            id="resume"
            title={resumeTitle}
            icon={<FaDownload />}
            position="left"
            otherClasses="bg-gray-100 text-black hover:bg-slate-950 hover:text-gray-100"
          />
        </a>

        {/* Copy Email */}
        <a onClick={handleCopy} className="focus:outline-none">
          <MagicButton
            id="email"
            title={copied ? emailCopyDoneTitle : emailCopyTitle}
            icon={<IoCopyOutline />}
            position="left"
            otherClasses="btn-mail bg-slate-950 text-gray-100 hover:bg-btnPrimary hover:text-gray-100"
          />
        </a>
      </div>
    </div>
  );
};

export default Bio;
