import React from 'react';
import { CATEGORIES } from '../constants';
import { LayoutDashboard, Lightbulb } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  isOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, isOpen, onCloseMobile }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onCloseMobile}
      />

      {/* Sidebar Content */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Area - Using H1 for SEO as requested */}
          <div className="h-16 flex items-center px-6 border-b border-gray-100">
            <h1 className="flex items-center gap-2 text-indigo-600 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="p-1.5 bg-indigo-600 rounded-lg">
                <LayoutDashboard className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-gray-900">DevNav 前端导航</span>
            </h1>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              const isActive = activeSection === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-700 shadow-sm' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon 
                    className={`w-5 h-5 transition-colors ${
                      isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'
                    }`} 
                  />
                  <span>{category.title}</span>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Sidebar Footer Area */}
          <div className="p-4 border-t border-gray-100">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100/50 relative overflow-hidden">
               {/* Decoration */}
               <div className="absolute top-0 right-0 w-12 h-12 bg-indigo-100/50 rounded-full -mr-4 -mt-4 blur-lg"></div>
               
               <div className="flex items-center gap-2 mb-2 text-indigo-700 relative z-10">
                  <Lightbulb className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">每日灵感</span>
               </div>
               <p className="text-xs text-gray-600 leading-relaxed relative z-10 italic">
                 "代码是写给人看的，只是顺便让机器执行。"
               </p>
            </div>
          </div>

        </div>
      </aside>
    </>
  );
};