import Image from "next/image";

const teamMembers = [
  {
    name: "Raghav Menon",
    role: "Founder & CEO",
    image: "/l1.png",
    description: "Visionary leader with 15+ years in business education and innovation.",
  },
  {
    name: "Aisha Thomas",
    role: "Head of Operations",
    image: "/l2.png",
    description: "Expert in scaling teams and delivering operational excellence.",
  },
  {
    name: "Vikram Singh",
    role: "Lead Designer",
    image: "/l3.png",
    description: "Creative mind behind our brand and digital experiences.",
  },
  {
    name: "Priya Nair",
    role: "Marketing Director",
    image: "/l4.png",
    description: "Strategist driving growth and engagement across platforms.",
  },
];

export default function Team() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-secondry mb-12 font-FoundersGrotesk text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white/80 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-28 h-28 mb-4 relative rounded-full overflow-hidden border-4 border-blue-400 shadow-md">
                <Image src={member.image} alt={member.name} width={112} height={112} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-secondry font-NeueMontreal mb-1">{member.name}</h3>
              <p className="text-blue-500 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 text-center font-NeueMontreal">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
