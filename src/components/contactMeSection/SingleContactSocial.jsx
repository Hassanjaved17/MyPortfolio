const SingleContactSocial = ({ link, Icon, hoverColor }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 border-2 border-[#FB9718] rounded-full text-2xl
                 transition-all duration-300 hover:bg-[#FB9718] hover:text-white ${hoverColor}`}
    >
      <Icon />
    </a>
  );
};

export default SingleContactSocial;
