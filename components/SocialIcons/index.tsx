import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const SocialIcons = () => (
  <div className="social-icons flex justify-center">
    <a href="https://github.com/ayohdev" target="_blank" rel="noreferrer">
      <AiFillGithub className="icon-social" fill="white" />
    </a>
    <a
      href="https://www.linkedin.com/in/andrew-hewitt-773005134"
      target="_blank"
      rel="noreferrer"
    >
      <AiFillLinkedin className="icon-social" fill="white" />
    </a>
    <a
      href="https://www.instagram.com/yohdev_/"
      target="_blank"
      rel="noreferrer"
    >
      <AiFillInstagram className="icon-social" fill="white" />
    </a>
  </div>
);

export default SocialIcons;
