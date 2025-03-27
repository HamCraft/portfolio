import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiPython, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const stackItems = [
  { id: 1, name: "HTML5", icon: FaHtml5, color: "#eb6a00" },
  { id: 2, name: "CSS3", icon: FaCss3, color: "#0008e3" },
  { id: 3, name: "JavaScript", icon: FaJs, color: "#e3e300" },
  { id: 4, name: "TypeScript", icon: SiTypescript, color: "#0081e3" },
  { id: 5, name: "React", icon: FaReact, color: "#61DAFB" },
  { id: 6, name: "Next.js", icon: RiNextjsFill, color: "#FFFFFF" },
  { id: 7, name: "Python", icon: SiPython, color: "#FFFFFF" },
];

export const Stack = () => {
  return (
    <section className="py-16 glass" id="stack">
      <div className="max-w[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl text-gray-200 font-bold mb-4">My Stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {stackItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center p-4 rounded-xl"
            >
                <div className="mb-4 bg-white/10 p-6 rounded-xl ">
                    {React.createElement(item.icon, {
                        className: "w-32 h-32",
                        style: { color: item.color },
                    })}
                </div>
                <p className="text-gray-100 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};