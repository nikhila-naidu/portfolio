import {
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';

const Social = () => {
  const socialContent = [
    // {
    //   id: 1,
    //   link: "https://www.facebook.com/",
    //   icon: <FaFacebookF />,
    //   iconClass: "text-[#1773EA]",
    // },
    {
      id: 2,
      link: 'https://github.com/nikhila-naidu',
      icon: <FaGithub />,
      // iconClass: 'text-[#1C9CEA]',
    },
    {
      id: 3,
      link: 'https://instagram.com/nikhilanaidu_kaparapu',
      icon: <FaInstagram />,
      iconClass: 'text-[#e14a84]',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/nikhila-naidu-ab2535263/',
      icon: <FaLinkedinIn />,
      iconClass: 'text-[#0072b1]',
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target='_blank'
          rel='noopener noreferrer'
          key={item.id}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
