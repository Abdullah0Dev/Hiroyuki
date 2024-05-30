export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I focus on working closely with clients and keeping communication open.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech lover, crazy about development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  { 
    id: 5,
    title: "Currently building a A Soccer App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Hey, want to team up on a project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "BeanScene - Coffee Chop App",
    des: "Explore an array of coffee delights tailored to your taste buds.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/lottie.png", "/ts.svg", "/redux.png", "/storage.png"],
    link: "github.com/Abdullah0Dev/Coffee-Shop-app",
  },
  {
    id: 2,
    title: "Dora - Video Sharing App",
    des: "Unlock seamless video sharing with friends, powered by a full-stack solution.",
    img: "/p2.jpg",
    iconLists: ["/node.png", "/tail.svg", "/re.svg", "/jwt.png", "/redux.png"],
    link: "github.com/Abdullah0Dev/dora_full_stack",
  },
  {
    id: 3,
    title: "Memories - Share Your Events Easily",
    des: "Experience real-time event sharing at your fingertips.",
    img: "/p3.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/node.png", "/redux.png"],
    link: "github.com/Abdullah0Dev/memories",
  },
  {
    id: 4,
    title: "Movia - Trending, Upcoming Movies",
    des: "Discover the latest, upcoming, and newly added movies with ease.",
    img: "/p4.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/redux.png", "/api.png"],
    link: "github.com/Abdullah0Dev/movie-app",
  }, 
];

export const testimonials = [
  {
    quote:
      "Working with Abdullah was fantastic. He really knows his stuff and is super reliable. Abdullah made our Application shine!",
    name: "Mohammed",
    title: "CEO of BrightWave Solutions",
    img: "/feedback_1.jpg",
  },
  {
    quote:
      "Abdullah was great to work with. He always delivered on time and exceeded our expectations. Highly recommend him!",
    name: "Liam Martinez",
    title: "Marketing Manager at NextGen Media",
    img: "/feedback_2.jpg",
  },
  {
    quote:
      "Abdullah is a true professional. His dedication and passion for his work are evident in everything he does. We love our new site!",
    name: "Noah John",
    title: "Founder of EcoTech Innovations",
    img: "/feedback_3.jpg",
  },
  {
    quote:
      "Abdullah brought our vision to life with ease. He’s talented, punctual, and a joy to work with. Our project couldn’t have gone smoother.",
    name: "Ethan Smith",
    title: "Product Manager at CloudSync",
    img: "/feedback_4.jpg",
  },
  {
    quote:
      "Teaming up with Abdullah was a great experience. His skills and enthusiasm made all the difference. Our Application looks amazing!",
    name: "Adam Johnson",
    title: "Creative Director at PixelPerfect Designs",
    img: "/feedback_5.jpg",
  },
];



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
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Dev",
    desc: "Played a role in developing both the backend and frontend of a mobile platform with React Native and Node.js, boosting its interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - Upwork",
    desc: "developed and Improve  mobile apps for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/abdullah0Dev/",
    img: "/git.svg",
  },
  {
    id: 2,
    link: "https://wa.me/+201011245872?text=Hello%20Abdullah!",
    img: "/whatsapp.webp",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/abdullah1dev/",
    img: "/link.svg",
  },
];
