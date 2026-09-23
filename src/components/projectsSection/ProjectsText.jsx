const ProjectsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <span className="text-cyan text-sm uppercase tracking-[0.2em] mb-3">Selected work</span>
      <h2 className="text-5xl md:text-6xl font-bold text-orange mb-6">Projects</h2>
      <p className="text-lg text-center text-lightGrey max-w-2xl leading-relaxed">
        I develop scalable, high-performance solutions with a focus on usability
        and modern design principles. From dynamic websites to interactive
        applications, I focus on delivering seamless user experiences.
      </p>
      <div className="mt-5 w-16 h-[3px] rounded-full bg-gradient-to-r from-orange to-lightOrange" />
    </div>
  );
};

export default ProjectsText;