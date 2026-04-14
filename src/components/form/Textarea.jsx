/**
 * Textarea — labeled multi-line input for the form panel.
 * @param {{ label: string, value: string, onChange: (v:string)=>void, placeholder?: string, rows?: number }} props
 */
export default function Textarea({ label, value, onChange, placeholder = "", rows = 3 }) {
  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm
                   text-slate-100 placeholder-slate-500 resize-none
                   focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                   transition-colors"
      />
    </div>
  );
}

