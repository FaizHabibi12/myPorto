import React from "react";

interface Skill {
  name: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: "Web Developer",
    description:
      "Specializing in creating user-friendly interfaces and seamless experiences that prioritize usability and aesthetics."
  },
  {
    name: "Game Design",
    description:
      "Expert in crafting visually appealing graphics that align with brand identity and messaging."
  },
  {
    name: "Photography",
    description:
      "Creating engaging animations and motion graphics to elevate storytelling and visual appeal."
  },
  {
    name: "Photo Retouch",
    description:
      "Skilled in enhancing and retouching photographs for professional and creative purposes."
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What My Skills Include
        </h2>
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="border-b pb-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-600 text-lg">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
