import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
    return (
        <div className="glass p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 glass-hover group">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Icon className="text-accent group-hover:text-accent-hover" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-fg mb-2">{title}</h3>
            <p className="text-muted">{description}</p>
        </div>
    );
};

export default ServiceCard;
