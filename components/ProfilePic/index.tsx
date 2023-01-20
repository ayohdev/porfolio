import Image from 'next/image';
import avatar from '../../assets/andrew_hewitt.png';

const ProfilePic = () => {
  return (
    <div className="profile-pic text-center text-white">
      <Image
        src={avatar}
        alt="Picture of the author"
        width={220}
        height={220}
        className="m-auto"
      />
      <h1 className="text-3xl font-poppins font-bold mt-4">Andrew Hewitt</h1>
      <h4 className="text-lg">Frontend Engineer</h4>
    </div>
  );
};

export default ProfilePic;
