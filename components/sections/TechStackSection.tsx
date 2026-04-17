import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { m } from 'framer-motion';

export const TechStackSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="px-5 sm:px-10 lg:px-16 3xl:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="mb-8 sm:mb-10 lg:mb-12 3xl:mb-20 text-center sm:text-left">
          <m.h1 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 3xl:mb-6"
          >
            {t('techStackTitle')}
          </m.h1>
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            id="section-title-stack" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl font-black text-text-main leading-[0.9] tracking-tighter mb-5 3xl:mb-10"
          >
            Stack
            <br />
            <span className="text-text-muted/20">Técnico.</span>
          </m.h2>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl 3xl:text-2xl text-text-muted leading-relaxed font-medium max-w-3xl"
          >
            {t('technicalArsenalDesc')}
          </m.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 3xl:gap-20 pb-16">
          {/* Fila 1 */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]"></div>
              {t('stackLangs')}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: 'Python', color: '#3776AB' },
                { name: 'C/C++ (Arduino)', color: '#00599C' },
                { name: 'JavaScript', color: '#F7DF1E' },
                { name: 'TypeScript', color: '#3178C6' },
                { name: 'SQL', color: '#4169E1' },
              ].map(tech => (
                <TechTag key={tech.name} name={tech.name} color={tech.color} />
              ))}
            </div>
          </m.div>

          {/* Cloud & IoT */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]"></div>
              {t('stackCloud')}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: 'AWS', color: '#FF9900' },
                { name: 'Google Cloud', color: '#4285F4' },
                { name: 'Firebase', color: '#FFCA28' },
                { name: 'MQTT', color: '#660066' },
              ].map(tech => (
                <TechTag key={tech.name} name={tech.name} color={tech.color} />
              ))}
            </div>
          </m.div>

          {/* Machine Learning & AI */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]"></div>
              {t('stackAi')}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: 'PyTorch', color: '#EE4C2C' },
                { name: 'YOLO', color: '#00FFFF' },
                { name: 'Gemini API', color: '#8E75FF' },
              ].map(tech => (
                <TechTag key={tech.name} name={tech.name} color={tech.color} />
              ))}
            </div>
          </m.div>

          {/* Herramientas & Embedded */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]"></div>
              {t('stackTools')}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: 'Git/GitHub', color: '#F05032' },
                { name: 'Linux', color: '#FCC624' },
                { name: 'Microcontroladores', color: '#00979D' },
              ].map(tech => (
                <TechTag key={tech.name} name={tech.name} color={tech.color} />
              ))}
            </div>
          </m.div>
          {/* Hardware & Diseño */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]"></div>
              {t('stackHardware')}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: 'Altium', color: '#A5915F' },
                { name: 'KiCad', color: '#314CB0' },
                { name: 'Inventor', color: '#FF6D00' },
                { name: 'Proteus', color: '#1A8FC1' },
              ].map(tech => (
                <TechTag key={tech.name} name={tech.name} color={tech.color} />
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

const TechTag: React.FC<{ name: string; color: string }> = ({ name, color }) => (
  <m.span 
    whileHover={{ 
      scale: 1.05,
      color: color,
      borderColor: `${color}40`,
      boxShadow: `0 0 20px ${color}15`
    }}
    whileTap={{ scale: 0.95 }}
    className="px-4 py-2 rounded-xl bg-card-hover text-text-muted text-xs font-bold border border-border transition-all duration-200 cursor-default"
  >
    {name}
  </m.span>
);
