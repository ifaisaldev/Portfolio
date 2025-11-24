import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="glass border-t border-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <Link href="/" className="text-2xl font-bold">
                            Faisal Mehmood<span className="text-blue-500">.</span>
                        </Link>
                        <p className="mt-2 text-gray-400 max-w-md">
                            Senior Full Stack Engineer building scalable web applications and data pipelines.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/ifaisaldev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/faisal-mehmood-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:faisalmehmooddev@gmail.com"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Faisal Mehmood. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
