const HeroGradient = () => {
  return (
    <>
      <style>{`
        @keyframes soft-pulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1;   }
        }
        .hero-glow {
          will-change: opacity;
          animation: soft-pulse 5s ease-in-out infinite;
        }
        .hero-grid {
          background-image:
            linear-gradient(to right, rgb(var(--color-grey-dark) / 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(var(--color-grey-dark) / 0.2) 1px, transparent 1px);
          background-size: 56px 56px;
        }
      `}</style>

      <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-60" />
        <div className="hero-glow shadow-cyanMediumShadow absolute top-[-10%] right-[10%] -z-10" />
        <div className="shadow-cyanMediumShadow absolute top-[40%] left-[-10%] -z-10 opacity-40" />
        <div className="hero-glow shadow-orangeMediumShadow absolute top-[70%] right-[-10%] -z-10" />
        <div className="shadow-orangeMediumShadow absolute bottom-[-10%] left-[20%] -z-10 opacity-40" />
      </div>
    </>
  );
};

export default HeroGradient;