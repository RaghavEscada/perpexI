import React from "react";
import { cn } from "@/lib/utils";

// PlaceX Testimonials (Recruitment/Placement)
const placeXTestimonials = [
  {
    name: "Mashood",
    company: "Millbox",
    designation: "Marketing Executive",
    email: "mashood@millbox.com",
    description: "I am truly grateful to PlaceX for guiding me throughout the recruitment process. Their timely communication and professional support helped me secure a role that aligns perfectly with my career goals.",
    img: "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    type: "placement"
  },
  {
    name: "Harsha",
    company: "Tuitorline",
    designation: "Accountant",
    email: "harsha@tuitorline.com",
    description: "PlaceX provided excellent assistance in finding a role that suits my skillset. The entire process was smooth and transparent. I appreciate their dedication and support.",
    img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1842360175.1721844022&semt=ais_hybrid",
    type: "placement"
  },
  {
    name: "Arya",
    company: "Tuitorline",
    designation: "Academic Counselor",
    email: "arya@tuitorline.com",
    description: "Thanks to PlaceX, I was able to start my professional journey in a role that I enjoy. Their guidance and consistent updates made the process stress-free.",
    img: "https://img.freepik.com/premium-photo/man-with-glasses-shirt-that-says-i-am-man_1221953-13634.jpg?ga=GA1.1.156494736.1719603061",
    type: "placement"
  },
  {
    name: "Lintu",
    company: "Edubird",
    designation: "Academic Counselor",
    email: "lintu@edubird.com",
    description: "I extend my sincere thanks to the PlaceX team for helping me land a position at Edubird. They were supportive at every step and ensured the transition was comfortable.",
    img: "https://img.freepik.com/free-photo/brunette-girl-posing_23-2148108748.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    type: "placement"
  },
  {
    name: "Nidha",
    company: "Edubird",
    designation: "Academic Counselor",
    email: "nidha@edubird.com",
    description: "I had a great experience with PlaceX. Their recruitment team was very approachable and provided all the necessary information and motivation throughout the process.",
    img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=740&t=st=1724235068~exp=1724235668~hmac=cc10947c076bfee3f20e9f3e946a2c1974b471c54df2d4f139d7344fe9e51421",
    type: "placement"
  },
  {
    name: "Shamna",
    company: "Platinum",
    designation: "BDA",
    email: "shamna@platinum.com",
    description: "Joining Platinum was a significant step in my career, and I'm thankful to PlaceX for making it possible. Their clarity and follow-up were highly professional.",
    img: "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    type: "placement"
  },
  {
    name: "Sajithkumar",
    company: "Platinum",
    designation: "BDA",
    email: "sajithkumar@platinum.com",
    description: "PlaceX played a crucial role in helping me start my career confidently. The entire placement experience was well-coordinated and reassuring.",
    img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1842360175.1721844022&semt=ais_hybrid",
    type: "placement"
  },
  {
    name: "Mohammed Siyad",
    company: "Platinum",
    designation: "BDA",
    email: "mohammed.siyad@platinum.com",
    description: "I appreciate PlaceX for helping me get placed in a dynamic work environment. Their team was extremely cooperative and ensured a smooth process.",
    img: "https://img.freepik.com/premium-photo/man-with-glasses-shirt-that-says-i-am-man_1221953-13634.jpg?ga=GA1.1.156494736.1719603061",
    type: "placement"
  },
  {
    name: "Sreelakshmi",
    company: "ASHCORP",
    designation: "Academic Counselor",
    email: "sreelakshmi@ashcorp.com",
    description: "PlaceX helped me find the right opportunity at the right time. I'm thankful for their professional and friendly approach during the recruitment process.",
    img: "https://img.freepik.com/free-photo/brunette-girl-posing_23-2148108748.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    type: "placement"
  },
  {
    name: "Shibin K.P",
    company: "ASHCORP",
    designation: "Academic Counselor",
    email: "shibin.kp@ashcorp.com",
    description: "The PlaceX team was very helpful and responsive. They supported me throughout the hiring journey and helped me secure a meaningful role in my field.",
    img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=740&t=st=1724235068~exp=1724235668~hmac=cc10947c076bfee3f20e9f3e946a2c1974b471c54df2d4f139d7344fe9e51421",
    type: "placement"
  },
  {
    name: "Sikhil S",
    company: "ASHCORP",
    designation: "Academic Counselor",
    email: "sikhil.s@ashcorp.com",
    description: "I'm happy to have been placed by PlaceX. Their process was clear, and their team made sure I was informed and confident before every step.",
    img: "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    type: "placement"
  },
  {
    name: "Hunaina",
    company: "ASHCORP",
    designation: "Academic Counselor",
    email: "hunaina@ashcorp.com",
    description: "Thanks to PlaceX, I found a role that matches my academic interests and growth path. Their support and encouragement made a huge difference.",
    img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1842360175.1721844022&semt=ais_hybrid",
    type: "placement"
  }
];

// PerpeX Testimonials (Consulting)
const perpeXTestimonials = [
  {
    name: "Irfan",
    company: "MF AQUA",
    designation: "Founder, CEO",
    email: "irfan@mfaqua.com",
    description: "PerpeX brought a rare combination of insight and execution that helped us structure our operations more efficiently. Their proactive and transparent approach made them a trusted extension of our core team.",
    img: "https://img.freepik.com/premium-photo/man-with-glasses-shirt-that-says-i-am-man_1221953-13634.jpg?ga=GA1.1.156494736.1719603061",
    type: "consulting"
  },
  {
    name: "Aslah",
    company: "INTERVAL",
    designation: "Co-Founder, CGO",
    email: "aslah@interval.com",
    description: "Our collaboration with PerpeX redefined how we manage people, process, and performance. Their clarity of vision and commitment to outcomes helped accelerate our business growth.",
    img: "https://img.freepik.com/free-photo/brunette-girl-posing_23-2148108748.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    type: "consulting"
  },
  {
    name: "Sufail",
    company: "ASHCORP",
    designation: "Founder, CEO",
    email: "sufail@ashcorp.com",
    description: "PerpeX understood our startup challenges intuitively and responded with smart, actionable solutions. Their team is reliable, skilled, and outcome-focused.",
    img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=740&t=st=1724235068~exp=1724235668~hmac=cc10947c076bfee3f20e9f3e946a2c1974b471c54df2d4f139d7344fe9e51421",
    type: "consulting"
  },
  {
    name: "Ameen",
    company: "Shelterarms Speech and Language Therapy Clinic",
    designation: "Founder",
    email: "ameen@shelterarms.com",
    description: "As a healthcare startup, we valued PerpeX's ability to align their strategies with our mission. Their support was not only professional but also deeply empathetic to our purpose.",
    img: "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    type: "consulting"
  },
  {
    name: "Shibil Mohammed",
    company: "Royal Gold Algo",
    designation: "Co-Founder",
    email: "shibil@royalgoldalgo.com",
    description: "PerpeX is a game-changer. They brought structured frameworks and razor-sharp execution to our otherwise chaotic startup journey. We've seen measurable progress and team alignment since their involvement.",
    img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1842360175.1721844022&semt=ais_hybrid",
    type: "consulting"
  },
  {
    name: "Gulam",
    company: "Inax Innovations",
    designation: "Founder, CEO",
    email: "gulam@inaxinnovations.com",
    description: "With PerpeX, we received more than consultancy—we gained a partner who genuinely cares. Their depth of understanding, quick turnaround, and strategic inputs gave our venture the edge it needed.",
    img: "https://img.freepik.com/premium-photo/man-with-glasses-shirt-that-says-i-am-man_1221953-13634.jpg?ga=GA1.1.156494736.1719603061",
    type: "consulting"
  }
];

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-3 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

const ReviewCard = ({
  img,
  name,
  company,
  designation,
  email,
  description,
  type,
}: {
  img: string;
  name: string;
  company: string;
  designation: string;
  email: string;
  description: string;
  type: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-full max-w-md space-y-5 overflow-hidden rounded-xl border p-5 shadow-lg mb-6",
        "border-white/10 bg-white/5 hover:bg-white/10",
        type === "consulting" ? "border-orange-500/30 bg-orange-500/10" : "border-blue-500/30 bg-blue-500/10"
      )}
    >
      <div className="flex flex-col space-y-3">
        <div className="flex flex-row items-center gap-3">
          <img
            className="rounded-full object-cover"
            width="56"
            height="56"
            alt={name}
            src={img}
          />
          <div className="flex flex-col min-w-0 flex-1">
            <figcaption className="text-sm font-semibold text-white md:text-base">
              {name}
            </figcaption>
            <p className="text-sm font-medium text-white/80">
              {designation}
            </p>
            <p className="text-sm font-medium text-white/60">
              {company}
            </p>
          </div>
        </div>
        <div className={cn(
          "self-start px-3 py-1.5 rounded-full text-xs font-medium",
          type === "consulting" 
            ? "bg-orange-500/20 text-orange-300" 
            : "bg-blue-500/20 text-blue-300"
        )}>
          {type === "consulting" ? "Consulting" : "B2B Placement"}
        </div>
      </div>
      <blockquote className="text-sm text-white/90 leading-relaxed md:text-base">
        "{description}"
      </blockquote>
    </figure>
  );
};

// Create different rows for each column with proper distribution
const consultingFirstRow = perpeXTestimonials.slice(0, 2);
const consultingSecondRow = perpeXTestimonials.slice(2, 4);
const consultingThirdRow = perpeXTestimonials.slice(4, 6);

const placementFirstRow = placeXTestimonials.slice(0, 4);
const placementSecondRow = placeXTestimonials.slice(4, 8);
const placementThirdRow = placeXTestimonials.slice(8, 12);

const Testimonial = () => {
  return (
    <div className="py-12 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-slate-900">
      <div className="mx-auto mb-12 md:mb-20 max-w-5xl text-center px-4">
        <h1 className="mb-6 md:mb-8 text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-light text-white">
          Trusted by{" "}
          <span className="text-blue-400">
            Professionals
          </span>{" "}
          and{" "}
          <span className="text-orange-400">
            Organizations
          </span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300">
          From career placements to business consulting, discover how PlaceX and PerpeX
          have transformed careers and accelerated business growth across industries.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-8 px-4">
        {/* Consulting Section */}
        <div className="flex-1">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-orange-400 mb-2">
              Consulting Excellence
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              PerpeX transforming businesses
            </p>
          </div>
          
          <div className="relative flex h-[500px] md:h-[700px] w-full flex-row items-center justify-center overflow-hidden rounded-lg">
            {/* Column 1 - Moving Down */}
            <Marquee pauseOnHover vertical className="[--duration:25s]">
              {consultingFirstRow.map((review, index) => (
                <ReviewCard key={`consulting-first-${index}`} {...review} />
              ))}
            </Marquee>
            
            {/* Column 2 - Moving Up */}
            <Marquee
              reverse
              pauseOnHover
              vertical
              className="[--duration:30s]"
            >
              {consultingSecondRow.map((review, index) => (
                <ReviewCard key={`consulting-second-${index}`} {...review} />
              ))}
            </Marquee>
            
            {/* Column 3 - Moving Down - Hidden on mobile */}
            <div className="hidden md:block">
              <Marquee
                pauseOnHover
                vertical
                className="[--duration:35s]"
              >
                {consultingThirdRow.map((review, index) => (
                  <ReviewCard key={`consulting-third-${index}`} {...review} />
                ))}
              </Marquee>
            </div>
            
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-gray-900"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-900"></div>
          </div>
        </div>

        {/* Vertical Divider - Hidden on mobile */}
        <div className="relative hidden lg:flex flex-col items-center">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-400 to-transparent opacity-30"></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full opacity-50"></div>
        </div>

        {/* Placement Section */}
        <div className="flex-1">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-blue-400 mb-2">
              B2B Placement Success
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              PlaceX connecting talent with opportunities
            </p>
          </div>
          
          <div className="relative flex h-[500px] md:h-[700px] w-full flex-row items-center justify-center overflow-hidden rounded-lg">
            {/* Column 1 - Moving Up */}
            <Marquee
              reverse
              pauseOnHover
              vertical
              className="[--duration:40s]"
            >
              {placementFirstRow.map((review, index) => (
                <ReviewCard key={`placement-first-${index}`} {...review} />
              ))}
            </Marquee>
            
            {/* Column 2 - Moving Down */}
            <Marquee
              pauseOnHover
              vertical
              className="[--duration:45s]"
            >
              {placementSecondRow.map((review, index) => (
                <ReviewCard key={`placement-second-${index}`} {...review} />
              ))}
            </Marquee>

            {/* Column 3 - Moving Up - Hidden on mobile */}
            <div className="hidden md:block">
              <Marquee
                reverse
                pauseOnHover
                vertical
                className="[--duration:50s]"
              >
                {placementThirdRow.map((review, index) => (
                  <ReviewCard key={`placement-third-${index}`} {...review} />
                ))}
              </Marquee>
            </div>
            
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-gray-900"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;