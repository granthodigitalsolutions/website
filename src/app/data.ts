// =========================================================
// GRANTHOR TECHNOLOGIES — CENTRALIZED CONTENT CONFIGURATION
// Replace placeholder values before production launch.
// =========================================================

export const COMPANY = {
  name: "Grantho Technologies",
  tagline: "Technology Solutions for Ambitious Organizations. Specialized in Sports Technology.",
  founded: 2025,
  email: "granthodigitalsolutions@gmail.com",
  phone: "+91 93455 31533 / 63740 91689 / 74189 85070",
  location: "Coimbatore, Tamil Nadu",
};

export const SOCIAL_LINKS = {
  linkedin: "#", // Replace with LinkedIn URL
  instagram: "#", // Replace with Instagram URL
  facebook: "#", // Replace with Facebook URL
};

// Replace placeholder values with verified Grantho Technologies statistics before production launch.
export const STATS = [
  { value: "15", suffix: "+", label: "Projects Delivered" },
  { value: "10", suffix: "+", label: "Clients Served" },
  { value: "8", suffix: "+", label: "Solutions Built" },
  { value: "4", suffix: "+", label: "Industries Served" },
];

export const CLIENT_LOGOS = [
  { name: "CLIENT 01", logo: null, alt: "Client 01 Logo" },
  { name: "CLIENT 02", logo: null, alt: "Client 02 Logo" },
  { name: "CLIENT 03", logo: null, alt: "Client 03 Logo" },
  { name: "CLIENT 04", logo: null, alt: "Client 04 Logo" },
  { name: "CLIENT 05", logo: null, alt: "Client 05 Logo" },
  { name: "CLIENT 06", logo: null, alt: "Client 06 Logo" },
  { name: "CLIENT 07", logo: null, alt: "Client 07 Logo" },
];

export const SOLUTIONS = [
  {
    id: "sports-tech",
    number: "01",
    title: "Sports Technology",
    description: "Comprehensive digital platforms and IoT systems engineered for the evolving sports ecosystem.",
    icon: "Trophy",
    href: "/sports-technology",
    capabilities: ["Tournament Management", "Academy Systems", "Athlete Management", "Sports IoT"],
  },
  {
    id: "custom-software",
    number: "02",
    title: "Custom Software",
    description: "Scalable, purpose-built software that automates operations and delivers measurable business value.",
    icon: "Code2",
    href: "/solutions",
    capabilities: ["Business Management Systems", "CRM & ERP", "Customer Portals", "Admin Dashboards"],
  },
  {
    id: "web",
    number: "03",
    title: "Web & Digital Experiences",
    description: "High-performance, SEO-optimized websites and digital platforms built to represent your brand.",
    icon: "Globe",
    href: "/solutions",
    capabilities: ["Corporate Websites", "Marketing Sites", "Landing Pages", "E-commerce"],
  },
  {
    id: "mobile",
    number: "04",
    title: "Mobile Applications",
    description: "Cross-platform mobile apps designed for engagement, performance, and real-world usability.",
    icon: "Smartphone",
    href: "/solutions",
    capabilities: ["Android & iOS", "Cross-Platform", "Customer Apps", "Employee Apps"],
  },
  {
    id: "ai",
    number: "05",
    title: "AI & Automation",
    description: "Intelligent workflows, AI-powered processes, and automation that reduce effort and drive efficiency.",
    icon: "Brain",
    href: "/solutions",
    capabilities: ["Workflow Automation", "WhatsApp Automation", "AI Workflows", "API Integrations"],
  },
  {
    id: "iot",
    number: "06",
    title: "IoT Solutions",
    description: "Connected systems and real-time monitoring solutions for smarter operations.",
    icon: "Cpu",
    href: "/solutions",
    capabilities: ["Connected Devices", "Sensor Monitoring", "Real-Time Dashboards", "Sports IoT"],
  },
  {
    id: "marketing",
    number: "07",
    title: "Digital Marketing",
    description: "Strategic brand growth through targeted digital campaigns, content, and SEO.",
    icon: "TrendingUp",
    href: "/solutions",
    capabilities: ["Brand Strategy", "Social Media", "SEO", "Digital Campaigns"],
  },
];

export const SPORTS_CAPABILITIES = [
  "Tournament Management", "Sports Academy Management", "Athlete Registration",
  "Coach Management", "Event Operations", "Result Management",
  "Ranking Systems", "Payment Integration", "Certificate Generation",
  "WhatsApp Automation", "Analytics & Reporting", "Sports IoT Systems",
];

export const INDUSTRIES = [
  {
    name: "Sports & Fitness",
    icon: "Trophy",
    featured: true,
    challenge: "Managing registrations, events, results, and communication across large sports organizations.",
    opportunity: "End-to-end digital platforms that automate every touchpoint of sports operations.",
    solutions: ["Tournament Management", "Academy Systems", "Sports IoT", "Athlete Portals"],
  },
  {
    name: "Education",
    icon: "GraduationCap",
    featured: false,
    challenge: "Streamlining student management, fee collection, and communication at scale.",
    opportunity: "Integrated management platforms that connect administrators, educators, and students.",
    solutions: ["Student Portals", "Fee Management", "Reporting Dashboards", "Mobile Apps"],
  },
  {
    name: "Healthcare",
    icon: "HeartPulse",
    featured: false,
    challenge: "Coordinating patient records, appointments, and compliance across care providers.",
    opportunity: "Secure, HIPAA-conscious digital systems that simplify care coordination.",
    solutions: ["Appointment Systems", "Patient Portals", "Reporting", "Automation"],
  },
  {
    name: "Retail",
    icon: "ShoppingBag",
    featured: false,
    challenge: "Managing inventory, customer journeys, and omnichannel experiences efficiently.",
    opportunity: "Integrated retail management systems and customer-facing digital experiences.",
    solutions: ["Inventory Management", "E-Commerce", "CRM", "Analytics"],
  },
  {
    name: "Manufacturing",
    icon: "Factory",
    featured: false,
    challenge: "Tracking production, quality, and supply chain data across complex operations.",
    opportunity: "IoT-connected monitoring and ERP systems that bring real-time visibility.",
    solutions: ["IoT Monitoring", "ERP Systems", "Production Dashboards", "Automation"],
  },
  {
    name: "Real Estate",
    icon: "Building2",
    featured: false,
    challenge: "Coordinating listings, leads, and client relationships across distributed teams.",
    opportunity: "Digital platforms that centralize property management and client engagement.",
    solutions: ["Property Portals", "CRM", "Lead Management", "Reporting"],
  },
  {
    name: "Hospitality",
    icon: "Hotel",
    featured: false,
    challenge: "Delivering seamless guest experiences while managing complex back-end operations.",
    opportunity: "Booking systems, guest portals, and automation that elevate hospitality.",
    solutions: ["Booking Systems", "Guest Portals", "WhatsApp Automation", "Analytics"],
  },
  {
    name: "Startups",
    icon: "Rocket",
    featured: false,
    challenge: "Building scalable technology fast—without compromising on quality or architecture.",
    opportunity: "Agile development partnerships that turn ideas into production-ready products.",
    solutions: ["MVP Development", "Cloud Architecture", "Mobile Apps", "Growth Tech"],
  },
  {
    name: "Professional Services",
    icon: "Briefcase",
    featured: false,
    challenge: "Managing client relationships, workflows, and documentation across service teams.",
    opportunity: "Tailored CRMs and workflow tools that streamline service delivery.",
    solutions: ["CRM Systems", "Client Portals", "Workflow Automation", "Reporting"],
  },
  {
    name: "Associations & Organizations",
    icon: "Users",
    featured: false,
    challenge: "Coordinating members, events, communications, and dues across large associations.",
    opportunity: "Unified management platforms for membership, events, and communication.",
    solutions: ["Member Management", "Event Systems", "WhatsApp Integration", "Portals"],
  },
];

export const FAQS = [
  {
    q: "What services does Grantho Technologies provide?",
    a: "Grantho Technologies provides a comprehensive range of technology solutions including sports technology platforms, custom software development, business and branding websites, mobile application development, AI and business automation, IoT systems, digital marketing, API integrations, and cloud-based applications.",
  },
  {
    q: "Does Granthor specialize in sports technology?",
    a: "Yes. Sports technology is one of our primary areas of expertise. We build digital platforms for tournament management, sports academy operations, athlete registration, event management, results and rankings, payment integration, and connected IoT systems—designed specifically for the sports ecosystem.",
  },
  {
    q: "Can Granthor build custom software for my organization?",
    a: "Absolutely. We specialize in building purpose-built software tailored to your specific operational needs. Whether it's a CRM, ERP, booking system, customer portal, or internal business tool, we engineer solutions around your real-world requirements.",
  },
  {
    q: "Do you develop IoT solutions?",
    a: "Yes. We design and develop connected IoT systems including sensor monitoring, real-time dashboards, remote monitoring, data collection, and sports IoT solutions. Our IoT work spans both hardware connectivity and the software platforms that make data actionable.",
  },
  {
    q: "Can you integrate payment gateways and WhatsApp?",
    a: "Yes. We integrate leading payment gateways into our platforms and build WhatsApp automation workflows for notifications, confirmations, and communications. These are standard components of many of our sports technology and business solutions.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We believe in long-term partnerships. After launch, we provide technical support, platform maintenance, performance monitoring, and ongoing development to ensure your solution continues to evolve with your organization.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "Yes. We work with organizations of all sizes—from early-stage startups to established enterprises and associations. For startups, we focus on building scalable foundations that can grow with the business.",
  },
];

export const PROCESS_STEPS = [
  { number: "01", title: "Discovery", description: "Deep understanding of your organization, challenges, and goals through structured discovery sessions." },
  { number: "02", title: "Strategy & Planning", description: "Defining the technology approach, architecture, timeline, and success criteria for your solution." },
  { number: "03", title: "UI/UX Design", description: "Creating intuitive, brand-aligned interfaces that prioritize clarity, usability, and user experience." },
  { number: "04", title: "Development", description: "Building your solution with clean, maintainable code and modern engineering practices." },
  { number: "05", title: "Testing", description: "Comprehensive quality assurance across functionality, performance, and user experience." },
  { number: "06", title: "Deployment", description: "Structured launch process with cloud deployment, monitoring, and production readiness." },
  { number: "07", title: "Support & Evolution", description: "Long-term technical partnership to maintain, improve, and evolve your platform." },
];

export const WHY_GRANTHOR = [
  { title: "Business-First Approach", description: "Every solution is designed around your business outcomes, not just technical deliverables." },
  { title: "Sports Tech Expertise", description: "Deep specialization in sports technology with platforms built for the real demands of sports organizations." },
  { title: "Custom-Built Solutions", description: "No templates. Every system is engineered to fit your exact operational requirements." },
  { title: "Modern Engineering", description: "Clean architecture, scalable code, and technology choices that age well." },
  { title: "Scalable Architecture", description: "Built to grow—from early deployments to large-scale operations without rebuilding." },
  { title: "Transparent Collaboration", description: "Open communication throughout every project phase. No surprises." },
  { title: "Reliable Delivery", description: "Structured processes and quality assurance that deliver what was promised." },
  { title: "Long-Term Support", description: "We partner with organizations for the long run, not just for the launch." },
];

export const CORE_VALUES = [
  { title: "Client Impact", description: "Every decision is guided by the value it creates for our clients and their organizations." },
  { title: "Deep Personalisation", description: "We listen carefully and build solutions that reflect your unique context and ambitions." },
  { title: "Earned Trust", description: "Trust is built through consistent delivery, transparent communication, and genuine partnership." },
  { title: "Full Ownership", description: "We take complete responsibility for the solutions we build—from concept to long-term performance." },
  { title: "Reliable Excellence", description: "We hold ourselves to a high standard of engineering and design across every project." },
  { title: "Simple Innovation", description: "We apply modern technology thoughtfully—solving real problems without unnecessary complexity." },
  { title: "Lasting Partnership", description: "Our goal is not to complete a project, but to build a relationship that creates lasting value." },
];

export const FEATURED_PROJECT = {
  title: "Sports & Martial Arts Management Platform",
  category: "Sports Technology",
  description: "A comprehensive digital platform designed to modernize and streamline sports and martial arts organization operations—from student registration to automated results and certification.",
  challenge: "A growing martial arts organization was managing hundreds of students, tournaments, and events through disconnected spreadsheets, manual payment records, and paper-based certification—creating administrative bottlenecks and limiting growth.",
  solution: "Grantho Technologies engineered a unified management platform that digitized every operational touchpoint, enabling the organization to scale efficiently while improving the experience for administrators, coaches, and students.",
  features: ["Student Registration", "Secure Online Payments", "Test Management", "Hall Ticket Generation", "Automated Results", "PDF Certificate Generation", "WhatsApp Notifications", "Role-Based Access Control", "Reporting Dashboard", "Event Management"],
  tech: ["React", "Node.js", "PostgreSQL", "Razorpay", "WhatsApp Business API", "AWS"],
  // Replace with actual project image
  image: null,
};

export const OPEN_POSITIONS: {
  title: string;
  type: string;
  location: string;
  description: string;
}[] = [
  // Add positions here when available
  // { title: "Full Stack Developer", type: "Full-Time", location: "Remote", description: "..." }
];

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions", hasMegaMenu: true },
  { label: "Sports Technology", href: "/sports-technology" },
  { label: "Industries", href: "/industries" },
  { label: "Our Work", href: "/work" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const SOLUTIONS_DROPDOWN = [
  { label: "Custom Software", href: "/solutions#custom-software", icon: "Code2" },
  { label: "Business & Branding Websites", href: "/solutions#web", icon: "Globe" },
  { label: "Mobile Applications", href: "/solutions#mobile", icon: "Smartphone" },
  { label: "AI & Automation", href: "/solutions#ai", icon: "Brain" },
  { label: "IoT Solutions", href: "/solutions#iot", icon: "Cpu" },
  { label: "Digital Marketing", href: "/solutions#marketing", icon: "TrendingUp" },
];
