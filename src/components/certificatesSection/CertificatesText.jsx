const CertificatesText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <span className="text-cyan text-sm uppercase tracking-[0.2em] mb-3">Proof of work</span>
      <h2 className="text-5xl md:text-6xl font-bold text-orange mb-6">Certificates</h2>
      <p className="text-lg text-center text-lightGrey max-w-2xl leading-relaxed">
        Certifications I've earned that back up my skills — from national
        training programs to industry-recognized networking courses.
      </p>
      <div className="mt-5 w-16 h-[3px] rounded-full bg-gradient-to-r from-orange to-lightOrange" />
    </div>
  );
};

export default CertificatesText;