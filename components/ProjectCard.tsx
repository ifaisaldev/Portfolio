interface ProjectCardProps {
    title: string;
    description: string;
    role: string;
    tech: string[];
    problem?: string;
    solution?: string;
    impact?: string;
}

const ProjectCard = ({ title, description, role, tech, problem, solution, impact }: ProjectCardProps) => {
    return (
        <div className="glass rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 glass-hover flex flex-col h-full">
            <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-blue-400 font-medium mb-3">{role}</p>
                <p className="text-gray-400 mb-4">{description}</p>

                {problem && (
                    <div className="mt-4 space-y-3">
                        <div>
                            <h4 className="text-sm font-semibold text-gray-300">Challenge:</h4>
                            <p className="text-sm text-gray-500">{problem}</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-300">Solution:</h4>
                            <p className="text-sm text-gray-500">{solution}</p>
                        </div>
                        {impact && (
                            <div>
                                <h4 className="text-sm font-semibold text-gray-300">Impact:</h4>
                                <p className="text-sm text-gray-500">{impact}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="px-6 pb-6 mt-auto">
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
        </div>
    );
};

export default ProjectCard;
