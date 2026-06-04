export const navLinks = [
  { href: "#about", name: "About" },
  { href: "#projects", name: "Projects" },
  { href: "#experience", name: "Experience" },
  { href: "#contact", name: "Contact" },
];

export const techStacks = [
  "Next.js",
  "React.js",
  "PHP",
  "Go",
  "Javascript",
  "HTML",
  "Tailwind CSS",
  "PostgreSQL",
  "MySQL",
  "Git",
  "Postman",
  "Trello",
];

export const education = [
  {
    title: "Koda Tech Academy",
    description: "Fullstack Website Developer & Golang (May - Sep 2024)",
  },
  {
    title: "Universitas Muhammadiyah Yogyakarta",
    description: "International Relations (Sep 2018 - Apr 2022)",
  },
];

export const projects = [
  {
    title: "Tickhub",
    description:
      "Full-featured online live event booking platform with responsive design for both mobile and desktop. Integrated event listing, ticket category, and user authentication using Golang and PostgreSQL, secured with JWT.",
    techStack: ["React.js", "Go", "PostgreSQL"],
    image: "/projects/tickhub.png",
    link: "https://github.com/fajryalvin12/fgh21-react-event-organizer",
  },
  {
    title: "KasirApp",
    description:
      "Point-of-sale dashboard with real-time product management, transaction tracking, and low-stock alerts. Features role-based auth for admin and cashier, with clean dashboard UI.",
    techStack: ["React.js", "Node.js", "PostgreSQL", "JWT"],
    image: "/projects/kasirapp.png",
    link: "https://github.com/fajryalvin12/inventory-transaction-management",
  },
  {
    title: "Shortify",
    description:
      "Minimal URL shortener — paste a long link, get a clean short one instantly. Built with a clean dark UI and instant redirect handling.",
    techStack: ["Next.js", "Go", "PostgreSQL"],
    image: "/projects/shortify.png",
    link: "https://github.com/fajryalvin12/url-shortener",
  },
  {
    title: "ERP Ticketing",
    description:
      "Internal ticketing system for ERP complaint management with priority levels (High/Medium/Low), ticket tracking by status (Open/In Progress/Closed), and admin dashboard with analytics per application.",
    techStack: ["React.js", "Express.js", "Prisma ORM", "PostgreSQL"],
    image: "/projects/ticketing-erp.png",
    link: "https://github.com/fajryalvin12/ticketing-erp-yakesma",
  },
];

export const experiences = [
  {
    title: "Programmer – Fullstack Web Developer",
    company: "Kementerian Pekerjaan Umum",
    period: "Apr 2025 – Des 2025",
    jobdesc: [
      "Developed core modules of E-Kinerja web app (PHP Native, jQuery, MySQL) for SKP (employee performance system).",
      "Enhanced SKP Evaluation & RHK modules with new rating logic, improving usability for >1,000 employees.",
      "Integrated e-HRM API with fallback logic and automated logging for reliable synchronization.",
      "Improved system performance by fixing critical bugs, optimizing XHR, and implementing caching & CRON jobs.",
    ],
  },
  {
    title: "Fullstack Web Developer",
    company: "PT Godigi Prima Satya",
    period: "Des 2024 – Mar 2025",
    jobdesc: [
      "Built scalable APIs with Go & PostgreSQL for backend web apps.",
      "Optimized queries & improved authentication security, and built CRUD for mapping residence and house members.",
      "Built frontend side including home, residence list, member list and monthly tax management in Morizen.",
    ],
  },
  {
    title: "IT Support & Quality Control",
    company: "PT Tiga Griya Wibawa",
    period: "Okt 2024 – Nov 2024",
    jobdesc: [
      "Conducted application training for +500 Facilitators/Surveyors directly onsite.",
      "Acted as Help Desk Staff to ensure facilitators could operate the application smoothly.",
      "Performed basic troubleshooting and escalated issues to upper level when needed.",
      "Validated data quality from 800+ facilitator submissions during survey agendas.",
    ],
  },
  {
    title: "Customer First Squad",
    company: "IGT Solutions",
    period: "Sep 2023 – Apr 2024",
    jobdesc: [
      "Resolved 60+ tickets/chats daily via ticketing and CRM platforms.",
      "Initiated outbound calls for escalated cases to communicate resolutions effectively.",
      "Maintained strict adherence to SOP with zero tolerance for deviations.",
      "Participated in weekly coaching sessions to assess and enhance performance metrics.",
    ],
  },
  {
    title: "Customer Success Specialist",
    company: "Teleperformance",
    period: "Jul 2022 – Jul 2023",
    jobdesc: [
      "Responded to 5,000+ incoming chats and 1,000+ in-app emails from users.",
      "Escalated complex or urgent inquiries to the authorized team or relevant division.",
      "Generated daily reports summarizing resolved inquiries with internal remarks.",
      "Maintained SOP adherence to ensure accuracy and appropriateness of information provided.",
    ],
  },
  {
    title: "Governance Bureau Intern",
    company: "Kantor Gubernur DI Yogyakarta",
    period: "Des 2021",
    jobdesc: [
      "Assisted in village administration by rechecking daily vaccination reports in DI Yogyakarta.",
      "Participated as Operator in the Sosialisasi Kelembagaan Asli agenda from the Bureau of Governance.",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/fajryalvin12",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/fajryalvin",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/fajryalvin",
    icon: "instagram",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/62XXXXXXXXXX",
    icon: "whatsapp",
    isWA: true,
  },
];
