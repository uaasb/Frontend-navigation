import { LucideIcon } from 'lucide-react';

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  url: string;
  icon?: string; // URL to icon or generic placeholder logic
  tag?: string; // e.g., "Popular", "New"
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string; // Tailwind text color class
  bgColor: string; // Tailwind bg color class
  items: ResourceItem[];
}
