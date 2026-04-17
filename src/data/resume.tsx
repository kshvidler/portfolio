import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kirill Shvidler",
  initials: "KS",
  url: "https://git.new/kshvidler",
  location: "London, United Kingdom",
  locationLink: "https://www.google.com/maps/place/london",
  description:
    "Founding Engineer with full ownership across cloud infrastructure, backend systems, and data/ML platforms. Originally trained as a mathematician (MSc from the University of Warwick), I decompose complex problems into tractable systems and build scalable, production-grade solutions end-to-end.",
  summary:
    "As the **second hire** and Founding Engineer at [Artera](https://artera.ae), I built the entire backend and AWS infrastructure from scratch, scaling to a platform with **~1M artworks** and **700k+ AI-generated audio guides**. I operate at a **CTO-level scope** — contributing to product strategy, partnerships, and technical direction while leading engineering execution.\n\nDeep hands-on experience across **Python**, **TypeScript**, **AWS** (ECS, Lambda, RDS, S3, SQS, Kinesis), **SQL/NoSQL** databases, event-driven architectures, **ETL** pipelines and **REST APIs**. I led the development of core AI-powered features including the **Recommender System**, **'Shazam for Art' Image Capture**, **AskArtera** (RAG agent), and large-scale **TTS audio guide pipelines**.\n\nCurrently also building [dartpost.app](https://dartpost.app), a SaaS for AI-powered content creation and scheduling on X. [Contact me](#contact) if you want to build something cool together! 🤗 \n\nEmail: [**kshvidler@gmail.com**](mailto:kshvidler@gmail.com)",
  avatarUrl: "/profile-pic-linkedin.jpeg",
  skills: [
    "#Data-Engineering",
    "#Data-Science",
    "#Machine-Learning",
    "#Backend",
    "#Dev-Ops",
    "#Web-Scraping",
    "Python",
    "TypeScript",
    "PyTorch",
    "scikit-learn",
    "Pandas",
    "PySpark",
    "Flask",
    "FastAPI",
    "Django",
    "Next.js",
    "React",
    "React Native",
    "AWS",
    "AWS ECS",
    "AWS Lambda",
    "Docker",
    "PostgreSQL",
    "Cassandra",
    "OpenSearch",
    "DynamoDB",
    "Redis",
    "FAISS",
    "OpenCV",
    "RAG",
    "Stripe",
    "OAuth",
    "Three.js",
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
      Twitter: {
        name: "X",
        url: "https://x.com/kshvidler",
        icon: Icons.x,

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
      title: "Founding Engineer",
      logoUrl: "/artera-logo.png",
      start: "October 2022",
      end: "Present",
      description: "- Joined as the **second hire** and built the entire backend and AWS infrastructure from scratch, scaling to a platform with **~1M artworks** and **700k+ AI-generated audio guides**.\n" +
        "- **Designed and deployed** the full AWS architecture: VPC, IAM, ECS (EC2), Lambda, RDS (PostgreSQL), Cassandra, S3, CloudFront, SQS, Kinesis — with CI/CD, monitoring and logging.\n" +
        "- **Built** core backend services in **Django REST, Flask and FastAPI** — auth, payments (Stripe, Apple/Google), admin platforms and dozens of serverless microservices.\n" +
        "- **Designed** large-scale ETL pipelines (Python, PySpark) turning messy source data into a structured, deduplicated dataset of ~1M artworks.\n" +
        "- **Built** hybrid search combining **FAISS** vector search with keyword retrieval, and a TikTok-style recommender using fine-tuned **CLIP** embeddings.\n" +
        "- **Built** 'Shazam for Art' — embeddings + **YOLO** object detection + keypoint matching for robust painting identification.\n" +
        "- **Built [AskArtera](https://askartera.com)** — an AI agent answering art queries using internal data + web grounding (**RAG**).\n" +
        "- **Built** automated pipelines generating **700k+ AI audio guides** using open-source TTS, plus serverless **Whisper** ASR pipelines for voice comments.\n" +
        "- **Designed** scaled AI-driven SEO strategy generating programmatic artwork pages — achieving **millions of monthly Google impressions**.\n" +
        "- **Conceived and executed** a B2C → B2B pivot, including an end-to-end museum/gallery discovery system (scraping → backend → frontend maps).\n" +
        "- **Led and mentored** a team of 3 engineers; secured tech partnerships with **AWS** and **DataStax** as primary technical contact.\n" +
        "- **Delivered** cross-domain work including immersive 3D visualisation (CLUSTA) displayed at **FRAMELESS London**.",
    },
    {
      company: "Self-Employed",
      badges: [],
      href: "https://www.upwork.com",
      location: "Remote",
      title: "Freelance Python Developer (Part-time)",
      logoUrl: "/upwork.png",
      start: "2019",
      end: "2022",
      description:
        "Delivered freelance projects in data scraping, automation, and data mining. Built custom web scrapers and ETL pipelines extracting structured data from unstructured sources, plus small-scale ML models (PyTorch, scikit-learn) for classification and prediction tasks.",
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
      title: "DartPost",
      href: "https://dartpost.app",
      dates: "2025 - Present",
      active: true,
      description:
        "Full end-to-end SaaS for AI-powered content creation and scheduling on X (Twitter). Real-time AI-assisted writing (chat + editor with streaming), scheduling via EventBridge + Lambda, Stripe subscriptions, and BYOK OAuth integrations.",
      technologies: [
        "FastAPI",
        "Next.js",
        "Supabase",
        "AWS",
        "Stripe",
        "LLMs"
      ],
      links: [
        {
          type: "Website",
          href: "https://dartpost.app",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/dartpost.png",
      video:
        "",
    },
    {
      title: "AskArtera",
      href: "https://askartera.com",
      dates: "2025",
      active: true,
      description:
        "AI agent capable of answering art-related queries using internal data and external web grounding (RAG). Built at Artera.",
      technologies: [
        "Python",
        "LLMs",
        "RAG",
        "FAISS",
        "AWS"
      ],
      links: [
        {
          type: "Website",
          href: "https://askartera.com",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/artera-logo.png",
      video:
        "",
    },
    {
      title: "AlgoVault",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Decentralized marketplace for publishing and backing trading algorithms. Built for the EasyA x Algorand hackathon — selected as a Top 10 team.",
      technologies: [
        "Algorand",
        "Next.js",
        "Python"
      ],
      links: [],
      image: "",
      video:
        "",
    },
    {
      title: "Three.js Iris",
      href: "https://kirillshvidler.com/iris",
      dates: "2024",
      active: false,
      description:
        "Just a cool visualization i've done.",
      technologies: [
        "Three.js",
        "HTML",
        "JavaScript",
        "Creative Work"
      ],
      links: [
        {
          type: "Visualization",
          href: "https://kirillshvidler.com/iris",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/iris.jpg",
      video:
        "",
    },
    {
      title: "'Herbie' AI Discord Agent",
      href: "https://herbie.kirillshvidler.com",
      dates: "2025",
      active: true,
      description:
        "(In Development) Self-aware, interactive Discord AI companion named Herbie.",
      technologies: [
        "React",
        "LLMs",
        "Shadcn UI",
        "Discord SDK",
        "Python"
      ],
      links: [
        {
          type: "Website",
          href: "https://herbie.kirillshvidler.com",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/herbie-avatar.png",
      video:
        "",
    },
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
      image: "/artera-logo.png",
      video:
        "",
    },
    {
      title: "This Website",
      href: "#",
      dates: "2024",
      active: false,
      description:
        "Personal portfolio page, modified a public Next.js template",
      technologies: [
        "Next.js",
        "Typescript",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/kshvidler/portfolio",
          icon: <Icons.github className="size-3" />,
        }
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
