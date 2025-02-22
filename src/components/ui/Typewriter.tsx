import { motion } from "framer-motion";

interface TypewriterProps {
  text:string;
  className?:string;
  id?:string;
}


export const sentenceVariants = {
  hidden: {opacity: 0},
  // change staggerChildren variable to speed up or slow down typing.
  visible: { opacity: 1, transition: { staggerChildren: 0.1} }
};

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const Typewriter = ({ text,className,id, ...rest }: TypewriterProps) => (
  <motion.p
    key={text}
    variants={sentenceVariants}
    initial="hidden"
    whileInView="visible" // Animate only when in view
    viewport={{ once: false, amount: 0.5 }}
    className={className}
    id={id} // Re-animate when scrolling back
    {...rest}
  >
    {text.split(" ").map((char, i) => (
      <motion.span key={`${char}-${i}`} variants={letterVariants} className={`${i>1?"text-gray-100":"text-redpink"} ${i===0?"md:text-3xl text-xl":"md:text-5xl text-3xl"}`}>
        {char}{" "}
      </motion.span>
    ))}
  </motion.p>
);

export const TypewriterReg = ({ text,className,id, ...rest }: TypewriterProps) => (
  <motion.p
    key={text}
    variants={sentenceVariants}
    initial="hidden"
    whileInView="visible" // Animate only when in view
    viewport={{ once: false, amount: 0.5 }}
    className={className}
    id={id} // Re-animate when scrolling back
    {...rest}
  >
    {text.split(" ").map((char, i) => (
      <motion.span key={`${char}-${i}`} variants={letterVariants} className="text-gray-100">
        {char}{" "}
      </motion.span>
    ))}
  </motion.p>
);