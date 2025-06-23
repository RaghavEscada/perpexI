import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  GraduationCap, TrendingUp, Target, Building2, ArrowRight, Sparkles, Zap, Star
} from "lucide-react";

const pillars = [
  {
    id: 1,
    number: "01",
    title: "PerpeX Institute",
    description: "Comprehensive training ecosystem",
    icon: GraduationCap,
    highlights: [
      "Hands-on practical modules",
      "Industry expert mentorship", 
      "Real-world case studies",
      "Professional skill development",
      "Continuous learning support"
    ],
    color: "emerald",
    accent: "from-emerald-400 to-teal-500",
    pattern: "geometric"
  },
  {
    id: 2,
    number: "02", 
    title: "SaleX",
    description: "Business development excellence",
    icon: TrendingUp,
    highlights: [
      "Client-centric sales funnels",
      "B2B sales strategies",
      "Revenue optimization",
      "Sales team training",
      "Performance analytics"
    ],
    color: "blue",
    accent: "from-blue-400 to-indigo-600",
    pattern: "waves"
  },
  {
    id: 3,
    number: "03",
    title: "MarketriX", 
    description: "Strategic marketing solutions",
    icon: Target,
    highlights: [
      "Lead generation systems",
      "Organic marketing strategies",
      "Technology integration",
      "Brand visibility enhancement",
      "Growth-focused campaigns"
    ],
    color: "purple",
    accent: "from-purple-400 to-pink-600",
    pattern: "dots"
  },
  {
    id: 4,
    number: "04",
    title: "PlaceX",
    description: "Talent placement hub",
    icon: Building2,
    highlights: [
      "Campus-industry connections",
      "Job matching algorithms",
      "Recruiter network access",
      "Career guidance support",
      "Placement success tracking"
    ],
    color: "orange",
    accent: "from-orange-400 to-red-500",
    pattern: "hexagon"
  }
];

const PillarCard = ({ pillar }: { pillar: any }) => {
  const Icon = pillar.icon;
  
  return (
    <div className="w-screen min-w-screen flex-shrink-0 h-full px-8 flex items-center justify-center relative">
      {/* Content card - Much taller now */}
      <div className="relative max-w-3xl w-full mx-auto ml-auto mr-12 h-[95vh] overflow-hidden">
        {/* Main card with unique design */}
        <div className="relative w-full h-full bg-black/40 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden">
          
          {/* Unique pattern overlay based on pillar */}
          <div className="absolute inset-0 opacity-5">
            {pillar.pattern === "geometric" && (
              <div className="absolute inset-0" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
            )}
            {pillar.pattern === "waves" && (
              <div className="absolute inset-0" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C17.108 2.271 14.924 3.258 13.661 4.02L8.04 6.73C1.373 10.568.22 11.423 0 12c.22.577 1.373 1.432 8.04 5.27l5.621 2.71c1.263.762 3.447 1.749 7.523 2.73h6.335c-2.064-.601-4.249-1.352-6.724-2.275L18.027 19.76C8.222 16.094 1.993 14.697 8.627 14.697c-10.562 0-15.888 1.278-25.371 4.972C16.64 19.347 22.647 20 33 20c10.271 0 15.362-1.222 24.629-4.928C66.884 14.434 81.317 14 93.375 14c5.898 0 6.875-.61 6.875-2 0-1.39-.977-2-6.875-2-12.058 0-26.491-.434-35.746 1.072C48.362 7.778 43.271 6 33 6 22.647 6 16.64.653 7.04 4.928 4.373 6.308 1.995 8.094 0 12c.22-.577 1.373-1.432 8.04-5.27l5.621-2.71C15.447 3.258 17.631 2.271 21.659 2.271h-6.335z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`}}></div>
            )}
            {pillar.pattern === "dots" && (
              <div className="absolute inset-0" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`}}></div>
            )}
            {pillar.pattern === "hexagon" && (
              <div className="absolute inset-0" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 10.99-6.34V17.9L13.99 11.56 3 17.9z'/%3E%3C/g%3E%3C/svg%3E")`}}></div>
            )}
          </div>
          
          {/* Animated glow border */}
          <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-r ${pillar.accent} opacity-20 animate-pulse`}></div>
          <div className={`absolute inset-[1px] rounded-[2.4rem] bg-gradient-to-br from-white/10 via-transparent to-black/20`}></div>
          
          {/* Top section with number and icon */}
          <div className="relative z-10 p-12">
            <div className="flex items-start justify-between mb-8">
              {/* Large number */}
              <div className={`text-8xl font-extralight bg-gradient-to-br ${pillar.accent} bg-clip-text text-transparent opacity-90`}>
                {pillar.number}
              </div>
              
              {/* Icon with unique background */}
              <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.accent} p-0.5`}>
                <div className="w-full h-full bg-black/60 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <Star className={`w-3 h-3 text-${pillar.color}-500`} />
                </div>
              </div>
            </div>
            
            {/* Title and description */}
            <div className="mb-10">
              <h2 className="text-6xl font-extralight text-white mb-4 tracking-tight leading-none">{pillar.title}</h2>
              <p className="text-2xl font-light text-white/70 leading-relaxed">{pillar.description}</p>
            </div>
            
            {/* Unique separator with animation */}
            <div className="relative mb-12">
              <div className={`w-32 h-1 bg-gradient-to-r ${pillar.accent} rounded-full`}></div>
              <div className={`absolute top-0 left-0 w-8 h-1 bg-white rounded-full animate-pulse`}></div>
            </div>
          </div>
          
          {/* Middle section - highlights with enhanced design */}
          <div className="relative z-10 px-12 pb-8 flex-1">
            <div className="space-y-6">
              {pillar.highlights.map((highlight: string, idx: number) => (
                <div key={idx} className="group flex items-start hover:translate-x-3 transition-all duration-300">
                  <div className="relative mr-6 mt-2">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${pillar.accent} shadow-lg group-hover:scale-125 transition-transform duration-300`}></div>
                    <div className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-br ${pillar.accent} blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                  <p className="text-white/80 text-xl font-light leading-relaxed group-hover:text-white transition-colors duration-300 flex-1">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom section - enhanced CTA */}
          <div className="relative z-10 p-12 pt-8">
            <button className={`w-full py-6 px-8 rounded-2xl bg-gradient-to-r ${pillar.accent} hover:shadow-2xl hover:shadow-${pillar.color}-500/25 text-white transition-all duration-500 font-medium text-lg flex items-center justify-center group relative overflow-hidden transform hover:scale-[1.02] active:scale-[0.98]`}>
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative z-10 mr-4">Explore {pillar.title}</span>
              <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              <Zap className="relative z-10 w-5 h-5 ml-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse" />
            </button>
          </div>
          
          {/* Floating elements for uniqueness */}
          <div className="absolute top-20 right-20 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-16 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-8 w-1 h-8 bg-white/10 rounded-full"></div>
        </div>
      </div>
      
      {/* Enhanced step indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {pillars.map((_, i) => (
          <div 
            key={i} 
            className={`transition-all duration-500 rounded-full ${
              i === pillar.id - 1 
                ? `w-16 h-4 bg-gradient-to-r ${pillar.accent} shadow-lg` 
                : 'w-4 h-4 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function PerpeXPillarsScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  // Adjusted for 4 pillars instead of 8
  const x = useTransform(scrollYProgress, [0, 0.9], ["0%", `-${(pillars.length - 1) * 100}%`]);  
  const progressWidth = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);
  
  return (
    <section 
      ref={targetRef} 
      className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black"
      style={{ height: `${800}vh` }}
    >
      {/* Enhanced floating background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>
      
      {/* Enhanced Progress bar */}
      <div className="sticky top-6 left-0 w-full z-50 px-12">
        <div className="h-1.5 bg-white/10 rounded-full backdrop-blur-sm shadow-lg border border-white/5">
          <motion.div 
            className="h-full bg-gradient-to-r from-emerald-400 via-blue-400 via-purple-400 to-orange-400 rounded-full shadow-lg"
            style={{ width: progressWidth }}
          />
        </div>
      </div>
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-start">
        {/* Background heading text - EXACTLY like original */}
        <div className="absolute left-12 px-12 top-1/2 transform -translate-y-1/2 text-white max-w-xl z-0 pointer-events-none">
          <h1 className="text-7xl font-extralight leading-tight tracking-tight">
            Four-Pillar
            <br />
            <span className="flex font-light bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h1>
          <p className="text-xl font-light text-slate-400 mt-6 max-w-md leading-relaxed">
            An integrated approach designed to transform potential into professional excellence
          </p>
        </div>
        
        {/* Horizontal carousel */}
        <motion.div
          style={{ x }}
          className="flex flex-nowrap h-screen pt-4 pb-0 w-full"
        >
          {pillars.map((pillar) => (
            <PillarCard 
              key={pillar.id} 
              pillar={pillar}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}