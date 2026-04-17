import React from 'react';
import { Wifi, BarChart2, Code2, Brain } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const skillIcons = [
  { icon: <Wifi size={20} />, color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
  { icon: <BarChart2 size={20} />, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { icon: <Code2 size={20} />, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  { icon: <Brain size={20} />, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
];

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="px-5 sm:px-10 lg:px-16 3xl:px-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-6 sm:mb-8 lg:mb-10 3xl:mb-20">
          <h1 className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-[0.3em] mb-3 3xl:mb-6 animate-fade-in">
            {t('aboutTitle')}
          </h1>
          <h2 id="section-title-about" className="text-4xl sm:text-5xl md:text-6xl 3xl:text-7xl font-black text-text-main leading-[0.9] tracking-tighter mb-4 3xl:mb-10">
            {t('systemsEngineering')}
          </h2>
          <div className="h-px w-20 bg-primary mb-4 3xl:mb-10"></div>
          <p className="text-lg sm:text-xl 3xl:text-2xl text-text-muted leading-relaxed font-medium max-w-3xl">
            {t('bioText')}
          </p>
        </header>

        {/* Habilidades Clave / Key Skills */}
        <div>
          <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-text-muted/50 mb-6">
            {t('keySkillsTitle')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(['skill1', 'skill2', 'skill3', 'skill4'] as const).map((key, i) => {
              const s = skillIcons[i];
              return (
                <div
                  key={key}
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/60 hover:bg-card hover:border-primary/20 transition-all duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 ${s.bg} ${s.color}`}>
                    {s.icon}
                  </div>
                  <span className="text-text-main font-semibold text-sm sm:text-base leading-snug">
                    {t(key)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
