import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { degree, certifications } from '../../config/education';

const certColor: Record<string, { icon: string; badge: string }> = {
  blue: {
    icon: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    badge: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  emerald: {
    icon: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    badge: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
};

export const EducationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="px-5 sm:px-10 lg:px-16 3xl:px-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-5 sm:mb-7 lg:mb-9 3xl:mb-16 text-center sm:text-left">
          <h1 className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 3xl:mb-6">
            {t('educationTitle')}
          </h1>
          <h2 id="section-title-education" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl font-black text-text-main leading-[0.9] tracking-tighter mb-5 3xl:mb-10">
            {t('academicBackground').split(' ')[0]}
            <br />
            <span className="text-text-muted/20">{t('academicBackground').split(' ')[1]}</span>
          </h2>
        </header>

        <div className="space-y-5 sm:space-y-7 lg:space-y-9 3xl:space-y-16">
          {/* Título universitario */}
          <article className="group relative">
            <div className="flex flex-col md:flex-row md:items-start gap-6 sm:gap-8 lg:gap-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[24px] bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform duration-500">
                <GraduationCap size={32} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-text-main tracking-tight group-hover:text-primary transition-colors duration-500">
                    {degree.title}
                  </h3>
                  <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 w-fit">
                    {degree.year}
                  </span>
                </div>
                <p className="text-lg sm:text-xl font-bold text-text-main mb-1">{degree.university}</p>
                <p className="text-text-muted text-sm font-medium">{t('professionalDegree')}</p>
              </div>
            </div>
          </article>

          <div className="h-px w-full bg-gradient-to-r from-border via-border to-transparent"></div>

          {/* Certificaciones */}
          <div>
            <p className="text-[10px] sm:text-xs font-bold text-text-muted uppercase tracking-[0.25em] mb-6">
              {t('certificationsTitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {certifications.map((cert) => {
                const colors = certColor[cert.color] ?? certColor.blue;
                return (
                  <article key={cert.credentialId} className="group rounded-[20px] border border-border bg-card/60 p-5 sm:p-6 hover:border-primary/20 hover:bg-card transition-all">
                    <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${colors.icon}`}>
                      <Award size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-text-main mb-1 leading-snug">{cert.title}</h3>
                    <p className="text-text-muted text-sm font-medium mb-4">{cert.issuer}</p>
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${colors.badge}`}>
                        {cert.date}
                      </span>
                      <span className="text-[14px] text-text-main font-mono opacity-70 truncate">
                        ID: {cert.credentialId}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
