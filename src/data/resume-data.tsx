import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Sam Begin",
  initials: "SB",
  location: "Troy, NY, USA",
  locationLink: "https://www.google.com/maps/place/Troy,+NY",
  about: "CS & Economics @ RPI | SRE Intern @ Cisco Meraki",
  summary: (
    <>
      Computer Science and Economics student at Rensselaer Polytechnic Institute (Class of 2026) 
      with experience in site reliability engineering, distributed systems, and cloud-native 
      infrastructure. Skilled in Python, C++, Kubernetes, Terraform, and observability tools, with 
      a passion for building scalable systems and contributing to open-source projects.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/104333709?v=4",
  personalWebsiteUrl: "https://sambegin.dev",
  contact: {
    email: "sam.begin9@gmail.com",
    tel: "+18022745444",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sbegin0",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "http://www.linkedin.com/in/sam-begin/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Rensselaer Polytechnic Institute",
      degree: "B.S. Computer Science, Economics",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Cisco Meraki",
      link: "https://meraki.cisco.com/",
      badges: ["SRE", "Distributed Systems", "Cloud"],
      title: "Site Reliability Engineer Intern",
      start: "Jun.",
      end: "Aug. 2025",
      description: (
        <>
          Developed async generative AI tool to improve on-call shift handovers, 
          decreasing time by 80%.  
          <ul className="list-inside list-disc">
            <li>Built scalable backend infrastructure supporting 10B+ daily requests</li>
            <li>Engineered monitoring, deployment, and reliability systems</li>
            <li>Collaborated across teams on post-mortems and root-cause analysis</li>
          </ul>
        </>
      ),
    },
    {
      company: "Linux Foundation – Istio Service Mesh",
      link: "https://istio.io/",
      badges: ["Open Source", "JavaScript", "Hugo"],
      title: "Software Engineer Intern",
      start: "Mar.",
      end: "May 2025",
      description: (
        <>
          Redesigned istio.io using JavaScript and Hugo to separate evergreen and 
          versioned content.  
          <ul className="list-inside list-disc">
            <li>Archived full site releases for clean version switching</li>
            <li>Improved clarity and maintainability for developers worldwide</li>
          </ul>
        </>
      ),
    },
    {
      company: "Rensselaer Center for Open Source",
      link: "https://rcos.io/",
      badges: ["Mentorship", "Cloud Native", "Cilium"],
      title: "Student Mentor",
      start: "Jan.",
      end: "Dec. 2024",
      description: (
        <>
          Mentored students on open-source projects and contributed to Cilium CNI.  
          <ul className="list-inside list-disc">
            <li>Reviewed and graded 30+ projects, guided 20+ students</li>
            <li>Developed CNI Test Suite for optimization and testing</li>
            <li>Spoke at Cloud Native Security Con 2024</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Python",
    "C++",
    "C",
    "Java",
    "Bash",
    "Kubernetes",
    "Terraform",
    "AWS",
    "Grafana",
    "Prometheus",
    "Helm",
    "ElasticStack",
    "CI/CD",
    "Linux/Unix",
  ],
  projects: [
    {
      title: "AI Focus Tracker",
      techStack: ["Next.js 15", "TypeScript", "MediaPipe", "Zustand", "Chart.js"],
      description:
        "AI-powered productivity tool that tracks user focus in real-time using webcam-based ML models with MediaPipe FaceMesh (478 facial landmarks) and advanced iris-based gaze detection, achieving 30 FPS with 100% client-side processing for privacy.",
      link: {
        label: "GitHub",
        href: "https://github.com/sbegin0/StudyBuddy",
      },
    },
    {
      title: "eBPF Anomaly Detection in Encrypted Traffic",
      techStack: ["C", "Python", "Ubuntu", "IDS Tools"],
      description:
        "Researched detecting anomalies in high-volume encrypted network traffic using eBPF. Compared with conventional IDS (Snort, Suricata, Zeek).",
    },
    {
      title: "Cilium Container Network Interface",
      techStack: ["Kubernetes", "Azure", "Terraform", "Prometheus", "Grafana"],
      description:
        "Led team contributing to Cilium CNI, developing a Test Suite for optimization and testing of networking parameters.",
      link: {
        label: "Cilium Contribution",
        href: "https://github.com/smoleyxd/RCOS-cilium",
      },
    },
  ],
} as const;
