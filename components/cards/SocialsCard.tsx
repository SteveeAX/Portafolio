import React from 'react';
import { Github, Linkedin, ArrowUpRight, FileText } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { personal } from '../../config/personal';

export const SocialsContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col h-full gap-2 sm:gap-2.5 w-full">
      {/* Platforms */}
      <div className="grid grid-cols-2 gap-2 sm:gap-2.5" style={{ height: '38%' }}>
        <a
          href={personal.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
          className="relative flex flex-col items-center justify-center rounded-[16px] sm:rounded-[20px] bg-card-hover border border-border group/social overflow-hidden transition-all duration-300 hover:border-text-main/20 hover:bg-text-main"
        >
          <Github size={24} className="sm:w-8 sm:h-8 text-text-main transition-all duration-300 group-hover/social:text-page group-hover/social:scale-110" />
        </a>

        <a
          href={personal.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
          className="relative flex flex-col items-center justify-center rounded-[16px] sm:rounded-[20px] bg-card-hover border border-border group/social overflow-hidden transition-all duration-300 hover:border-[#0077b5]/30 hover:bg-[#0077b5]"
        >
          <Linkedin size={24} className="sm:w-8 sm:h-8 text-text-main transition-all duration-300 group-hover/social:text-white group-hover/social:scale-110" />
        </a>
      </div>

      {/* Contact Action */}
      <a
        href={personal.linkedin}
        target="_blank"
        rel="noreferrer"
        className="relative w-full bg-text-main rounded-[16px] sm:rounded-[20px] flex items-center justify-between px-5 sm:px-6 gap-2 text-page font-bold shadow-md transition-all overflow-hidden group hover:shadow-xl active:scale-[0.98] cursor-pointer"
        style={{ height: '28%' }}
      >
        <div className="flex flex-col items-start">
          <span className="text-sm tracking-tight">{t('letsTalk')}</span>
        </div>
        <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-page/10 group-hover:bg-page/20 transition-colors">
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </a>

      {/* CV Action */}
      <a
        href={personal.cvUrl}
        target="_blank"
        rel="noreferrer"
        className="relative w-full bg-text-main rounded-[16px] sm:rounded-[20px] flex items-center justify-between px-5 sm:px-6 gap-2 text-page font-bold shadow-md transition-all overflow-hidden group hover:shadow-xl active:scale-[0.98] cursor-pointer"
        style={{ height: '28%' }}
      >
        <div className="flex flex-col items-start">
          <span className="text-sm tracking-tight">{t('viewCV')}</span>
        </div>
        <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-page/10 group-hover:bg-page/20 transition-colors">
          <FileText size={16} className="group-hover:scale-110 transition-transform" />
        </div>
      </a>
    </div>
  );
};
