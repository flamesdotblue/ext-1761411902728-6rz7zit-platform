import React, { useMemo, useRef, useState } from 'react';
import { Upload, Image as ImageIcon, Video, FileText, X } from 'lucide-react';

function fileType(file) {
  if (!file) return 'file';
  if (file.type.startsWith('image/')) return 'image';
  if (file.type.startsWith('video/')) return 'video';
  return 'doc';
}

function PreviewItem({ file, onRemove }) {
  const type = fileType(file);
  const url = useMemo(() => URL.createObjectURL(file), [file]);

  return (
    <div className="relative rounded-xl bg-white/5 border border-white/10 overflow-hidden">
      <button aria-label="Remove file" onClick={onRemove} className="absolute right-2 top-2 z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/70 hover:bg-slate-900/90">
        <X className="h-4 w-4" />
      </button>
      {type === 'image' && (
        <img src={url} alt={file.name} className="h-40 w-full object-cover" />
      )}
      {type === 'video' && (
        <video src={url} controls className="h-40 w-full object-cover" />
      )}
      {type === 'doc' && (
        <div className="h-40 w-full flex items-center justify-center bg-white/5">
          <FileText className="h-10 w-10 text-slate-300" />
        </div>
      )}
      <div className="p-3 text-sm text-slate-300 truncate">{file.name}</div>
    </div>
  );
}

export default function UploadCenter() {
  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);

  const onSelect = (e) => {
    const list = Array.from(e.target.files || []);
    if (!list.length) return;
    setFiles((prev) => [...prev, ...list]);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const list = Array.from(e.dataTransfer.files || []);
    if (!list.length) return;
    setFiles((prev) => [...prev, ...list]);
  };

  const onRemove = (idx) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Upload Center</h2>
        <p className="text-slate-400 mt-1">Upload photos, videos, and documents for your courses and projects.</p>
      </div>

      <div
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        className="rounded-2xl border-2 border-dashed border-white/15 bg-white/5 p-8 text-center"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300">
          <Upload className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-lg font-medium">Drag & drop files here</h3>
        <p className="text-slate-400 text-sm">Supported: images, videos, PDFs, docs.</p>
        <div className="mt-4">
          <button
            onClick={() => inputRef.current?.click()}
            className="px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 transition"
          >
            Browse Files
          </button>
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            multiple
            accept="image/*,video/*,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt"
            onChange={onSelect}
          />
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {files.map((f, idx) => (
            <PreviewItem key={idx} file={f} onRemove={() => onRemove(idx)} />
          ))}
        </div>
      )}

      {files.length === 0 && (
        <div className="mt-6 grid grid-cols-3 gap-3 text-slate-300">
          <div className="flex items-center gap-2 text-sm"><ImageIcon className="h-4 w-4" /> Photos</div>
          <div className="flex items-center gap-2 text-sm"><Video className="h-4 w-4" /> Videos</div>
          <div className="flex items-center gap-2 text-sm"><FileText className="h-4 w-4" /> Documents</div>
        </div>
      )}
    </div>
  );
}
