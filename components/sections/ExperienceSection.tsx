import React from 'react';
import { Building2 } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { experience } from '../../config/experience';

export const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="px-5 sm:px-10 lg:px-16 3xl:px-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-4 sm:mb-6 lg:mb-8 3xl:mb-16 text-center sm:text-left">
          <h1 className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-[0.3em] mb-3 3xl:mb-6">
            {t('experienceTitle')}
          </h1>
          <h2 id="section-title-experience" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl font-black text-text-main leading-[0.9] tracking-tighter mb-4 3xl:mb-10">
            {t('workExperience')}
          </h2>
        </header>

        <div className="space-y-6 sm:space-y-8 lg:space-y-10 3xl:space-y-16 relative">
          <div className="absolute left-[15px] sm:left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-border to-transparent"></div>

          {experience.map((job, index) => (
            <article
              key={job.company}
              className={`relative pl-12 sm:pl-16 3xl:pl-20 transition-opacity ${index > 0 ? 'opacity-60 hover:opacity-100' : ''}`}
            >
              <div className={`absolute left-0 top-1.5 w-8 h-8 sm:w-11 3xl:w-12 sm:h-11 3xl:h-12 rounded-full border-4 border-card shadow-xl flex items-center justify-center z-10 ${index === 0 ? 'bg-card-hover text-text-main' : 'bg-card-hover text-text-muted'}`}>
                <Building2 size={16} className="sm:w-5 3xl:w-6 sm:h-5 3xl:h-6" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-4 3xl:mb-6">
                  <div className={`font-black tracking-tight text-text-main ${index === 0 ? 'text-2xl sm:text-3xl 3xl:text-4xl' : 'text-xl sm:text-2xl 3xl:text-3xl'}`}>
                    {job.company}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-text-muted border border-border px-4 py-1.5 rounded-full">
                    {job.period}
                  </span>
                </div>

                <div className="flex flex-col mb-3 3xl:mb-4">
                  <h3 className="font-bold text-text-main text-lg sm:text-xl 3xl:text-2xl leading-none">{job.role}</h3>
                  <span className="text-xs font-bold text-text-muted uppercase tracking-widest mt-2 3xl:mt-3 opacity-60">
                    {job.companyFull} · {job.duration}
                  </span>
                </div>

                <p className="text-text-muted text-sm sm:text-base 3xl:text-lg leading-relaxed max-w-2xl font-medium">
                  {job.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
