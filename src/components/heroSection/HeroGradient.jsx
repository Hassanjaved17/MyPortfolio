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
            linear-gradient(to right, rgb(var(--color-grey-dark) / 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(var(--color-grey-dark) / 0.25) 1px, transparent 1px);
          background-size: 56px 56px;
          -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 20%, black 10%, transparent 75%);
          mask-image: radial-gradient(ellipse 70% 60% at 50% 20%, black 10%, transparent 75%);
        }
      `}</style>

      <div>
        <div className="hero-grid absolute inset-0 -z-20 pointer-events-none" />
        <div className="hero-glow shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10" />
        <div className="shadow-cyanMediumShadow absolute top-[5%] left-0 -z-10 opacity-50" />
        <div className="hero-glow shadow-orangeMediumShadow absolute top-0 right-0 -z-10" />
        <div className="shadow-orangeMediumShadow absolute top-[10%] left-0 -z-10 opacity-50" />
      </div>
    </>
  );
};

export default HeroGradient;