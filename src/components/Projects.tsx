import { projects } from "@/data";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { LinkPreview } from "./ui/LinkPreview";

export default function Projects() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative w-full border border-white/[0.2] p-4 md:p-6 shadow-md bg-black transition-all duration-300 hover:shadow-lg hover:border-redpink flex flex-col"
            whileHover={{ scale: 1.02 }}
          >
            {/* Header with Icon */}
            <div className="mb-2">
              <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
            </div>

            {/* Description */}
            <p className="text-gray-400 traking-widest text-sm mb-5">{project.description}</p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`${index===0?"bg-redpink":"bg-gray-700"} text-xs px-3 py-1 text-gray-200 rounded-md`}
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.clyVisiting && 
              <LinkPreview url={project.liveLink} className="mt-auto mb-3 md:-mb-4 flex items-center justify-center gap-[12] bg-white/40 opacity-65 text-white px-3 py-2 rounded-md">
                <span className="animate-ping bg-contactCol rounded-xl w-2 h-2 -ml-1"></span>
                <p>Currently Visiting</p>
              </LinkPreview>
            }
            {(project.liveLink!=="NA"&&!project.clyVisiting) && 
              <LinkPreview url={project.liveLink} className="flex flex-row gap-2 items-center justify-center mb-3 bg-white/40 opacity-65 px-3 py-2 rounded-md hover:bg-black hover:border border-white/[0.4]">
                <FaLink className="text-lg"/>
                <p>Mangifera Indica</p>
              </LinkPreview>
            }
            {/* GitHub Button (Aligned Bottom) */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex w-full items-center justify-center gap-2 bg-redpink text-gray-100 py-2 px-4 rounded-md shadow-md hover:bg-black hover:border border-gray-100 hover:text-white transition-all duration-300"
            >
              <FaGithub className="text-lg" /> View Code
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}