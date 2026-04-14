/**
 * Template 2 — PROFESSIONAL
 * Classic 2-column layout, serif fonts, ATS-friendly structure.
 */
export default function ProfessionalTemplate({ data }) {
  const { personal, summary, experience, skills, education } = data;

  return (
    <div className="bg-white min-h-full" style={{ fontFamily: "'Georgia', serif" }}>
      {/* Header */}
      <div className="border-b-4 border-gray-800 px-8 pt-8 pb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900 tracking-wide uppercase">{personal.name}</h1>
        <p className="text-gray-600 mt-1 text-sm uppercase tracking-widest">{personal.title}</p>
        <div className="flex justify-center gap-4 mt-3 text-xs text-gray-500 flex-wrap">
          {personal.email    && <span>✉ {personal.email}</span>}
          {personal.phone    && <span>☎ {personal.phone}</span>}
          {personal.location && <span>⌖ {personal.location}</span>}
          {personal.linkedin && <span>in {personal.linkedin}</span>}
        </div>
      </div>

      {/* Two-column body */}
      <div className="flex">
        {/* Main column */}
        <div className="flex-1 px-8 py-6 space-y-6">
          {summary && (
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">
                Professional Summary
              </h2>
              <p className="text-sm leading-relaxed text-gray-700">{summary}</p>
            </div>
          )}

          {experience.length > 0 && (
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold text-gray-900 border-b border-gray-300 pb-1 mb-4">
                Professional Experience
              </h2>
              <div className="space-y-5">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between">
                      <div>
                        <p className="font-bold text-gray-900">{exp.role}</p>
                        <p className="text-gray-600 text-sm italic">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 whitespace-nowrap ml-4">{exp.period}</p>
                    </div>
                    <ul className="mt-2 ml-4 list-disc space-y-1">
                      {exp.bullets.filter(Boolean).map((b, i) => (
                        <li key={i} className="text-sm text-gray-700">{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-52 bg-gray-50 border-l border-gray-200 px-5 py-6 space-y-6 flex-shrink-0">
          {skills.length > 0 && (
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">
                Core Skills
              </h2>
              <ul className="space-y-1.5">
                {skills.filter(Boolean).map((s, i) => (
                  <li key={i} className="text-xs text-gray-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {education.length > 0 && (
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <p className="text-xs font-bold text-gray-900 leading-snug">{edu.degree}</p>
                    <p className="text-xs text-gray-600 italic">{edu.school}</p>
                    <p className="text-xs text-gray-400">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

