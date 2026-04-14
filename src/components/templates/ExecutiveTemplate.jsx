/**
 * Template 5 — EXECUTIVE
 * Centered header, Palatino serif, gold/amber accents, single-column premium feel.
 */
export default function ExecutiveTemplate({ data }) {
  const { personal, summary, experience, skills, education } = data;

  return (
    <div
      className="bg-white min-h-full px-12 py-10"
      style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}
    >
      {/* Centered header */}
      <div className="text-center border-b-2 border-amber-700 pb-6 mb-7">
        <h1 className="text-4xl font-bold text-gray-900 tracking-wide">{personal.name}</h1>
        <p className="text-amber-700 text-base font-semibold uppercase tracking-widest mt-1">
          {personal.title}
        </p>
        <div className="flex justify-center gap-5 mt-3 text-xs text-gray-500 flex-wrap">
          {personal.email    && <span>{personal.email}</span>}
          {personal.phone    && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.linkedin && <span>{personal.linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-7 text-center">
          <p className="text-sm leading-loose text-gray-600 italic max-w-2xl mx-auto">
            {summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-7">
          <h2 className="text-center text-xs uppercase tracking-[0.25em] font-bold text-amber-700 mb-5">
            Professional History
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="border-l-4 border-amber-200 pl-5">
                <div className="flex justify-between items-baseline">
                  <div>
                    <p className="font-bold text-gray-900 text-base">{exp.role}</p>
                    <p className="text-amber-700 font-semibold text-sm">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 ml-4 whitespace-nowrap">{exp.period}</p>
                </div>
                <ul className="mt-2 space-y-1">
                  {exp.bullets.filter(Boolean).map((b, i) => (
                    <li key={i} className="text-sm text-gray-700 flex gap-2 items-start">
                      <span className="text-amber-400 mt-0.5 flex-shrink-0">◆</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills + Education */}
      <div className="grid grid-cols-2 gap-10">
        {skills.length > 0 && (
          <div>
            <h2 className="text-center text-xs uppercase tracking-[0.2em] font-bold text-amber-700 mb-4">
              Areas of Expertise
            </h2>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              {skills.filter(Boolean).map((s, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        )}

        {education.length > 0 && (
          <div>
            <h2 className="text-center text-xs uppercase tracking-[0.2em] font-bold text-amber-700 mb-4">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="text-center">
                  <p className="font-bold text-sm text-gray-900">{edu.degree}</p>
                  <p className="text-xs text-amber-700">{edu.school}</p>
                  <p className="text-xs text-gray-400">
                    {edu.period}{edu.gpa ? ` · GPA ${edu.gpa}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

