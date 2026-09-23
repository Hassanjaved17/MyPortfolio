const ExperienceText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px] text-center">
      <span className="text-cyan text-sm uppercase tracking-[0.2em] mb-3">My journey</span>
      <h2 className="text-5xl md:text-6xl font-bold text-orange mb-6">Experience</h2>
      <p className="text-lg text-center text-lightGrey max-w-2xl leading-relaxed">
        A quick look at how long I've been building, and what I focus on
        along the way.
      </p>
      <div className="mt-5 w-16 h-[3px] rounded-full bg-gradient-to-r from-orange to-lightOrange" />
    </div>
  );
};

export default ExperienceText;