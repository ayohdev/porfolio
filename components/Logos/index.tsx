import Image from 'next/image';
import yohdev from '../../assets/yohdev_logo.png';

const Logo = () => {
  return (
    <div className="logo text-center text-white mt-10">
      <Image
        src={yohdev}
        alt="Picture of the author"
        width={90}
        height={25}
        className="m-auto"
      />
    </div>
  );
};

export default Logo;
