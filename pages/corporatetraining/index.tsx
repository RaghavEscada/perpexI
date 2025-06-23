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
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="h-8 w-auto max-w-24 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<span class=\"text-xs font-semibold text-white/80\">${logo.name}</span>`;
                  }}
                />
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
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white relative overflow-hidden">
      <FloatingElements />
      <GridPattern />
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-blue-800/10 to-blue-900/5 backdrop-blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-xl border border-blue-400/20 rounded-full px-8 py-3 mb-12 shadow-2xl">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-bold text-blue-200">India's Leading Corporate Training</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black mb-12 leading-none">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                Upskill
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
                Your Workforce
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 max-w-5xl mx-auto leading-relaxed mb-16 font-light">
              Empower your teams with world-class training and placement support. Partner with us to drive organizational growth and talent transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="group flex items-center gap-4 bg-gradient-to-r from-blue-500/15 to-blue-600/15 backdrop-blur-xl border border-blue-400/25 rounded-3xl px-10 py-5 shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300/40 transition-all duration-500">
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-2xl font-black text-white">200+ Corporate Clients</span>
              </div>
              <div className="group flex items-center gap-4 bg-gradient-to-r from-blue-600/15 to-blue-700/15 backdrop-blur-xl border border-blue-400/25 rounded-3xl px-10 py-5 shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300/40 transition-all duration-500">
                <Crown className="w-7 h-7 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                <span className="text-2xl font-black text-white">98% Placement Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Success Metrics */}
        <section className="py-24 -mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div 
                  key={metric.label} 
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(`metric-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-xl border border-blue-400/20 p-8 rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-blue-500/20 h-80 flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 bg-blue-500/15 rounded-xl border border-blue-400/20 group-hover:scale-110 transition-transform duration-500">
                          <IconComponent className="w-6 h-6 text-blue-300" />
                        </div>
                        <div className="bg-blue-400/20 border border-blue-300/30 rounded-full px-3 py-1">
                          <span className="text-xs font-bold text-blue-200">{metric.change}</span>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="text-4xl font-black mb-3 text-white group-hover:text-blue-100 transition-colors duration-500">
                          <AnimatedCounter value={metric.value} />
                        </div>
                        <div className="text-lg font-bold text-blue-200 mb-2">{metric.label}</div>
                        <div className="text-blue-300/80 text-sm">{metric.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {/* Job Roles */}
        <section className="py-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-xl border border-blue-400/20 rounded-full px-8 py-3 mb-8 shadow-xl">
              <Target className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-bold text-blue-200">Career Pathways</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Corporate Training Roles
            </h2>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto font-light">
              Explore high-impact roles and growth opportunities in corporate training and development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jobRoles.map((role, index) => (
              <div 
                key={role.title} 
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredCard(`role-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative bg-gradient-to-br from-blue-500/5 to-blue-800/5 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-6 overflow-hidden transform transition-all duration-700 hover:scale-105 shadow-2xl hover:shadow-blue-500/20 h-80 flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm border border-blue-400/30 rounded-2xl flex items-center justify-center text-2xl mb-6 transform group-hover:scale-110 transition-all duration-700 shadow-xl">
                      {role.icon}
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-500">
                        {role.title}
                      </h3>
                      <div className="flex-1 flex flex-col justify-center space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-black bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                            {role.salary}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 border border-blue-400/20">
                            <TrendingUp className="w-3 h-3 text-blue-400" />
                            <span className="text-blue-300 font-semibold text-sm">{role.growth}</span>
                          </div>
                          <div className="text-blue-300 font-semibold text-sm">{role.openings}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Partner Companies */}
        <section className="py-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-xl border border-blue-400/20 rounded-full px-8 py-3 mb-8 shadow-xl">
              <Globe className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-bold text-blue-200">Trusted by Industry Leaders</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Corporate Partners
            </h2>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto font-light">
              We collaborate with the world's top organizations to deliver impactful training and talent solutions.
            </p>
          </div>
          <div className="space-y-8">
            <LogoMarquee logos={logos1} direction="left" speed={30} />
            <LogoMarquee logos={logos2} direction="right" speed={25} />
          </div>
        </section>

        {/* Business Acquisition Section */}
        <section className="py-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-xl border border-blue-400/20 rounded-full px-8 py-3 mb-8 shadow-xl">
              <Briefcase className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-bold text-blue-200">Business Acquisition</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Strategic Business Growth
            </h2>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto font-light">
              Accelerate your business expansion through strategic acquisitions and partnerships
            </p>
          </div>

          {/* Acquisition Strategies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="group cursor-pointer">
              <div className="relative bg-gradient-to-br from-blue-500/10 to-blue-800/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 overflow-hidden transform transition-all duration-700 hover:scale-105 shadow-2xl hover:shadow-blue-500/20 h-96 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm border border-blue-400/30 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-700 shadow-xl">
                    <Target className="w-8 h-8 text-blue-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-500">
                    Market Expansion
                  </h3>
                  <p className="text-blue-200/80 text-lg leading-relaxed flex-1">
                    Enter new markets and territories through strategic acquisitions of established businesses with proven track records and local market expertise.
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-300 font-semibold">Geographic Diversification</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative bg-gradient-to-br from-blue-500/10 to-blue-800/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 overflow-hidden transform transition-all duration-700 hover:scale-105 shadow-2xl hover:shadow-blue-500/20 h-96 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm border border-blue-400/30 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-700 shadow-xl">
                    <TrendingUp className="w-8 h-8 text-blue-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-500">
                    Revenue Synergies
                  </h3>
                  <p className="text-blue-200/80 text-lg leading-relaxed flex-1">
                    Leverage complementary business models and customer bases to create exponential growth opportunities and enhanced market positioning.
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-300 font-semibold">Cross-Selling Opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative bg-gradient-to-br from-blue-500/10 to-blue-800/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 overflow-hidden transform transition-all duration-700 hover:scale-105 shadow-2xl hover:shadow-blue-500/20 h-96 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm border border-blue-400/30 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-700 shadow-xl">
                    <Users className="w-8 h-8 text-blue-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-500">
                    Talent Acquisition
                  </h3>
                  <p className="text-blue-200/80 text-lg leading-relaxed flex-1">
                    Acquire specialized teams and expertise to strengthen your competitive advantage and accelerate innovation in key business areas.
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-300 font-semibold">Expert Team Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Acquisition Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-8">
              <h3 className="text-4xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-8">
                Why Choose Our Acquisition Services?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Due Diligence Excellence</h4>
                    <p className="text-blue-200/80">Comprehensive financial, legal, and operational analysis to ensure successful integration</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Strategic Valuation</h4>
                    <p className="text-blue-200/80">Data-driven approach to determine optimal acquisition pricing and deal structure</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Integration Support</h4>
                    <p className="text-blue-200/80">Post-acquisition guidance to maximize synergies and minimize disruption</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-800/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 h-full">
                <h4 className="text-2xl font-bold text-white mb-6">Acquisition Success Metrics</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-200">Deal Success Rate</span>
                    <span className="text-3xl font-black text-blue-300">95%</span>
                  </div>
                  <div className="w-full bg-blue-900/30 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-blue-200">Average ROI</span>
                    <span className="text-3xl font-black text-blue-300">3.2x</span>
                  </div>
                  <div className="w-full bg-blue-900/30 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-blue-200">Integration Time</span>
                    <span className="text-3xl font-black text-blue-300">6mo</span>
                  </div>
                  <div className="w-full bg-blue-900/30 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Acquisition CTA */}
          <div className="relative bg-gradient-to-br from-blue-500/10 to-blue-800/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-blue-500/5 to-blue-700/5"></div>
            <div className="relative z-10 px-10 py-16 md:px-20 text-center">
              <h3 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Ready to Scale Your Business?
              </h3>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 font-light">
                Let our acquisition experts help you identify and execute strategic opportunities for business growth and market expansion.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-12 py-5 rounded-full font-bold transition-all duration-500 text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 flex items-center justify-center gap-3 text-lg">
                  Schedule Acquisition Consultation
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="group border-2 border-blue-400/50 hover:border-blue-300 hover:bg-blue-500/10 px-12 py-5 rounded-full font-bold transition-all duration-500 text-white backdrop-blur-sm transform hover:scale-110 flex items-center justify-center gap-3 text-lg">
                  <Briefcase className="w-6 h-6" />
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials (Placeholder) */}
        <section className="py-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-xl border border-blue-400/20 rounded-full px-8 py-3 mb-8 shadow-xl">
              <Users className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-bold text-blue-200">Client Testimonials</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto font-light">
              "The training programs exceeded our expectations and delivered measurable results!"<br/>
              <span className="text-blue-200 font-bold">- HR Head, Fortune 500 Company</span>
            </p>
          </div>
        </section>
        {/* Application Section */}
        <section className="py-24">
          <div className="relative bg-gradient-to-br from-blue-500/5 to-blue-800/5 backdrop-blur-xl border border-blue-400/20 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-blue-500/5 to-blue-700/5"></div>
            <div className="relative z-10 px-10 py-20 md:px-20">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/15 to-blue-600/15 backdrop-blur-xl border border-blue-400/25 rounded-full px-8 py-3 mb-8 shadow-xl">
                  <Zap className="w-6 h-6 text-blue-400" />
                  <span className="text-lg font-bold text-blue-200">Request a Training Proposal</span>
                </div>
                <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Get Started Today
                </h2>
                <p className="text-2xl text-blue-100 max-w-4xl mx-auto mb-12 font-light">
                  Connect with our team to design a custom training solution for your organization.
                </p>
              </div>
              <div className="bg-white/98 backdrop-blur-sm rounded-3xl shadow-2xl p-4 border border-blue-200/20">
                <iframe
                  src="https://tally.so/embed/wM8kQd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  width="100%"
                  height="600"
                  title="Corporate Training Application"
                  className="w-full rounded-2xl border-none"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer CTA */}
      <div className="relative mt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-800/10 backdrop-blur-xl"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h3 className="text-4xl font-black mb-6 text-white">Ready to Upskill Your Team?</h3>
          <p className="text-blue-100 mb-12 text-xl font-light">Contact us to unlock your organization's full potential</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-12 py-5 rounded-full font-bold transition-all duration-500 text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 flex items-center justify-center gap-3 text-lg">
              Contact Training Team
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group border-2 border-blue-400/50 hover:border-blue-300 hover:bg-blue-500/10 px-12 py-5 rounded-full font-bold transition-all duration-500 text-white backdrop-blur-sm transform hover:scale-110 flex items-center justify-center gap-3 text-lg">
              <Sparkles className="w-6 h-6" />
              View Client Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}