const SingleSkill = ({ name, icon: Icon, category, color }) => {
  return (
    <>
      <style>{`
        .skill-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(245,158,11,0.07), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .skill-card:hover::before { opacity: 1; }
        .skill-icon-wrap { transition: transform 0.3s ease; }
        .skill-card:hover .skill-icon-wrap { transform: scale(1.12); }
      `}</style>

      <div className="skill-card relative flex flex-col items-center justify-center gap-3
                      p-5 rounded-[14px]
                      border border-[#f59e0b]/15
                      bg-[#f59e0b]/[0.03]
                      hover:border-[#f59e0b]/40
                      hover:-translate-y-1
                      hover:shadow-[0_8px_24px_rgba(245,158,11,0.12)]
                      transition-all duration-300 cursor-default overflow-hidden">

        {/* Category badge */}
        <span className="absolute top-2 right-2 text-[9px] tracking-widest uppercase
                         text-[#f59e0b]/35 font-medium hidden sm:block">
          {category}
        </span>

        {/* Icon with brand color on hover */}
        <div
          className="skill-icon-wrap text-5xl transition-colors duration-300"
          style={{ color: "rgb(156,163,175)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = color)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(156,163,175)")}
        >
          <Icon />
        </div>

        {/* Name */}
        <p className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wide text-center">
          {name}
        </p>
      </div>
    </>
  );
};

export default SingleSkill;