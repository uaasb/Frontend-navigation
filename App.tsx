import React, { useState, useEffect, useMemo } from 'react';
import { Search, Menu, X, Github, PlusCircle, Mail, Copy } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { ResourceCard } from './components/ResourceCard';
import { CATEGORIES } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(CATEGORIES[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Search Logic
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return CATEGORIES;
    
    const query = searchQuery.toLowerCase();
    
    return CATEGORIES.map(category => ({
      ...category,
      items: category.items.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
      )
    })).filter(category => category.items.length > 0);
  }, [searchQuery]);

  // Scroll Spy Logic to update active section in sidebar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset

      for (const category of CATEGORIES) {
        const element = document.getElementById(category.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(category.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle New Website Submission Email Logic
  const handleSendEmail = () => {
    const email = "1759909115@qq.com";
    const subject = encodeURIComponent("申请入站 / Submit New Website");
    const body = encodeURIComponent(
      "网站名称 (Website Name):\n\n" +
      "网站网址 (Website URL):\n\n" +
      "网站介绍 (Website Description):\n\n"
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Sidebar 
        activeSection={activeSection} 
        isOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <main className="md:ml-64 transition-all duration-300">
        
        {/* Header / Top Bar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 sm:px-8 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="font-bold text-lg text-gray-900">前端导航</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="搜索资源、库、工具..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all duration-200 sm:text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
               <button 
                onClick={() => setIsSubmitModalOpen(true)}
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
              >
                <PlusCircle className="w-4 h-4" />
                <span>申请入站</span>
              </button>
              {/* Mobile version of add button */}
              <button 
                onClick={() => setIsSubmitModalOpen(true)}
                className="sm:hidden p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg"
              >
                <PlusCircle className="w-6 h-6" />
              </button>
              
              <a href="https://github.com/uaasb/Frontend-navigation" target="_blank" rel="noopener noreferrer" className="hidden sm:block p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="px-4 sm:px-8 py-8 max-w-6xl mx-auto space-y-16 pb-24">
          
          {/* Welcome / Hero (Only show when not searching) */}
          {!searchQuery && (
             <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 p-8 sm:p-12 text-white shadow-xl shadow-indigo-200">
                <div className="relative z-10 max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">前端开发百宝箱</h2>
                  <p className="text-indigo-100 text-lg mb-8 max-w-xl">
                    一站式收集最优质的前端开发资源、设计工具与学习资料。
                    从热门框架到小众神器，助力你的每一个 Idea 落地。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Vue', 'Next.js', 'Vite', 'Tailwind', 'Figma', 'Tools'].map(tag => (
                      <span key={tag} className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium hover:bg-white/20 transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"></div>
             </div>
          )}

          {/* Categories */}
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => {
              const Icon = category.icon;
              return (
                <section key={category.id} id={category.id} className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-2">
                    <div className={`p-2 rounded-lg ${category.bgColor} ${category.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                      <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {category.items.map((item) => (
                      <ResourceCard key={item.id} item={item} />
                    ))}
                  </div>
                </section>
              );
            })
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">未找到相关资源</h3>
              <p className="text-gray-500 mt-2">换个关键词试试看？</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white py-12 px-4 text-center">
            <p className="text-sm text-gray-500 mb-2">
              &copy; {new Date().getFullYear()} DevNav. Created by Razor.
            </p>
            <p className="text-xs text-gray-400">
               发现优质资源，提升开发效率
            </p>
        </footer>
      </main>

      {/* Submission Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative scale-100 animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsSubmitModalOpen(false)}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">申请入站</h3>
                <p className="text-xs text-gray-500">提交优质资源，与大家分享</p>
              </div>
            </div>
            
            <div className="space-y-5 text-gray-600">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">管理员邮箱</p>
                  <Copy className="w-3 h-3 text-gray-400 cursor-pointer hover:text-indigo-500" />
                </div>
                <p className="text-indigo-600 font-mono font-medium select-all">1759909115@qq.com</p>
              </div>

              <div>
                 <p className="text-sm font-medium text-gray-900 mb-2">邮件内容模板：</p>
                 <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-sm space-y-2 font-mono text-gray-600">
                   <p>网站名称：[填写名称]</p>
                   <p>网站网址：[填写链接]</p>
                   <p>网站介绍：[一句话描述]</p>
                 </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={handleSendEmail}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  发送申请邮件
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">将会唤起您的默认邮件客户端</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;