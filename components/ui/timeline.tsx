"use client";
import {
    useMotionValueEvent,
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
    color?: string;
    icon?: React.ReactNode;
    step?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"]
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const progress = Math.max(0, Math.min(1, latest));
        const sectionProgress = progress * (data.length - 1);
        const newActiveIndex = Math.round(sectionProgress);

        if (newActiveIndex >= 0 && newActiveIndex < data.length && newActiveIndex !== activeIndex) {
            setActiveIndex(newActiveIndex);
        }
    });

    return (
        <div
            className="w-full font-sans relative"
            ref={containerRef}
            style={{
                minHeight: '400vh',
                backgroundImage: `
                    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                backgroundColor: '#0F172A'
            }}
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
                {/* Left side content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 lg:py-32 lg:sticky lg:top-0 lg:h-screen">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
                            <p className="text-sm text-blue-400 font-medium uppercase tracking-wider">
                                Done For You System
                            </p>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
                            From Dream<br />
                            to <br />
                            <span className="text-blue-400">Ownership</span>
                        </h1>

                        <div className="space-y-6 mb-12">
                            <p className="text-gray-300 text-xl leading-relaxed">
                                We help you achieve <span className="text-white font-semibold">time & financial freedom</span> by acquiring and running a profitable,
                                cash-flowing business within <span className="text-blue-400 font-semibold">30 to 90 days</span>.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                With just <span className="text-white">3-5 hours a week</span> of effort and a tailored
                                plan based on your expertise and our proven strategies.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                            <button className="px-8 lg:px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                                Start Your Journey
                            </button>
                            <button className="px-8 lg:px-10 py-4 border border-gray-400 text-gray-300 font-semibold rounded-full hover:bg-gray-800 hover:border-gray-300 transition-all duration-300 text-center">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right side timeline */}
                <div className="w-full lg:w-1/2 relative">
                    <div ref={ref} className="pt-20 lg:pt-40 px-6 md:px-12 lg:pl-16 lg:pr-12 pb-20 lg:pb-32">
                        {data.map((item, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <div
                                    key={index}
                                    className="relative pl-16 mb-32"
                                >
                                    {/* Timeline dot - positioned consistently */}
                                    <div
                                        className={`absolute left-0 top-2 w-10 h-10 rounded-full border-4 transition-all duration-700 ease-out z-10 ${isActive
                                            ? 'bg-blue-500 border-blue-400 scale-110 shadow-lg shadow-blue-500/50'
                                            : 'bg-gray-700 border-gray-600'
                                            }`}
                                    >
                                        <div className={`absolute inset-2 rounded-full transition-all duration-700 ${isActive ? 'bg-white' : 'bg-transparent'
                                            }`} />

                                        {/* Step number inside dot */}
                                        <div className={`absolute inset-0 flex items-center justify-center text-xs font-bold transition-all duration-700 ${isActive ? 'text-blue-500' : 'text-gray-400'
                                            }`}>
                                            {item.step}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div
                                        className={`transition-all duration-700 ease-out ${isActive ? 'opacity-100 transform translate-x-0' : 'opacity-70 transform translate-x-2'
                                            }`}
                                    >
                                        <div className="inline-flex items-center px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-full mb-6">
                                            <p className="text-xs text-blue-400 font-bold uppercase tracking-wider">
                                                Phase {item.step}
                                            </p>
                                        </div>

                                        <h3
                                            className={`text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight transition-all duration-700 ease-out ${isActive ? 'text-white font-bold' : 'text-gray-400 font-semibold'
                                                }`}
                                        >
                                            {item.title}
                                        </h3>

                                        <div
                                            className={`leading-relaxed max-w-2xl text-lg lg:text-xl transition-all duration-700 ease-out ${isActive ? 'text-gray-200' : 'text-gray-500'
                                                }`}
                                        >
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Timeline line - positioned to connect dots perfectly */}
                        <div
                            className="absolute left-5 top-[88px] w-0.5 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 rounded-full"
                            style={{
                                height: height - 80 + "px",
                            }}
                        >
                            <motion.div
                                className="absolute inset-x-0 top-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 origin-top rounded-full"
                                style={{
                                    height: useTransform(scrollYProgress, [0, 1], [0, height - 80])
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 30,
                                    mass: 1
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Updated timeline data with enhanced visual elements
const timelineData = [
    {
        step: "1",
        title: "Onboarding",
        content: (
            <div className="space-y-6">
                <p className="text-xl font-medium leading-relaxed">
                    We start by understanding your interests, skill set, strengths and network to create
                    a personalized acquisition plan with a clear 30-day timeline.
                </p>

                <div className="grid gap-4 mt-8">
                    <div className="bg-gradient-to-r from-gray-800/60 to-gray-800/40 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0 shadow-sm shadow-blue-400/50"></div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-2">Clarity</h4>
                                <p className="text-gray-300 leading-relaxed">Define your ideal business, industry, and size based on your vision and goals.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-800/60 to-gray-800/40 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0 shadow-sm shadow-blue-400/50"></div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-2">Confidence</h4>
                                <p className="text-gray-300 leading-relaxed">Gain a clear, actionable path with measurable milestones to business ownership.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-800/60 to-gray-800/40 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0 shadow-sm shadow-blue-400/50"></div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-2">Customized Strategies</h4>
                                <p className="text-gray-300 leading-relaxed">A personalized acquisition plan identifying how you&apos;ll create and grow your cash-flowing asset.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        step: "2",
        title: "Acquisition Support",
        content: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-xl p-6">
                    <p className="text-xl font-semibold text-blue-300 mb-3">The Core Phase</p>
                    <p className="text-lg leading-relaxed text-gray-200">
                        From sourcing the best deals to closing them, every step is handled for you.
                        Our team ensures you avoid costly mistakes through meticulous processes.
                    </p>
                </div>

                <div className="grid gap-4 mt-8">
                    <div className="bg-gradient-to-r from-gray-800/60 to-gray-800/40 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0 shadow-sm shadow-green-400/50"></div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-2">Deal Sourcing</h4>
                                <p className="text-gray-300 leading-relaxed">On-market and off-market opportunities through our extensive network of brokers and direct outreach campaigns.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-800/60 to-gray-800/40 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0 shadow-sm shadow-green-400/50"></div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-2">Due Diligence</h4>
                                <p className="text-gray-300 leading-relaxed">Complete analysis and comprehensive vetting process to ensure you make informed, confident decisions.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-800/60 to-gray-800/40 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0 shadow-sm shadow-green-400/50"></div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-2">Deal Structuring & Negotiation</h4>
                                <p className="text-gray-300 leading-relaxed">Creative structures with seller financing and revenue-based payments. Our proven track record saves you thousands.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        step: "3",
        title: "Operations Setup",
        content: (
            <div className="space-y-6">
                <p className="text-xl font-medium leading-relaxed">
                    Buying a business is just the first step. We help you transition smoothly and
                    start growing from month one with our proven operational systems.
                </p>

                <div className="grid gap-4 mt-8">
                    <div className="bg-gradient-to-r from-gray-800/60 to-gray-800/40 border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0 shadow-sm shadow-purple-400/50"></div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-2">Stress-Free Operations</h4>
                                <p className="text-gray-300 leading-relaxed">We place experienced operators who manage the day-to-day operations for you.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-800/60 to-gray-800/40 border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0 shadow-sm shadow-purple-400/50"></div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-2">Systems-Driven Efficiency</h4>
                                <p className="text-gray-300 leading-relaxed">Implement automation tools and streamlined processes for consistent reporting and smooth operations.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-800/60 to-gray-800/40 border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0 shadow-sm shadow-purple-400/50"></div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-2">Talent Placement</h4>
                                <p className="text-gray-300 leading-relaxed">Access our vetted network of managers and specialists who help run and grow your business seamlessly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        step: "4",
        title: "Scale & Grow",
        content: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30 rounded-xl p-6">
                    <p className="text-xl font-semibold text-green-300 mb-3">Long-term Partnership</p>
                    <p className="text-lg leading-relaxed text-gray-200">
                        Turn your business into a scalable, defensible asset that grows in value over time.
                        We work with you for 30-90 days post-acquisition.
                    </p>
                </div>

                <div className="grid gap-4 mt-8">
                    <div className="bg-gradient-to-r from-gray-800/60 to-gray-800/40 border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0 shadow-sm shadow-yellow-400/50"></div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-2">Growth Strategy</h4>
                                <p className="text-gray-300 leading-relaxed">A comprehensive roadmap for revenue optimization, cost efficiency, and strategic market expansion.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-800/60 to-gray-800/40 border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0 shadow-sm shadow-yellow-400/50"></div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-2">Ongoing Support</h4>
                                <p className="text-gray-300 leading-relaxed">Continuous partnership to ensure your business scales successfully and continues to thrive long-term.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
];

// Demo component
export default function BusinessAcquisitionTimeline() {
    return (
        <div>
            <Timeline data={timelineData} />
        </div>
    );
}