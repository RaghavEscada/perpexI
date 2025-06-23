import React, { useState, useEffect } from "react";
import { Star, Building2, TrendingUp, Users, Award, Briefcase, ArrowRight, Sparkles, Globe, Target, Zap, Crown } from "lucide-react";
import { AnimatedTestimonialsDemo } from "@/data/data";
import { motion } from "framer-motion";

const jobRoles = [
  { 
    title: "Software Engineer", 
    salary: "₹8-15 LPA",
    icon: "💻",
    growth: "+23%",
    openings: "2,847"
  },
  { 
    title: "Data Analyst", 
    salary: "₹6-12 LPA",
    icon: "📊",
    growth: "+18%",
    openings: "1,543"
  },
  { 
    title: "UI/UX Designer", 
    salary: "₹5-10 LPA",
    icon: "🎨",
    growth: "+31%",
    openings: "892"
  },
  { 
    title: "Product Manager", 
    salary: "₹12-25 LPA",
    icon: "🚀",
    growth: "+42%",
    openings: "651"
  },
];

const LogoMarquee = ({ logos, direction = "left", speed = 25 }: { logos: any[], direction?: "left" | "right", speed?: number }) => {
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
                    // Fallback to text if image fails
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<span class="text-xs font-semibold text-white/80">${logo.name}</span>`;
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
  { name: "Byjus", url: "https://cdn.brandfetch.io/idtntkVe3D/theme/dark/idB5akcINh.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Upgrad", url: "https://cdn.brandfetch.io/idvsI-ggxm/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Interval", url: "https://www.intervaledu.com/static/web/images/logo/logo-dark.png" },
  { name: "HCL Tech", url: "https://cdn.brandfetch.io/idMbiw2eNO/w/960/h/960/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "XPayBack", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8w5cYFHW3PdWDJSKF4vWdbptQxodZ8nC68Q&s" },
];

const logos2 = [
  { name: "Amazon", url: "https://cdn.brandfetch.io/ideEwHhDrj/w/1024/h/300/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Google", url: "https://cdn.brandfetch.io/idOeG0NYWQ/w/1448/h/1448/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Microsoft", url: "https://cdn.brandfetch.io/idkGNnB58L/w/280/h/80/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "IBM", url: "https://cdn.brandfetch.io/id4Ol9YiiE/w/577/h/239/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Oracle", url: "https://cdn.brandfetch.io/idAuvto6zH/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Salesforce", url: "https://cdn.brandfetch.io/idTlKvL568/w/206/h/41/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" },
];

const metrics = [
  { 
    label: "Placement Rate", 
    value: "97%", 
    icon: TrendingUp, 
    description: "Students placed successfully",
    change: "+5.2%"
  },
  { 
    label: "Highest Package", 
    value: "₹32 LPA", 
    icon: Crown, 
    description: "Record breaking offer",
    change: "+12%"
  },
  { 
    label: "Average Package", 
    value: "₹9.5 LPA", 
    icon: Briefcase, 
    description: "Industry leading average",
    change: "+8.3%"
  },
  { 
    label: "Dream Companies", 
    value: "120+", 
    icon: Building2, 
    description: "Top-tier partnerships",
    change: "+15"
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

export default function PlacementsPage() {
  // The return statement is commented out for debugging or temporary removal.
  // Original return and component code is temporarily disabled.
}