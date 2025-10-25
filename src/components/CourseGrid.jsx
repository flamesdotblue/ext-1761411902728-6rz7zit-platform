import React from 'react';
import { BookOpen, Star, PlayCircle } from 'lucide-react';

const courses = [
  { id: 1, title: 'Intro to AI & Machine Learning', level: 'Beginner', rating: 4.8, color: 'from-indigo-500 to-blue-500' },
  { id: 2, title: 'Full-Stack Web Development', level: 'Intermediate', rating: 4.7, color: 'from-emerald-500 to-teal-500' },
  { id: 3, title: '3D Design for Education', level: 'All Levels', rating: 4.6, color: 'from-fuchsia-500 to-pink-500' },
  { id: 4, title: 'Data Visualization & Storytelling', level: 'Intermediate', rating: 4.9, color: 'from-amber-500 to-orange-500' },
];

function CourseCard({ title, level, rating, color }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10">
      <div className={`h-36 bg-gradient-to-br ${color} relative`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,white,transparent_50%)]" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg leading-snug">{title}</h3>
          <span className="inline-flex items-center gap-1 text-amber-300 text-sm"><Star className="h-4 w-4" /> {rating}</span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-slate-400 text-sm">
          <BookOpen className="h-4 w-4" />
          <span>{level}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-500/90 hover:bg-indigo-600 transition">
            <PlayCircle className="h-4 w-4" /> Start
          </button>
          <button className="text-slate-300 hover:text-white text-sm">Details</button>
        </div>
      </div>
    </div>
  );
}

export default function CourseGrid() {
  return (
    <div>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Courses</h2>
          <p className="text-slate-400 mt-1">High-impact content across technology and design.</p>
        </div>
        <a href="#" className="text-indigo-400 hover:text-indigo-300">View all</a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((c) => (
          <CourseCard key={c.id} title={c.title} level={c.level} rating={c.rating} color={c.color} />
        ))}
      </div>
    </div>
  );
}
