import { FaCode, FaCodeBranch, FaDatabase, FaTools, FaDrawPolygon, FaGithub, FaLinkedin, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navItems = [
    { name: "Home", link:"/" },
    { name: "Skills", link: "#skills" },
    { name: "Work", link: "#work" },
    { name: "Socials", link: "#socials" },
];

export const name="Viral R. Soni";
export const email="sviral572@gmail.com";
export const positions = "Full Stack Developer & Graphic Designer";
export const bio="Full stack developer & graphic designer with 3+ years of experience in crafting impactful visual designs. seeking freelance and full-time opportunities to innovate and grow.";
export const bioKeywords = ["Full", "stack", "developer", "&", "graphic", "designer", "3+", "years", "experience"];


export const resumeTitle="Get Resume";
export const resumeFilePath="/work/Resume.pdf";
export const resumeDownalodFileName="Viral_Soni_Resume.pdf";
export const emailCopyTitle="Copy my email address";
export const emailCopyDoneTitle="Email is Copied!";
export const contactTitle="Contact Me";

export const stack = [
    {
        id:1,
        title:"Languages",
        desc:"C, C++, C#, HTML, CSS, JavaScript, Java, PHP, Python, SQL, TypeScript",
        Icon: FaCode,
    },
    {
        id:2,
        title:"Frameworks/Libraries",
        desc:"Node.js, React.js, Express.js, Next.js, Django, Tailwind CSS, Bootstrap, .NET, WordPress",
        Icon: FaCodeBranch,
    },
    {
        id:3,
        title:"Databases",
        desc:"MySQL, SQLite, MongoDB",
        Icon: FaDatabase,
    },
    {
        id:4,
        title:"Tools",
        desc:"Android Studio, Postman, Visual Studio Code, Versel, Render, Railway, Git, GitHub",
        Icon: FaTools,
    },
    {
        id:5,
        title:"Design Tools",
        desc:"Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Adobe Premier Pro",
        Icon: FaDrawPolygon,
    },
];

export const stackHeadline = "🚀 Tech what powers my work";
export const workHeadline = "🛠️ Things I've Built";
export const workFile =[
    {
        title:"Projects",
        files:1,
        ext:"",
    },
    {
        title:"Logos",
        files:9,
        ext:".jpeg",
    },
    {
        title:"Festival Post",
        files:19,
        ext:".jpeg",
    },
    {
        title:"Advertisment Post",
        files:24,
        ext:".jpeg",
    },
    {
        title:"Cards",
        files:5,
        ext:".jpeg",
    },
    {
        title:"Posters",
        files:18,
        ext:".jpeg",
    },
    {
        title:"Banners",
        files:12,
        ext:".jpeg",
    },
    {
        title:"Brochures",
        files:3,
        ext:".pdf",
    },
    {
        title:"Videos",
        files:4,
        ext:".mp4",
    },
];
export const copyright=`${new Date().getFullYear()} </VR Soni> | Built with Next.js & Tailwind CSS`;
export const qrCode="/work/whatsapp.png";
export const contactHeadline ={
    start:"Need a",
    main:"developer?",
    end:"Let’s chat! 💻"
};
export const contactTagline ={
    start:"Prefer a direct link?",
    main:"Tap here",
    end:"to message me on WhatsApp."
};

export const socialList=[
    {
        id:1,
        Icon:FaXTwitter,
        link:"https://x.com/VRSoni104?t=41u8tZUtv1gT7Fz9RYtqOA&s=09",
    },
    {
        id:2,
        Icon:FaGithub,
        link:"https://github.com/ViralSoni104",
    },
    {
        id:3,
        Icon:FaLinkedin,
        link:"https://www.linkedin.com/in/viral-soni-4a1335148",
    },
];

export const projects = [
    {
      id: 1,
      title: "My Digital Universe – Portfolio & Creations",
      description: "A personal showcase of my journey as a full-stack developer and designer. Featuring my best projects, skills, and expertise, crafted with precision and creativity for a seamless user experience.",
      techStack: ["Next.js","React.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      clyVisiting:true,
      liveLink:"https://portfolio-green-ten-71.vercel.app/",
    },
    {
      id: 2,
      title: "Zoddok – Affiliate Shopping Hub",
      description: "Zoddok is a smart affiliate shopping platform that curates and showcases products from multiple e-commerce giants like Amazon and Flipkart. Built with Django and MySQL, it enables users to browse and compare affiliate products seamlessly, redirecting them to the respective platforms for purchase.",
      techStack: ["Python(Django)", "HTML","CSS","JavaScript","Bootstrap","MySQL"],
      github: "https://github.com/ViralSoni104/Shopping-Site",
      clyVisiting:false,
      liveLink:"NA",
    },
    {
      id: 3,
      title: "Geeky's Desk – A Hub for Tech Enthusiasts",
      description: "Geeky's Desk is a modern blog website designed for tech enthusiasts, offering insightful articles, tutorials, and discussions on various technology topics. Built with Django, it provides a seamless and engaging reading experience with a clean UI and efficient content management.",
      techStack: ["Python(Django)", "HTML","CSS","JavaScript","Bootstrap","SQLite"],
      github: "https://github.com/ViralSoni104/GeekysDesk",
      clyVisiting:false,
      liveLink:"NA",
    },
    {
      id: 4,
      title: "Medica – Hospital Management System",
      description: "Medica is a comprehensive Hospital Management System (HMS) designed to streamline medical operations and enhance patient care. It enables seamless patient registration, appointment scheduling, prescription management, billing, and ward/room allocations within a secure and user-friendly interface. The system ensures efficient record-keeping, reduces administrative workload, and enhances overall hospital efficiency",
      techStack: ["C#","HTML","CSS","JavaScript","MySQL Server"],
      github: "https://github.com/ViralSoni104/Medica",
      clyVisiting:false,
      liveLink:"NA",
    },
    {
      id: 5,
      title: "MangiferaIndica - Empowering Mango Farmers",
      description: "MangiferaIndica is a digital knowledge hub designed to support mango farmers in South Gujarat. It connects farmers with experts, buyers, and fellow growers, providing expert advice and enabling direct mango sales, eliminating middlemen. The platform also allows farmers to rent out equipment for passive income. From beginners to experts, all farmers can share knowledge, experiences, and success stories through images, videos, text, audio, blogs, and even software tools. Experts can contribute valuable datasets and research papers, fostering innovation and improving farming practices for a sustainable and profitable future. Additionally, the platform offers real-time weather updates, market trends, and disease alerts in the form of news, helping farmers make informed decisions and optimize their yield.",
      techStack: ["Php","HTML","CSS","JavaScript","MySQL Server"],
      github: "https://github.com/ViralSoni104/Mango-Farming",
      clyVisiting:false,
      liveLink:"https://mangiferaindica.in/",
    },
  ];