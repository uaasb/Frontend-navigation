import { 
  Code2, 
  Sparkles, 
  Palette, 
  Wrench, 
  BookOpen, 
  Image as ImageIcon, 
  Users 
} from 'lucide-react';
import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'frontend-tech',
    title: '前端技术',
    description: '核心技术、框架与前沿库',
    icon: Code2,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    items: [
      { id: 'react', title: 'React', description: '构建用户界面的库', url: 'https://react.dev', tag: 'Core' },
      { id: 'vue', title: 'Vue.js', description: '渐进式 JavaScript 框架', url: 'https://vuejs.org' },
      { id: 'typescript', title: 'TypeScript', description: '强类型 JavaScript', url: 'https://www.typescriptlang.org', tag: 'Essential' },
      { id: 'nextjs', title: 'Next.js', description: 'React 应用框架', url: 'https://nextjs.org' },
      { id: 'vite', title: 'Vite', description: '下一代前端工具链', url: 'https://vitejs.dev' },
      { id: 'tailwindcss', title: 'Tailwind CSS', description: '原子化 CSS 框架', url: 'https://tailwindcss.com', tag: 'Popular' },
      
      // 新增前沿/小众技术
      { id: 'unocss', title: 'UnoCSS', description: '即时按需原子 CSS 引擎', url: 'https://unocss.dev/', tag: 'Innovative' },
      { id: 'stylex', title: 'StyleX', description: 'Meta 出品的 CSS-in-JS 系统', url: 'https://stylexjs.com/', tag: 'New' },
      { id: 'vanjs', title: 'VanJS', description: '世界最小的响应式 UI 框架 (0.9kb)', url: 'https://vanjs.org/', tag: 'Tiny' },
      { id: 'mitosis', title: 'Mitosis', description: '一次编写，运行在所有框架', url: 'https://github.com/BuilderIO/mitosis', tag: 'Compiler' },
      { id: 'partytown', title: 'Partytown', description: '在 Web Worker 中运行第三方脚本', url: 'https://partytown.builder.io/', tag: 'Perf' },
      { id: 'kobalte', title: 'Kobalte', description: 'SolidJS 的无头 UI 组件库', url: 'https://kobalte.dev/', tag: 'Solid' },
      { id: 'ark-ui', title: 'Ark UI', description: '完全可定制的无头 UI 组件', url: 'https://ark-ui.com/' },
      { id: 'effect', title: 'Effect', description: 'TypeScript 的缺失标准库', url: 'https://effect.website/', tag: 'Functional' },
      { id: 'valtio', title: 'Valtio', description: '使代理状态管理变得简单', url: 'https://valtio.pmnd.rs/', tag: 'State' },
      { id: 'pandacss', title: 'Panda CSS', description: '构建时类型安全的 CSS-in-JS', url: 'https://panda-css.com/' },

      // 原有精选
      { id: 'rspack', title: 'Rspack', description: '基于 Rust 的高性能打包工具', url: 'https://www.rspack.dev/', tag: 'Trending' },
      { id: 'zustand', title: 'Zustand', description: '小巧快速的状态管理', url: 'https://docs.pmnd.rs/zustand' },
      { id: 'msw', title: 'MSW', description: 'API 模拟工具', url: 'https://mswjs.io/', tag: 'Testing' },
      { id: 'astro', title: 'Astro', description: '内容驱动网站的 Web 框架', url: 'https://astro.build/' },
      { id: 'qwik', title: 'Qwik', description: '可恢复性框架，即时加载', url: 'https://qwik.builder.io/' },
      { id: 'bun', title: 'Bun', description: '快速的一体化 JS 运行时', url: 'https://bun.sh/', tag: 'Fast' },
      { id: 'biome', title: 'Biome', description: '极速 Web 开发工具链', url: 'https://biomejs.dev/' },
      { id: 'tauri', title: 'Tauri', description: '构建更小更快的桌面应用', url: 'https://tauri.app/', tag: 'Desktop' },
      { id: 'htmx', title: 'htmx', description: 'HTML 驱动的动态交互', url: 'https://htmx.org/', tag: 'No-Build' },
      { id: 'vitest', title: 'Vitest', description: '极速单元测试框架', url: 'https://vitest.dev/' }
    ]
  },
  {
    id: 'animation',
    title: '动画特效',
    description: '动画库、特效和交互效果',
    icon: Sparkles,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    items: [
      { id: 'framer-motion', title: 'Framer Motion', description: 'React 生产级动画库', url: 'https://www.framer.com/motion/', tag: 'Top Pick' },
      { id: 'gsap', title: 'GSAP', description: '专业级 Web 动画平台', url: 'https://greensock.com/gsap/' },
      { id: 'threejs', title: 'Three.js', description: 'JavaScript 3D 库', url: 'https://threejs.org/' },
      { id: 'lottie', title: 'Lottie', description: '轻量级动画格式', url: 'https://airbnb.io/lottie/' },
      { id: 'react-spring', title: 'React Spring', description: '基于物理的动画库', url: 'https://react-spring.dev/' },
      { id: 'animejs', title: 'Anime.js', description: '轻量级 JS 动画库', url: 'https://animejs.com/' },
      { id: 'auto-animate', title: 'AutoAnimate', description: '零配置自动过渡动画', url: 'https://auto-animate.formkit.com/', tag: 'Easy' },
      { id: 'matterjs', title: 'Matter.js', description: '2D 物理引擎', url: 'https://brm.io/matter-js/' },
      { id: 'tsparticles', title: 'tsParticles', description: '创建粒子效果的轻量库', url: 'https://particles.js.org/' },
      { id: 'motion-one', title: 'Motion One', description: '基于 WAAPI 的动画库', url: 'https://motion.dev/' }
    ]
  },
  {
    id: 'ui-design',
    title: 'UI 设计',
    description: '组件库、设计系统和 UI 资源',
    icon: Palette,
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
    items: [
      { id: 'shadcn', title: 'shadcn/ui', description: '复制粘贴的精美组件集合', url: 'https://ui.shadcn.com/', tag: 'Trending' },
      { id: 'radix', title: 'Radix UI', description: '无样式、可访问的组件原语', url: 'https://www.radix-ui.com/' },
      { id: 'headless', title: 'Headless UI', description: '与 Tailwind 完美配合的组件', url: 'https://headlessui.com/' },
      { id: 'ant-design', title: 'Ant Design', description: '企业级 UI 设计语言', url: 'https://ant.design/' },
      { id: 'lucide', title: 'Lucide Icons', description: '美观一致的图标库', url: 'https://lucide.dev/', tag: 'Icons' },
      { id: 'phosphor', title: 'Phosphor Icons', description: '灵活的图标族', url: 'https://phosphoricons.com/' },
      { id: 'chakra', title: 'Chakra UI', description: '模块化且易用的组件库', url: 'https://chakra-ui.com/' },
      { id: 'mantine', title: 'Mantine', description: '功能齐全的 React 组件库', url: 'https://mantine.dev/' }
    ]
  },
  {
    id: 'devtools',
    title: '开发工具',
    description: '提升开发效率的工具和插件',
    icon: Wrench,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    items: [
      { id: 'vscode', title: 'VS Code', description: '最流行的代码编辑器', url: 'https://code.visualstudio.com/', tag: 'Editor' },
      { id: 'stackblitz', title: 'StackBlitz', description: '浏览器中的全栈 IDE', url: 'https://stackblitz.com/', tag: 'Cloud' },
      { id: 'codesandbox', title: 'CodeSandbox', description: '快速 Web 开发平台', url: 'https://codesandbox.io/' },
      { id: 'figma', title: 'Figma', description: '协作界面设计工具', url: 'https://www.figma.com/' },
      { id: 'raycast', title: 'Raycast', description: '极速且可扩展的启动器', url: 'https://www.raycast.com/', tag: 'Mac' },
      { id: 'warp', title: 'Warp', description: '21世纪的终端工具', url: 'https://www.warp.dev/' },
      { id: 'postman', title: 'Postman', description: 'API 开发与测试平台', url: 'https://www.postman.com/' },
      { id: 'transform', title: 'Transform.tools', description: '各类代码转换工具集合', url: 'https://transform.tools/' }
    ]
  },
  {
    id: 'learning',
    title: '学习资源',
    description: '教程、文档和学习材料',
    icon: BookOpen,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    items: [
      { id: 'mdn', title: 'MDN Web Docs', description: 'Web 标准的权威文档', url: 'https://developer.mozilla.org/', tag: 'Official' },
      { id: 'webdev', title: 'web.dev', description: 'Google 的现代 Web 开发指南', url: 'https://web.dev/' },
      { id: 'freecodecamp', title: 'freeCodeCamp', description: '免费学习编程', url: 'https://www.freecodecamp.org/' },
      { id: 'javascript-info', title: 'JavaScript.info', description: '现代 JavaScript 教程', url: 'https://javascript.info/' },
      { id: 'patterns', title: 'Patterns.dev', description: '免费的设计模式书籍', url: 'https://patterns.dev/' },
      { id: 'odyssey', title: 'Total TypeScript', description: 'TypeScript 高级教程', url: 'https://www.totaltypescript.com/' }
    ]
  },
  {
    id: 'assets',
    title: '资源素材',
    description: '字体、图片、视频等设计素材',
    icon: ImageIcon,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100',
    items: [
      { id: 'unsplash', title: 'Unsplash', description: '免费的高质量图片', url: 'https://unsplash.com/', tag: 'Images' },
      { id: 'pexels', title: 'Pexels', description: '免费素材图片和视频', url: 'https://www.pexels.com/' },
      { id: 'google-fonts', title: 'Google Fonts', description: '免费开源字体库', url: 'https://fonts.google.com/' },
      { id: 'undraw', title: 'unDraw', description: '开源插画集', url: 'https://undraw.co/' },
      { id: 'huemint', title: 'Huemint', description: 'AI 色彩生成器', url: 'https://huemint.com/' }
    ]
  },
  {
    id: 'community',
    title: '社区平台',
    description: '技术社区、问答平台和交流空间',
    icon: Users,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    items: [
      { id: 'github', title: 'GitHub', description: '世界最大的代码托管平台', url: 'https://github.com/', tag: 'Must Have' },
      { id: 'stackoverflow', title: 'Stack Overflow', description: '开发者问答社区', url: 'https://stackoverflow.com/' },
      { id: 'juejin', title: '掘金', description: '中文技术交流社区', url: 'https://juejin.cn/', tag: 'CN' },
      { id: 'devto', title: 'DEV Community', description: '建设性的开发者社区', url: 'https://dev.to/' },
      { id: 'v2ex', title: 'V2EX', description: '创意工作者社区', url: 'https://www.v2ex.com/' },
      { id: 'producthunt', title: 'Product Hunt', description: '发现新奇的科技产品', url: 'https://www.producthunt.com/' }
    ]
  }
];