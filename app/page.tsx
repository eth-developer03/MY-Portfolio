"use client";
import dynamic from 'next/dynamic';
import { navItems } from "@/data";

const FloatingNav = dynamic(
  () => import('@/components/ui/floating-nav').then(mod => mod.FloatingNav),
  { ssr: false }
);

const Hero = dynamic(
  () => import('@/components/hero').then(mod => mod.Hero),
  { ssr: false }
);

const Grid = dynamic(
  () => import('@/components/grid').then(mod => mod.Grid),
  { ssr: false }
);

const RecentProjects = dynamic(
  () => import('@/components/recent-projects').then(mod => mod.RecentProjects),
  { ssr: false }
);

const Experience = dynamic(
  () => import('@/components/experience').then(mod => mod.Experience),
  { ssr: false }
);

const Footer = dynamic(
  () => import('@/components/footer').then(mod => mod.Footer),
  { ssr: false }
);

const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <FloatingNav navItems={navItems} />

      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;