import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { ResourceItem } from '../types';

interface ResourceCardProps {
  item: ResourceItem;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ item }) => {
  const [imgError, setImgError] = useState(false);

  // Helper to extract hostname for favicon
  const getHostname = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch (e) {
      return '';
    }
  };

  const hostname = getHostname(item.url);
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`;

  return (
    <a 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200 h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100 group-hover:border-indigo-100 transition-colors">
             {!imgError && hostname ? (
               <img 
                 src={item.icon || faviconUrl} 
                 alt={`${item.title} icon`}
                 className="w-6 h-6 object-contain"
                 onError={() => setImgError(true)}
               />
             ) : (
               <span className="text-sm font-bold text-gray-400 group-hover:text-indigo-600">
                 {item.title.charAt(0)}
               </span>
             )}
          </div>
          <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
            {item.title}
          </h3>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-indigo-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
      </div>
      
      <p className="text-sm text-gray-500 mb-3 line-clamp-2 flex-grow">
        {item.description}
      </p>
      
      {item.tag && (
        <div className="mt-auto pt-2 border-t border-gray-50">
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700">
            {item.tag}
          </span>
        </div>
      )}
    </a>
  );
};