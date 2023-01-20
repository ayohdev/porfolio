import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Image from 'next/image';
import sp from '@/assets/projects/placeholder-graphic.png';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import SocialIcons from '@/components/SocialIcons';

const StackPath = () => {
  return (
    <Layout>
      <Container>
        <div className="columns-4 gap-10 flex justify-between items-center">
          <Link href="/" className="text-white flex">
            <AiOutlineArrowLeft fill="white" />
            Back
          </Link>
          <h1 className="col-span-2 text-center text-white font-bold text-lg md:text-3xl ">
            Andrew Hewitt
          </h1>
          <SocialIcons />
        </div>

        <Image
          src={sp}
          className="hero"
          alt="Andrew Hewitt's Work on StackPath"
          width={1920}
        />
        <p className="mt-10 text-white text-lg">
          Responsible for maintaining, enhancing, and adding new features to
          StackPath’s marketing sites. Most notable project is migrating their
          main WWW site from dotCMS to Gatsby JS with a headless CMS. The
          project took 6 months and saved the company $20,000 a year in hosting
          and service fees to use dotCMS. Technologies include: React JS, Gatsby
          JS, SCSS, webpack, Bootstrap, Docker, WordPress, Figma, and Jira.
        </p>
      </Container>
    </Layout>
  );
};

export default StackPath;
