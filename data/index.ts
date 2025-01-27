import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
] as const;


export const gridItems = [
  {
    id: 1,
    title: "Collaborative Problem Solver",
    description: "I prioritize client collaboration, fostering transparent and open communication to ensure project success.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Global Connectivity",
    description: "Adaptable across time zones, ensuring seamless communication with clients and teams worldwide.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Technology Stack",
    description: "Proficient in modern web development, software engineering, and machine learning, always striving for innovation.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech Enthusiast",
    description: "Passionate about development and always curious to explore cutting-edge technologies.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Building Innovative Solutions",
    description: "Currently working on a JavaScript animation library to empower developers with seamless and efficient motion design capabilities.",

    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's Build Together",
    description: "Ready to collaborate? Let's create something impactful and push the boundaries of technology.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;







export const projects = [
  {
    id: 1,
    title: "KP-DOCS : World to Collaborate on Documents",
    des: " A platform for users to collaborate on documents in real-time with AI assistance and a payment system.",
    // img: "/p1.svg",
    img:"/kpdocs.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    sourceCode: "https://github.com/eth-developer03/KP-DOCS_2.O",
  },
  {
    id: 2,
    title: "BlockBuy : A Decentralized Marketplace",
    des: "A decentralized marketplace for users to buy and sell products using blockchain technology.",
    img: "/blockbuy2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    sourceCode: "https://github.com/eth-developer03/Blockbuy",
  },
  {
    id: 3,
    title: "BrainWave : A chat application for Students and Teachers",
    des: "A chat application for Student and Teachers to communicate with each other in real-time using WebSockets.",
    img: "/brainwave.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    sourceCode: "https://github.com/eth-developer03/BrainWave-Chatapp",
  },

] as const;

export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    company: "DATEN & WISSEN",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    company: "Paisakhooz.com",
    desc: "Contributed to the development and deployment of Paisakhooz.com's official website, ensuring a seamless user experience and responsive design",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full Stack Developer Intern",
    company: "Horizon View",
    desc: "Played a key role in designing and developing an ERP system for government schools, streamlining administrative processes and enhancing operational efficiency",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  // {
  //   id: 4,
  //   title: "",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/eth-developer03",
  },
  {
    name: "LeetCode",
    img: "/leetcode.svg",
    link: "https://leetcode.com/u/Kartikeya_pandey/",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/kartikeyapandey/",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;
