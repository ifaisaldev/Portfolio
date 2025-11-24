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
            <div className="absolute -left-[26px] top-8 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] hidden md:block" />

            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <h4 className="text-xl text-blue-400 font-medium mt-1">{company}</h4>
                </div>
                <div className="flex flex-col items-start md:items-end mt-2 md:mt-0 text-gray-400 text-sm space-y-1">
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

            <p className="text-gray-300 mb-6 leading-relaxed">
                {description}
            </p>

            <div className="mb-6">
                <h5 className="text-sm font-semibold text-gray-200 mb-3 uppercase tracking-wider">Key Achievements</h5>
                <ul className="space-y-2">
                    {highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-gray-400 text-sm">
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
                        className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs font-medium rounded-full border border-blue-500/20"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;
