import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-[#050505] py-12 mt-auto z-10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                    <div className="font-bold text-xl tracking-tighter flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                            <span className="text-white text-xs font-bold font-mono">B</span>
                        </div>
                        Bikode
                    </div>
                    <p className="text-gray-500 text-sm max-w-sm mb-6">
                        A powerful, open-source wrapper for Notepad that supercharges your daily text editing with modern features and a developer-friendly UI.
                    </p>
                    <div className="flex items-center gap-4 text-gray-500">
                        <a href="https://github.com/EugeneBoondock/Biko" className="hover:text-white transition-colors"><Github size={20} /></a>
                        <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
                        <a href="mailto:support@bikode.co.za" className="hover:text-white transition-colors"><Mail size={20} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-gray-200">Resources</h4>
                    <ul className="flex flex-col gap-2 text-sm text-gray-500">
                        <li><a href="https://github.com/EugeneBoondock/Biko/releases/latest" className="hover:text-white transition-colors">Download</a></li>
                        <li><a href="https://github.com/EugeneBoondock/Biko#readme" className="hover:text-white transition-colors">Documentation</a></li>
                        <li><a href="https://github.com/EugeneBoondock/Biko/issues" className="hover:text-white transition-colors">Report an Issue</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-gray-200">Community</h4>
                    <ul className="flex flex-col gap-2 text-sm text-gray-500">
                        <li><a href="https://github.com/EugeneBoondock/Biko/blob/main/README.md" className="hover:text-white transition-colors">Contributing</a></li>
                        <li><a href="https://github.com/EugeneBoondock/Biko/pulls" className="hover:text-white transition-colors">Pull Requests</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Discord (TBA)</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600">
                <p>&copy; {new Date().getFullYear()} Bikode. All rights reserved.</p>
                <div className="flex gap-4 mt-4 sm:mt-0">
                    <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
