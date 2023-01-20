import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import SocialIcons from '@/components/SocialIcons';

const Nav = () => (
  <div className="columns-4 gap-10 flex justify-between items-center">
    <Link href="/" className="text-white flex">
      <AiOutlineArrowLeft fill="#10D1D3" className="relative top-1" />
      Back
    </Link>
    <h1 className="col-span-2 text-center text-white font-bold text-lg md:text-3xl ">
      Andrew Hewitt
    </h1>
    <SocialIcons />
  </div>
);

export default Nav;
