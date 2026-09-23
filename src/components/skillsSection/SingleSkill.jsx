const SingleSkill = ({ name, icon: Icon, category, color }) => {
  return (
    <>
      <style>{`
        .skill-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 14px;
          background: linear-gradient(135deg, rgb(var(--color-orange) / 0.08), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .skill-card:hover::before { opacity: 1; }
        .skill-icon-wrap { transition: transform 0.3s ease; }
        .skill-card:hover .skill-icon-wrap { transform: scale(1.12); }
      `}</style>

      <div className="skill-card relative flex flex-col items-center justify-center gap-3
                      p-5 rounded-[14px]
                      border border-orange/15
                      bg-orange/[0.03]
                      hover:border-orange/40
                      hover:-translate-y-1
                      hover:shadow-cyanShadow
                      transition-all duration-300 cursor-default overflow-hidden">

        <span className="absolute top-2 right-2 text-[9px] tracking-widest uppercase
                         text-orange/35 font-medium hidden sm:block">
          {category}
        </span>

        <div
          className="skill-icon-wrap text-5xl transition-colors duration-300 text-lightGrey"
          onMouseEnter={(e) => (e.currentTarget.style.color = color)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "")}
        >
          <Icon />
        </div>

        <p className="text-xs sm:text-sm font-semibold text-lightGrey tracking-wide text-center">
          {name}
        </p>
      </div>
    </>
  );
};

export default SingleSkill;