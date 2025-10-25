import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-300">
          <p className="text-sm">© {new Date().getFullYear()} NeoLearn LMS. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
