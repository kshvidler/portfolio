import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kirill Shvidler",
  initials: "KS",
  url: "https://git.new/kshvidler",
  location: "London, United Kingdom",
  locationLink: "https://www.google.com/maps/place/london",
  description:
    "Data Scientist & Data Engineer with a proven track record of designing scalable cloud infrastructure and building AI-powered solutions. I am also a Maths enthusiast with an Masters degree in Statistics from University of Warwick",
  summary:
    "As a founding engineer at [Artera](https://artera.ae), a cutting edge art-tech platform, I architected, deployed and maintained scalable cloud infrastructure on **AWS**, optimized for high availability and cost efficiency. I possess deep practical experience in **Python**, **SQL** and **NoSQL** databases, event-driven architectures, **ETL** pipelines and **REST API**s.\n\nIn addition to my Data Engineering and Backend development skills I led the development of key AI-powered features at Artera, including the **Recommender System**, **'Image Capture'**, **'AI-tagging'** and more! \n\n Sometimes I create Telegram or Discord bots for fun, [contact me](#contact) if you need some help, I'm sure we can build something cool together! 🤗 \n\nEmail: **kshvidler@gmail.com**",
  avatarUrl: "/profile-pic-linkedin.jpeg",
  skills: [
    "#Data-Engineering",
    "#Data-Science",
    "#Machine-Learning",
    "#Backend",
    "#Dev-Ops",
    "#Web-Scraping",
    "Python",
    "PyTorch",
    "Flask",
    "AWS",
    "PostgreSQL",
    "Cassandra",
    "OpenSearch",
    "Redis",
    "Docker",
    "Javascript",
    "Three.js",
    "FAISS",
    "AWS ECS",
    "AWS Lambda",
    "Statistics",
    "Mathematics"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    //{ href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kshvidler@gmail.com",
    url: "https://dub.sh/kshvidler",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://git.new/kshvidler",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/kshvidler",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto: kshvidler@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Artera LTD",
      href: "https://artera.ae",
      badges: [],
      location: "London, UK",
      title: "Data Scientist & Cloud Engineer",
      logoUrl: "/artera-logo.png",
      start: "October 2022",
      end: "Present",
      description: "- **Designed**, **deployed**, and **maintained** all cloud infrastructure on AWS.\n" +
        "- **Developed** the core ML algorithms in **Python** powering the main features in our app, including 'Image-Capture' and our personalized recommendation algorithm designed to revolutionize art exploration.\n" +
        "- **Architected** serverless infrastructure on AWS, hosting various custom ONNX models as well as event-driven backend microservices.\n" +
        "- **Led** a team of engineers, supervising essential projects and planning the development cycle.\n" +
        "- **Secured** important tech partnerships with **AWS** and **DataStax**.",
    },
    {
      company: "Self-Employed",
      badges: [],
      href: "https://www.upwork.com",
      location: "Remote",
      title: "Data Scraping Freelancer",
      logoUrl: "/upwork.png",
      start: "November 2021",
      end: "November 2022",
      description:
        "Successfully completed 10+ different Python projects ranging from simple web-scraping requests to more challenging data-mining tasks.",
    },
    {
      company: "Sales System LLC",
      href: "",
      badges: [],
      location: "Remote",
      title: "Data Science Intern",
      logoUrl: "",
      start: "August 2020",
      end: "September 2020",
      description:
        "Implemented a web scraping script with and interactive GUI as well as a basic recommender system for lead generation in Python. It was used to automatically update a small Google Sheets database with new leads, which helped reduce the number of employees doing the same task manually, thus, saving a considerable amount of money and resources.",
    }
  ],
  education: [
    {
      school: "University of Warwick",
      href: "https://warwick.ac.uk/",
      degree: "MSc Statistics",
      logoUrl: "/warwick.webp",
      description: "Final Dissertation (Grade: 76): 'Theoretical And Practical Investigations Of The Travelling Deliveryman Problem'",
      start: "October 2021",
      end: "October 2022",
    },
    {
      school: "Cardiff University",
      href: "https://www.cardiff.ac.uk/",
      degree: "BSc Mathematics, Operational research and Statistics",
      logoUrl: "/cardiff.png",
      description: "**First Class Honours** \n\n Final Project (Grade: 76): 'Sufficient Dimension Reduction in Support Vector Regression'",
      start: "October 2018",
      end: "August 2021",
    }
  ],
  projects: [
    {
      title: "Artera",
      href: "https://onelink.to/txubcf",
      dates: "October 2022 - Present",
      active: true,
      description:
        "AI powered Art-tech platform for art discovery. (live on iOS and Android)",
      technologies: [
        "Python",
        "Flask",
        "Django",
        "AWS",
        "Vector Search",
        "PostreSQL",
        "AWS Lambda",
        "PyTorch",
        "ONNX",
        "ECS"
      ],
      links: [
        {
          type: "Website",
          href: "https://artera.ae",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "This Personal Page",
      href: "#",
      dates: "Sep 30th 2024",
      active: false,
      description:
        "Used a template and filled in text",
      technologies: [
        "Next.js",
        "Typescript",
        "git fork",
        "keyboard",
        "lack of frontend skills",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    }
  ],
  hackathons: [
    // {
    //   title: "Hack Western 5",
    //   dates: "November 23rd - 25th, 2018",
    //   location: "London, Ontario",
    //   description:
    //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
  ],
} as const;
