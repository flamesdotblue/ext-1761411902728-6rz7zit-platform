import React, { useMemo, useState } from 'react';
import { Shield, Users, Settings, BarChart3, GraduationCap, PlusCircle, FolderGit2, Video, Image, FileText, CheckCircle } from 'lucide-react';

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm md:text-base transition border ${
      active ? 'bg-indigo-500 border-indigo-500 text-white' : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-200'
    }`}
  >
    {children}
  </button>
);

const StatCard = ({ icon: Icon, label, value, accent = 'indigo' }) => (
  <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex items-center gap-4">
    <div className={`p-3 rounded-lg bg-${accent}-500/20 text-${accent}-300`}>{<Icon className="h-6 w-6" />}</div>
    <div>
      <div className="text-slate-300 text-sm">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  </div>
);

function AdminPanel() {
  const stats = useMemo(() => [
    { icon: Users, label: 'Active Users', value: '2,431', accent: 'sky' },
    { icon: BarChart3, label: 'Monthly Enrollments', value: '824', accent: 'emerald' },
    { icon: Settings, label: 'Systems Healthy', value: '99.9% Uptime', accent: 'violet' },
  ], []);

  return (
    <div className="grid gap-6">
      <div className="grid md:grid-cols-3 gap-4">
        {stats.map((s, idx) => (
          <StatCard key={idx} icon={s.icon} label={s.label} value={s.value} accent={s.accent} />
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-xl bg-white/5 border border-white/10 p-6">
          <div className="flex items-center gap-2 text-slate-200 font-medium mb-3"><Shield className="h-5 w-5" /> User & Role Management</div>
          <p className="text-slate-400 text-sm mb-4">Create roles, assign permissions, and audit access.</p>
          <button className="px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 transition">Open Console</button>
        </div>
        <div className="rounded-xl bg-white/5 border border-white/10 p-6">
          <div className="flex items-center gap-2 text-slate-200 font-medium mb-3"><Settings className="h-5 w-5" /> Course Governance</div>
          <p className="text-slate-400 text-sm mb-4">Approve course listings, moderate reviews, and ensure quality.</p>
          <button className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition">Review Queue</button>
        </div>
        <div className="rounded-xl bg-white/5 border border-white/10 p-6">
          <div className="flex items-center gap-2 text-slate-200 font-medium mb-3"><BarChart3 className="h-5 w-5" /> Analytics & Reports</div>
          <p className="text-slate-400 text-sm mb-4">Monitor engagement, completion rates, and revenue.</p>
          <button className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition">View Reports</button>
        </div>
      </div>
    </div>
  );
}

function InstructorPanel() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="rounded-xl bg-white/5 border border-white/10 p-6">
        <div className="flex items-center gap-2 text-slate-200 font-medium mb-3"><PlusCircle className="h-5 w-5" /> Create a Course</div>
        <p className="text-slate-400 text-sm mb-4">Design curricula, set modules and assessments, and publish.</p>
        <button className="px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 transition">Start Builder</button>
      </div>
      <div className="rounded-xl bg-white/5 border border-white/10 p-6">
        <div className="flex items-center gap-2 text-slate-200 font-medium mb-3"><Video className="h-5 w-5" /> Upload Media</div>
        <p className="text-slate-400 text-sm mb-4">Add videos, images, and documents to lessons.</p>
        <div className="flex gap-2 text-slate-300 text-sm">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10"><Video className="h-4 w-4" /> Video</span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10"><Image className="h-4 w-4" /> Photo</span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10"><FileText className="h-4 w-4" /> Document</span>
        </div>
      </div>
      <div className="rounded-xl bg-white/5 border border-white/10 p-6">
        <div className="flex items-center gap-2 text-slate-200 font-medium mb-3"><FolderGit2 className="h-5 w-5" /> Grade Projects</div>
        <p className="text-slate-400 text-sm mb-4">Review student submissions with rubrics and give feedback.</p>
        <button className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition">Open Submissions</button>
      </div>
    </div>
  );
}

function StudentPanel() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="rounded-xl bg-white/5 border border-white/10 p-6">
        <div className="flex items-center gap-2 text-slate-200 font-medium mb-3"><GraduationCap className="h-5 w-5" /> My Courses</div>
        <p className="text-slate-400 text-sm mb-4">Continue learning where you left off and track progress.</p>
        <button className="px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 transition">Go to Learning</button>
      </div>
      <div className="rounded-xl bg-white/5 border border-white/10 p-6">
        <div className="flex items-center gap-2 text-slate-200 font-medium mb-3"><FolderGit2 className="h-5 w-5" /> Submit Project</div>
        <p className="text-slate-400 text-sm mb-4">Upload code, designs, or documents for evaluation.</p>
        <button className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition">Upload Now</button>
      </div>
      <div className="rounded-xl bg-white/5 border border-white/10 p-6">
        <div className="flex items-center gap-2 text-slate-200 font-medium mb-3"><CheckCircle className="h-5 w-5" /> Certifications</div>
        <p className="text-slate-400 text-sm mb-4">Earn verifiable certificates after completing courses.</p>
        <button className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition">View Certificates</button>
      </div>
    </div>
  );
}

export default function RoleDashboards() {
  const [role, setRole] = useState('Admin');

  return (
    <div className="">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Role-based Dashboards</h2>
          <p className="text-slate-400 mt-1">Switch between Admin, Instructor, and Student views.</p>
        </div>
        <div className="flex gap-2">
          <TabButton active={role === 'Admin'} onClick={() => setRole('Admin')}>Admin</TabButton>
          <TabButton active={role === 'Instructor'} onClick={() => setRole('Instructor')}>Instructor</TabButton>
          <TabButton active={role === 'Student'} onClick={() => setRole('Student')}>Student</TabButton>
        </div>
      </div>

      <div className="grid gap-6">
        {role === 'Admin' && <AdminPanel />}
        {role === 'Instructor' && <InstructorPanel />}
        {role === 'Student' && <StudentPanel />}
      </div>
    </div>
  );
}
