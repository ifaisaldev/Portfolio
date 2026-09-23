import type { ReactNode } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

type ProjectStatus = 'live' | 'open-source' | 'private';

interface ProjectLink {
    label: string;
    href: string;
}

interface ProjectCardProps {
    title: string;
    role: string;
    period?: string;
    status: ProjectStatus;
    summary: string;
    points: string[];
    tech: string[];
    links?: ProjectLink[];
    image?: { src: string; alt: string };
    visual?: ReactNode;
    featured?: boolean;
}

const statusStyles: Record<ProjectStatus, { label: string; dot: string }> = {
    live: { label: 'Live', dot: 'bg-green-400' },
    'open-source': { label: 'Open source', dot: 'bg-blue-400' },
    private: { label: 'In production · Private', dot: 'bg-amber-400' },
};

const ProjectCard = ({ title, role, period, status, summary, points, tech, links, image, visual, featured }: ProjectCardProps) => {
    const { label: statusLabel, dot } = statusStyles[status];

    return (
        <article className={`glass rounded-lg overflow-hidden flex flex-col ${featured ? 'md:col-span-2 lg:flex-row' : ''}`}>
            {image && (
                <div className={`border-b border-line ${featured ? 'flex items-center bg-panel p-4 sm:p-6 lg:w-1/2 lg:border-b-0 lg:border-r' : ''}`}>
                    <div className={`relative aspect-video w-full overflow-hidden bg-panel ${featured ? 'rounded-md border border-line' : ''}`}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes={featured ? '(min-width: 1024px) 640px, 100vw' : '(min-width: 768px) 50vw, 100vw'}
                            className="object-cover object-top"
                        />
                    </div>
                </div>
            )}
            {!image && visual && (
                <div className={`flex items-center justify-center border-b border-line bg-panel ${featured ? 'lg:w-1/2 lg:border-b-0 lg:border-r' : ''}`}>
                    {visual}
                </div>
            )}

            <div className={`p-6 flex flex-col flex-1 ${featured ? 'lg:p-8' : ''}`}>
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-fg">{title}</h3>
                    <span className="inline-flex items-center gap-1.5 shrink-0 rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-fg-2">
                        <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                        {statusLabel}
                    </span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">
                    {role}
                    {period && <span className="text-muted"> · {period}</span>}
                </p>

                <p className="mt-4 text-fg-2 leading-relaxed">{summary}</p>

                <ul className="mt-4 space-y-2">
                    {points.map((point) => (
                        <li key={point} className="flex items-start text-sm text-muted">
                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                            {point}
                        </li>
                    ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                    {tech.map((item) => (
                        <span
                            key={item}
                            className="px-3 py-1 bg-chip text-fg-2 text-xs font-medium rounded-full border border-line"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {links && links.length > 0 && (
                    <div className="mt-auto pt-6">
                        <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                                >
                                    {link.label}
                                    <ArrowUpRight className="ml-1 h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
};

export default ProjectCard;
