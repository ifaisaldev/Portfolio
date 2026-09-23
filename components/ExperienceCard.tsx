import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceCardProps {
    title: string;
    company: string;
    period: string;
    location: string;
    description: string;
    highlights: string[];
    tech: string[];
}

const ExperienceCard = ({ title, company, period, location, description, highlights, tech }: ExperienceCardProps) => {
    return (
        <div className="glass p-8 rounded-lg relative border-l-4 border-blue-500 ml-4 md:ml-0">
            <div className="absolute -left-[26px] top-8 w-4 h-4 rounded-full bg-blue-500 hidden md:block" />

            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                    <h3 className="text-2xl font-bold text-fg">{title}</h3>
                    <h4 className="text-xl text-accent font-medium mt-1">{company}</h4>
                </div>
                <div className="flex flex-col items-start md:items-end mt-2 md:mt-0 text-muted text-sm space-y-1">
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {period}
                    </div>
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {location}
                    </div>
                </div>
            </div>

            <p className="text-fg-2 mb-6 leading-relaxed">
                {description}
            </p>

            <div className="mb-6">
                <h5 className="text-sm font-semibold text-fg-2 mb-3 uppercase tracking-wider">Key Achievements</h5>
                <ul className="space-y-2">
                    {highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-muted text-sm">
                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                            {highlight}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-wrap gap-2">
                {tech.map((item, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-chip text-fg-2 text-xs font-medium rounded-full border border-line"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;
