import React from 'react';
import Hero from './components/Hero';
import RoleDashboards from './components/RoleDashboards';
import CourseGrid from './components/CourseGrid';
import UploadCenter from './components/UploadCenter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Hero />
      <main className="relative z-10">
        <section id="dashboards" className="container mx-auto px-4 py-16">
          <RoleDashboards />
        </section>
        <section id="courses" className="container mx-auto px-4 py-16">
          <CourseGrid />
        </section>
        <section id="uploads" className="container mx-auto px-4 py-16">
          <UploadCenter />
        </section>
      </main>
      <Footer />
    </div>
  );
}
