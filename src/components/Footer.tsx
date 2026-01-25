import React from 'react';
import { Twitter, Linkedin, Github, Instagram, Briefcase } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <Briefcase className="text-blue-900 w-6 h-6" />
              </div>
              <span className="text-2xl font-bold">CareerTrack</span>
            </div>
            <p className="text-blue-100 max-w-sm mb-8 leading-relaxed">
              Empowering the next generation of workforce leaders through smart tracking and strategic tools.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Twitter, link: "#" },
                { Icon: Linkedin, link: "#" },
                { Icon: Github, link: "#" },
                { Icon: Instagram, link: "#" }
              ].map(({ Icon }, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Product</h4>
            <ul className="space-y-4 text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chrome Extension</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-blue-200 text-sm">
          <p>© 2024 CareerTrack. All rights reserved.</p>
          <p>Made with 💙 by CareerTrack Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;