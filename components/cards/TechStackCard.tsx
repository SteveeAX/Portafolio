import React from 'react';
import { Terminal, Database, Code2, Brain, Cpu, Server, Cpu as Chip } from 'lucide-react';

const TechIcon: React.FC<{ icon: React.ReactNode; label: string; hoverColor: string }> = ({ icon, label, hoverColor }) => (
  <div 
    className="group/tech flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-card-hover border border-border/50 shrink-0 shadow-sm cursor-default transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-[var(--hover-color)]"
    style={{ ['--hover-color' as string]: hoverColor.startsWith('var(') ? hoverColor : hoverColor }}
  >
    <span className="text-text-muted transition-colors duration-300 group-hover/tech:text-[var(--hover-color)]">
      {icon}
    </span>
    <span className="text-xs sm:text-sm font-bold text-text-main whitespace-nowrap transition-colors duration-300 group-hover/tech:text-[var(--hover-color)]">
      {label}
    </span>
  </div>
);

export const TechStackContent: React.FC = () => {
  // Fila 1 — Lenguajes de Programación
  const row1 = [
    { icon: <Code2 size={18} />, label: "Python", hoverColor: "#3776AB" },
    { icon: <Cpu size={18} />, label: "C/C++ (Arduino)", hoverColor: "#00599C" },
    { icon: <Code2 size={18} />, label: "JavaScript", hoverColor: "#F7DF1E" },
    { icon: <Terminal size={18} />, label: "TypeScript", hoverColor: "#3178C6" },
    { icon: <Database size={18} />, label: "SQL", hoverColor: "#4169E1" },
  ];

  // Fila 2 — Cloud & IoT
  const row2 = [
    { icon: <Server size={18} />, label: "AWS", hoverColor: "#FF9900" },
    { icon: <Server size={18} />, label: "Google Cloud", hoverColor: "#4285F4" },
    { icon: <Server size={18} />, label: "Firebase", hoverColor: "#FFCA28" },
    { icon: <Cpu size={18} />, label: "MQTT", hoverColor: "#660066" },
  ];

  // Fila 3 — Machine Learning & AI
  const row3 = [
    { icon: <Brain size={18} />, label: "PyTorch", hoverColor: "#EE4C2C" },
    { icon: <Brain size={18} />, label: "YOLO", hoverColor: "#00FFFF" },
    { icon: <Brain size={18} />, label: "Gemini API", hoverColor: "#8E75FF" },
  ];

  // Fila 4 — Herramientas & Embedded
  const row4 = [
    { icon: <Terminal size={18} />, label: "Git/GitHub", hoverColor: "#F05032" },
    { icon: <Terminal size={18} />, label: "Linux", hoverColor: "#FCC624" },
    { icon: <Cpu size={18} />, label: "Microcontroladores", hoverColor: "#00979D" },
  ];

  // Fila 5 — Hardware & Diseño
  const row5 = [
    { icon: <Chip size={18} />, label: "Altium", hoverColor: "#A5915F" },
    { icon: <Chip size={18} />, label: "KiCad", hoverColor: "#314CB0" },
    { icon: <Chip size={18} />, label: "Inventor", hoverColor: "#FF6D00" },
    { icon: <Chip size={18} />, label: "Proteus", hoverColor: "#1A8FC1" },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center w-full h-full relative overflow-hidden mask-linear-fade py-2 sm:py-0">
      <div className="flex flex-col gap-4 sm:gap-5 3xl:gap-8 w-[110%] -rotate-[4deg] scale-[1.05] 3xl:scale-[1.15]">
        {/* Row 1 */}
        <div className="flex gap-4 sm:gap-5 overflow-x-hidden overflow-y-visible w-full py-1">
          <div className="flex shrink-0 animate-marquee items-center gap-4 sm:gap-5" style={{ animationDuration: '30s' }}>
            {row1.map((item, i) => <TechIcon key={`r1-${i}`} {...item} />)}
          </div>
          <div className="flex shrink-0 animate-marquee items-center gap-4 sm:gap-5" style={{ animationDuration: '30s' }}>
            {row1.map((item, i) => <TechIcon key={`r1-d-${i}`} {...item} />)}
          </div>
        </div>
    
        {/* Row 2 */}
        <div className="flex gap-4 sm:gap-5 overflow-x-hidden overflow-y-visible w-full py-1">
          <div className="flex shrink-0 animate-marquee-reverse items-center gap-4 sm:gap-5" style={{ animationDuration: '35s' }}>
            {row2.map((item, i) => <TechIcon key={`r2-${i}`} {...item} />)}
          </div>
          <div className="flex shrink-0 animate-marquee-reverse items-center gap-4 sm:gap-5" style={{ animationDuration: '35s' }}>
            {row2.map((item, i) => <TechIcon key={`r2-d-${i}`} {...item} />)}
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex gap-4 sm:gap-5 overflow-x-hidden overflow-y-visible w-full py-1">
          <div className="flex shrink-0 animate-marquee items-center gap-4 sm:gap-5" style={{ animationDuration: '40s' }}>
            {row3.map((item, i) => <TechIcon key={`r3-${i}`} {...item} />)}
          </div>
          <div className="flex shrink-0 animate-marquee items-center gap-4 sm:gap-5" style={{ animationDuration: '40s' }}>
            {row3.map((item, i) => <TechIcon key={`r3-d-${i}`} {...item} />)}
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex gap-4 sm:gap-5 overflow-x-hidden overflow-y-visible w-full py-1">
          <div className="flex shrink-0 animate-marquee-reverse items-center gap-4 sm:gap-5" style={{ animationDuration: '28s' }}>
            {row4.map((item, i) => <TechIcon key={`r4-${i}`} {...item} />)}
          </div>
          <div className="flex shrink-0 animate-marquee-reverse items-center gap-4 sm:gap-5" style={{ animationDuration: '28s' }}>
            {row4.map((item, i) => <TechIcon key={`r4-d-${i}`} {...item} />)}
          </div>
        </div>

        {/* Row 5 */}
        <div className="flex gap-4 sm:gap-5 overflow-x-hidden overflow-y-visible w-full py-1">
          <div className="flex shrink-0 animate-marquee items-center gap-4 sm:gap-5" style={{ animationDuration: '32s' }}>
            {row5.map((item, i) => <TechIcon key={`r5-${i}`} {...item} />)}
          </div>
          <div className="flex shrink-0 animate-marquee items-center gap-4 sm:gap-5" style={{ animationDuration: '32s' }}>
            {row5.map((item, i) => <TechIcon key={`r5-d-${i}`} {...item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};
