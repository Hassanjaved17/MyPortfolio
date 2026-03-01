const HeroGradient = () => {
  return (
    <>
      <style>{`
        @keyframes soft-pulse {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1;   }
        }
        .hero-glow {
          will-change: opacity;
          animation: soft-pulse 4s ease-in-out infinite;
        }
      `}</style>

      <div>
        <div className="hero-glow shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10" />
        <div className="shadow-cyanMediumShadow absolute top-[5%] left-0 -z-10 opacity-50" />
        <div className="hero-glow shadow-orangeMediumShadow absolute top-0 right-0 -z-10" />
        <div className="shadow-orangeMediumShadow absolute top-[10%] left-0 -z-10 opacity-50" />
      </div>
    </>
  );
};

export default HeroGradient;