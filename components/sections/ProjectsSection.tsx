import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { projects } from '../../config/projects';
import { publications } from '../../config/publications';
import { ExternalLink, BookOpen } from 'lucide-react';
import { ProjectDetail } from './ProjectDetail';
import { useDetailViewBack } from '../DetailView';

const tagColors: Record<string, string> = {
  Python: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  'Machine Learning': 'bg-purple-500/10 border-purple-500/20 text-purple-400',
  'Raspberry Pi': 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  'Google Cloud': 'bg-sky-500/10 border-sky-500/20 text-sky-400',
  ESP32: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
  'AWS IoT Core': 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
  Flutter: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
  MQTT: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
  IoT: 'bg-teal-500/10 border-teal-500/20 text-teal-400',
  'Embedded Systems': 'bg-orange-500/10 border-orange-500/20 text-orange-400',
  'Data Analysis': 'bg-purple-500/10 border-purple-500/20 text-purple-400',
};

const defaultTag = 'bg-card border-border text-text-muted';

export const ProjectsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const isEs = language === 'es';
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const detailViewBack = useDetailViewBack();

  useEffect(() => {
    if (selectedProject?.detail) {
      detailViewBack?.setBackOverride(() => setSelectedProject(null));
      detailViewBack?.setBackLabel(isEs ? 'Volver a proyectos' : 'Back to projects');
    } else {
      detailViewBack?.setBackOverride(null);
      detailViewBack?.setBackLabel(null);
    }
  }, [selectedProject, isEs]);

  if (selectedProject?.detail) {
    return (
      <ProjectDetail
        project={{ ...selectedProject, ...selectedProject.detail }}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <section className="px-5 sm:px-10 lg:px-16 3xl:px-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-5 sm:mb-7 lg:mb-9 3xl:mb-16 text-center sm:text-left">
          <h1 className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 3xl:mb-6">
            {t('projectsTitle')}
          </h1>
          <h2 id="section-title-projects" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl font-black text-text-main leading-[0.9] tracking-tighter mb-5 3xl:mb-10">
            {t('projectsHeading').split(' ')[0]}
            <br />
            <span className="text-text-muted/20">{t('projectsHeading').split(' ').slice(1).join(' ')}</span>
          </h2>
        </header>

        <div className="space-y-4 sm:space-y-5">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative rounded-[24px] border border-border bg-card/60 p-6 sm:p-8 transition-all hover:border-primary/20 hover:bg-card ${index > 0 ? 'opacity-70 hover:opacity-100' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-muted opacity-50">
                      0{index + 1}
                    </span>
                    <h3
                      onClick={() => project.detail && setSelectedProject(project)}
                      className={`text-lg sm:text-xl font-black text-text-main tracking-tight transition-colors ${project.detail ? 'cursor-pointer hover:text-primary' : ''}`}
                    >
                      {isEs ? project.title : project.titleEn}
                    </h3>
                  </div>
                  <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4 max-w-2xl">
                    {isEs ? project.description : project.descriptionEn}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${tagColors[tag] ?? defaultTag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 w-10 h-10 rounded-full border border-border bg-card-hover flex items-center justify-center text-text-muted hover:text-text-main hover:border-primary/30 transition-all"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Publicaciones */}
        <div className="mt-10 sm:mt-12">
          <div className="h-px w-full bg-gradient-to-r from-border via-border to-transparent mb-8" />
          <h3 className="text-2xl sm:text-3xl font-black text-text-main tracking-tight mb-6">
            {t('publicationsTitle')}
          </h3>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <article key={index} className="group relative rounded-[24px] border border-border bg-card/60 p-6 sm:p-8 transition-all hover:border-primary/20 hover:bg-card">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border bg-amber-500/10 border-amber-500/20 text-amber-400">
                        <BookOpen size={10} />
                        Paper
                      </span>
                      <span className="text-[10px] font-medium text-text-muted opacity-60">
                        {new Date(pub.publishedAt).toLocaleDateString(isEs ? 'es-EC' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-text-main tracking-tight group-hover:text-primary transition-colors mb-4 leading-snug">
                      {isEs ? pub.title : pub.titleEn}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map(tag => (
                        <span key={tag} className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${tagColors[tag] ?? defaultTag}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 w-10 h-10 rounded-full border border-border bg-card-hover flex items-center justify-center text-text-muted hover:text-text-main hover:border-primary/30 transition-all"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
