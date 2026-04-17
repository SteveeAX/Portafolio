import React from 'react';
import { FolderKanban } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { projects } from '../../config/projects';

export const ProjectsContent: React.FC = () => {
  const { t } = useLanguage();
  const featured = projects[0];

  return (
    <div className="h-full flex flex-col justify-between relative z-10">
      <div className="absolute top-0 right-0 p-24 bg-gradient-to-br from-primary/5 to-blue-500/5 blur-[60px] rounded-full pointer-events-none z-0"></div>

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-card flex items-center justify-center text-text-main border border-border shadow-sm">
          <FolderKanban size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={1.5} />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{t('projectsTitle')}</span>
      </div>

      <div className="mt-auto space-y-1">
        <p className="text-sm sm:text-base font-bold text-text-main leading-snug">{featured.title}</p>
        <div className="flex flex-wrap gap-1">
          {featured.tags.map(tag => (
            <span key={tag} className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-card border border-border text-text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
