const SingleContactSocial = ({ link, Icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 border-2 border-orange rounded-full text-2xl
                 transition-all duration-300 hover:bg-orange hover:text-white"
    >
      <Icon />
    </a>
  );
};

export default SingleContactSocial;