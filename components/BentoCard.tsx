import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { m, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useReducedExperience } from '../hooks/useReducedExperience';

interface BentoCardProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  title?: string;
  hasArrow?: boolean;
  backgroundImage?: string;
  dataId?: string;
  isVisible?: boolean;
  noPadding?: boolean;
  index?: number;
}

const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = "",
  onClick,
  title,
  hasArrow = false,
  backgroundImage,
  dataId,
  isVisible = true,
  noPadding = false,
  index = 0
}) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const isReducedExperience = useReducedExperience();
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["1.5deg", "-1.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-1.5deg", "1.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !onClick || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = `relative overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[32px] text-left transition-[background-color,box-shadow,border-color] duration-300 group select-none
      bg-card shadow-[0_1px_2px_rgba(0,0,0,0.05)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_1px_2px_rgba(0,0,0,0.1)] md:hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-transparent dark:border-white/5 hover:border-primary/10
      ${onClick ? 'cursor-pointer hover:bg-card-hover' : ''}
  `;

  return (
    <m.div
      ref={cardRef}
      layout="position"
      data-bento-id={dataId}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`${baseClasses} ${className}`}
      style={{
        rotateX: (!isTouchDevice && !isReducedExperience && onClick) ? rotateX : 0,
        rotateY: (!isTouchDevice && !isReducedExperience && onClick) ? rotateY : 0,
        WebkitTapHighlightColor: 'transparent',
        transformStyle: (isTouchDevice || isReducedExperience) ? "flat" : "preserve-3d",
        willChange: isReducedExperience ? "auto" : "transform, opacity"
      }}
      initial={isReducedExperience ? false : { opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible && isInView ? 1 : 0,
        y: isReducedExperience ? 0 : (isInView ? 0 : 20),
      }}
      whileHover={(!isTouchDevice && !isReducedExperience && onClick) ? {
        y: -4,
        scale: 1.01,
        transition: { type: 'spring', stiffness: 400, damping: 25 }
      } : undefined}
      whileTap={(onClick && !isReducedExperience) ? {
        scale: 0.98,
        transition: { type: 'spring', stiffness: 500, damping: 30 }
      } : undefined}
      transition={{
        opacity: { duration: isReducedExperience ? 0.12 : 0.4, delay: isReducedExperience ? 0 : (isInView ? index * 0.05 : 0), ease: 'easeOut' },
        y: { duration: isReducedExperience ? 0 : 0.4, delay: isReducedExperience ? 0 : (isInView ? index * 0.05 : 0), ease: [0.22, 1, 0.36, 1] },
        layout: { type: 'spring', stiffness: 180, damping: 28, mass: 0.8 }
      }}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-[center_60%] transition-transform duration-500 ease-out md:group-hover:scale-110"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          role="img"
          aria-label={dataId === 'photo' ? 'Profile photo' : 'Background image'}
        />
      )}

      <div className={`relative h-full flex flex-col z-10 w-full ${noPadding ? 'p-0' : 'p-4 sm:p-6 md:p-7'} ${backgroundImage ? 'text-white' : ''}`}>
        {title && (
          <h3 className={`text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-auto flex items-center gap-2 ${backgroundImage ? 'text-white/70' : 'text-text-muted'} ${noPadding ? 'absolute top-4 left-4 sm:top-6 sm:left-6 md:top-7 md:left-7 z-20' : ''}`}>
            {title}
          </h3>
        )}

        {children}

        {hasArrow && (
          <div className={`absolute top-4 right-4 sm:top-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-all duration-300 ease-out md:group-hover:scale-110 md:group-hover:rotate-45 md:group-hover:shadow-lg ${backgroundImage ? 'bg-white/10 border-white/20 text-white' : 'bg-white/50 dark:bg-white/5 border-border text-text-muted md:group-hover:border-primary/20 md:group-hover:text-primary'}`}>
            <ArrowUpRight size={14} className="sm:w-4 sm:h-4 transition-transform duration-300 md:group-hover:scale-110" strokeWidth={2.5} />
          </div>
        )}
      </div>
    </m.div>
  );
};
