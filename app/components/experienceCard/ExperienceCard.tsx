const ExperienceCard = ({
  company,
  role,
  duration,
  location,
  responsibilities,
  tech,
  highlight,
}: {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  tech?: string[];
  highlight?: string;
}) => (
  <div className="relative w-full h-full p-6 flex flex-col gap-4 text-sm leading-relaxed">
    
    {/* TOP STRIP */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/80 to-white/20 rounded-t-xl" />

    {/* HEADER */}
    <div className="flex flex-col gap-1">
      <h3 className="text-xl font-bold tracking-tight">{role}</h3>
      <p className="text-base font-semibold opacity-90">{company}</p>

      <p className="text-xs opacity-70">
        {duration} · {location}
      </p>
    </div>

    {/* HIGHLIGHT BADGE */}
    {highlight && (
      <span className="inline-block w-fit px-3 py-1 text-xs rounded-full bg-black/30 border border-white/20">
        {highlight}
      </span>
    )}

    {/* RESPONSIBILITIES */}
    <ul className="list-disc list-inside space-y-1 opacity-90">
      {responsibilities.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
      
    {/* TECH STACK */}
    {tech && (
      <div className="flex flex-wrap gap-2 pt-2">
        {tech && tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full border border-white/30 bg-white/10"
          >
            {t}
          </span>
        ))}
      </div>
    )}
  </div>
);


export default ExperienceCard