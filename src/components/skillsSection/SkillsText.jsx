const SkillsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <span className="text-cyan text-sm uppercase tracking-[0.2em] mb-3">What I work with</span>
      <h2 className="text-5xl md:text-6xl font-bold text-orange mb-6">
        My Skills
      </h2>
      <p className="text-lg text-center text-lightGrey max-w-2xl leading-relaxed">
        I not only work with these technologies but excel in using them with
        best practices to deliver high-quality results. I specialize in crafting
        responsive, user-friendly web interfaces with clean, maintainable code.
      </p>
      <div className="mt-5 w-16 h-[3px] rounded-full bg-gradient-to-r from-orange to-lightOrange" />
    </div>
  );
};

export default SkillsText;