const AboutCard = ({ icon: Icon, title, content }) => {
  return (
    <div className="w-[320px] px-[26px] py-[15px] flex gap-[20px] items-center">
      <div className="bg-primary-soft flex items-center justify-center rounded-lg p-[12px]">
        <Icon />
      </div>
      <div>
        <h2 className="text-base font-bold">{title}</h2>
        <p className="text-gray-600 text-xs">{content}</p>
      </div>
    </div>
  );
};

export default AboutCard;
