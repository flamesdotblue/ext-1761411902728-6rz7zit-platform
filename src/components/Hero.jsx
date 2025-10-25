import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Futuristic Learning Management System
            </h1>
            <p className="mt-4 text-slate-300 text-lg md:text-xl">
              All-in-one platform for Admins, Instructors, and Students. Manage courses, upload photos, videos, and documents, and deliver immersive projects with interactive 3D experiences.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#dashboards" className="inline-flex items-center gap-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-3 transition">
                <Rocket className="h-5 w-5" />
                Explore Dashboards
              </a>
              <a href="#courses" className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-5 py-3 transition">
                <PlayCircle className="h-5 w-5" />
                Browse Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
