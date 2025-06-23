import React, { useState, useEffect } from "react";
import { Star, Building2, TrendingUp, Users, Award, Briefcase, ArrowRight, Sparkles, Globe, Target, Zap, Crown } from "lucide-react";
import { motion } from "framer-motion";

const jobRoles = [
  { 
    title: "Corporate Trainer", 
    salary: "₹10-20 LPA",
    icon: "🎤",
    growth: "+28%",
    openings: "1,200"
  },
  { 
    title: "Learning & Development Manager", 
    salary: "₹12-25 LPA",
    icon: "📚",
    growth: "+22%",
    openings: "850"
  },
  { 
    title: "HR Business Partner", 
    salary: "₹8-18 LPA",
    icon: "🤝",
    growth: "+19%",
    openings: "1,050"
  },
  { 
    title: "Organizational Development Consultant", 
    salary: "₹15-30 LPA",
    icon: "🏢",
    growth: "+25%",
    openings: "600"
  },
];

const LogoMarquee= ({ logos, direction = "left", speed = 25 }: { logos: any[], direction?: "left" | "right", speed?: number }) => {
  return (
    <div className="relative overflow-hidden py-2">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {Array(8).fill(null).map((_, index) => (
          <div key={index} className="flex gap-8 shrink-0">
            {logos.map((logo, logoIndex) => (
              <motion.div
                key={logoIndex}
                className="flex items-center justify-center h-12 w-32 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-blue-400/20 shadow-lg"
                whileHover={{ 
                  scale: 1.05, 
                  y: -3, 
                  backgroundColor: "rgba(255,255,255,0.15)",
                  borderColor: "rgba(59,130,246,0.4)"
                }}
                transition={{ duration: 0.2 }}
              >
                {/* <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="h-8 w-auto max-w-24 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<span class=\"text-xs font-semibold text-white/80\">${logo.name}</span>`;
                  }}
                /> */}
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const logos1 = [
  { name: "Tata Consultancy Services", url: "https://cdn.brandfetch.io/idw382nG0m/w/398/h/398/theme/dark/icon.png" },
  { name: "Infosys", url: "https://cdn.brandfetch.io/idkGNnB58L/w/280/h/80/theme/dark/logo.png" },
  { name: "Wipro", url: "https://cdn.brandfetch.io/idOeG0NYWQ/w/1448/h/1448/theme/dark/icon.jpeg" },
  { name: "Accenture", url: "https://cdn.brandfetch.io/idSUrLOWbH/w/398/h/398/theme/dark/icon.png" },
  { name: "Capgemini", url: "https://cdn.brandfetch.io/id4J58sqa_/w/512/h/512/theme/dark/icon.png" },
];

const logos2 = [
  { name: "Deloitte", url: "https://cdn.brandfetch.io/idAnDTFapY/w/398/h/398/theme/dark/icon.png" },
  { name: "EY", url: "https://cdn.brandfetch.io/idkmTr6hAO/w/398/h/398/theme/dark/icon.png" },
  { name: "KPMG", url: "https://cdn.brandfetch.io/idGbIiG9e-/w/398/h/398/theme/dark/icon.png" },
  { name: "PwC", url: "https://cdn.brandfetch.io/idw382nG0m/w/398/h/398/theme/dark/icon.png" },
  { name: "IBM", url: "https://cdn.brandfetch.io/id4Ol9YiiE/w/577/h/239/theme/dark/logo.png" },
];

const metrics = [
  { 
    label: "Corporate Clients", 
    value: "200+", 
    icon: Building2, 
    description: "Top organizations trained",
    change: "+15%"
  },
  { 
    label: "Avg. Feedback Score", 
    value: "4.8/5", 
    icon: Star, 
    description: "Trainer excellence",
    change: "+0.2"
  },
  { 
    label: "Workshops Conducted", 
    value: "500+", 
    icon: Award, 
    description: "Sessions delivered",
    change: "+10%"
  },
  { 
    label: "Placement Support", 
    value: "98%", 
    icon: TrendingUp, 
    description: "Successful transitions",
    change: "+3%"
  },
];

const AnimatedCounter = ({ value, duration = 2000 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const numericValue = parseInt(value.replace(/[^\d]/g, ''));
    const increment = numericValue / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, duration]);
  return <span>{count}{value.replace(/\d/g, '').replace(/[₹\+]/g, '')}</span>;
};

const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-60 right-20 w-[28rem] h-[28rem] bg-gradient-to-r from-blue-500/5 to-blue-700/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-300/5 to-blue-600/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
    <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-600/3 to-blue-800/3 rounded-full blur-3xl animate-pulse delay-3000"></div>
  </div>
);

const GridPattern = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,#000_60%,transparent_100%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.1)_0%,transparent_50%)]"></div>
  </div>
);

export default function CorporateTrainingPage() {
  // The return statement is commented out for debugging or temporary removal.
  // Original return and component code is temporarily disabled.
}