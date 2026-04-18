import React from 'react';
import { ExternalLink } from 'lucide-react';
import { m } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';

export interface ProjectDetailData {
  title: string;
  titleEn: string;
  photo: string;
  photoAlt: string;
  introduction: string;
  introductionEn: string;
  arch?: {
    image: string;
    caption: string;
    captionEn: string;
  };
  diagram1: {
    image: string;
    caption: string;
    captionEn: string;
  };
  diagram2: {
    image: string;
    caption: string;
    captionEn: string;
  };
  tags: string[];
  github?: string;
}

interface ProjectDetailProps {
  project: ProjectDetailData;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const { language } = useLanguage();
  const isEs = language === 'es';

  return (
    <m.div
      key="project-detail"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="px-5 sm:px-10 lg:px-16 3xl:px-24 pb-16"
    >
      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-text-main tracking-tighter leading-[0.95] mb-8">
          {isEs ? project.title : project.titleEn}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-card border-border text-text-muted">
              {tag}
            </span>
          ))}
        </div>

        {/* Product photo */}
        <div className="w-full rounded-[20px] overflow-hidden border border-border bg-card-hover mb-10 aspect-video flex items-center justify-center">
          {project.photo ? (
            <img src={project.photo} alt={project.photoAlt} className="w-full h-full object-cover" />
          ) : (
            <span className="text-text-muted text-sm">[ foto del producto ]</span>
          )}
        </div>

        {/* Introduction */}
        <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-14 text-justify">
          {isEs ? project.introduction : project.introductionEn}
        </p>

        <div className="h-px w-full bg-gradient-to-r from-border via-border to-transparent mb-14" />

        {/* Architecture section */}
        {project.arch && (
          <div className="mb-14">
            <h2 className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-[0.3em] mb-5">
              {isEs ? 'Arquitectura del sistema' : 'System Architecture'}
            </h2>
            <div className="w-full rounded-[20px] overflow-hidden border border-border bg-card-hover mb-5 aspect-video flex items-center justify-center">
              <img src={project.arch.image} alt={isEs ? project.arch.caption : project.arch.captionEn} className="w-full h-full object-contain p-4" />
            </div>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed text-justify">
              {isEs ? project.arch.caption : project.arch.captionEn}
            </p>
          </div>
        )}

        <div className="h-px w-full bg-gradient-to-r from-border via-border to-transparent mb-14" />

        {/* Diagram 1 */}
        <div className="mb-14">
          <h2 className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-[0.3em] mb-5">
            {isEs ? 'Diagrama del flujo de interacción de IA' : 'AI Interaction Flow Diagram'}
          </h2>
          <div className="w-full rounded-[20px] overflow-hidden border border-border bg-card-hover mb-5 aspect-video flex items-center justify-center">
            {project.diagram1.image ? (
              <img src={project.diagram1.image} alt={isEs ? project.diagram1.caption : project.diagram1.captionEn} className="w-full h-full object-contain p-4" />
            ) : (
              <span className="text-text-muted text-sm">[ diagrama 1 ]</span>
            )}
          </div>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed text-justify">
            {isEs ? project.diagram1.caption : project.diagram1.captionEn}
          </p>
        </div>

        {/* Diagram 2 */}
        <div className="mb-14">
          <h2 className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-[0.3em] mb-5">
            {isEs ? 'Diagrama del flujo de interacción del subsistema IoT' : 'IoT Subsystem Interaction Flow Diagram'}
          </h2>
          <div className="w-full rounded-[20px] overflow-hidden border border-border bg-card-hover mb-5 aspect-video flex items-center justify-center">
            {project.diagram2.image ? (
              <img src={project.diagram2.image} alt={isEs ? project.diagram2.caption : project.diagram2.captionEn} className="w-full h-full object-contain p-4" />
            ) : (
              <span className="text-text-muted text-sm">[ diagrama 2 ]</span>
            )}
          </div>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed text-justify">
            {isEs ? project.diagram2.caption : project.diagram2.captionEn}
          </p>
        </div>

        {/* GitHub link */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card hover:bg-card-hover hover:border-primary/30 text-text-main text-sm font-bold transition-all"
          >
            <ExternalLink size={15} />
            {isEs ? 'Ver código en GitHub' : 'View code on GitHub'}
          </a>
        )}

      </div>
    </m.div>
  );
};
