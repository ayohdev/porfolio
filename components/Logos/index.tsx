import Image from 'next/image';
import yohdev from '../../assets/yohdev_logo.png';
import sp from '../../assets/sp_logo.png';
import sf from '../../assets/sf_logo.png';
import pace from '../../assets/pace_logo.png';
import uber from '../../assets/uber_logo.png';

type Props = {
  logo?: String;
  width?: number;
  center?: Boolean;
};

const Logo = ({ logo, width, center }: Props) => {
  let asset = yohdev;

  if (logo === 'sp') {
    asset = sp;
  } else if (logo === 'sf') {
    asset = sf;
  } else if (logo === 'pace') {
    asset = pace;
  } else if (logo === 'uber') {
    asset = uber;
  }

  return (
    <div className={`logo ${logo} text-white flex flex-col`}>
      <Image
        src={asset}
        className={`${center ? 'logo-img m-auto' : 'logo-img'}`}
        alt="Picture of the author"
        width={width}
      />
    </div>
  );
};

export default Logo;
