/**
 * SectionHeader — decorative title row inside the form panel.
 * @param {{ title: string, icon: string }} props
 */
export default function SectionHeader({ title, icon }) {
  return (
    <div className="flex items-center gap-2 pt-2 pb-1">
      <span className="text-indigo-400">{icon}</span>
      <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-400">{title}</h3>
    </div>
  );
}

