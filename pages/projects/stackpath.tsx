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
        <div className="text-white text-lg mt-10">
          <p>
            StackPath, a leading content delivery network provider, was facing a
            significant challenge with their marketing website. The website was
            built on dotCMS, a clunky Java-based content management system that
            was both expensive and difficult to work with. The internal team at
            StackPath was struggling to update content and had no way of working
            on the site live. The cost of dotCMS was also a major issue, with an
            annual fee of $18,000 per year, and an additional $18,000 per
            environment per year for a staging and development environment.
          </p>
          <p>
            To address these challenges, I led a project to migrate the website
            over to Gatsby Cloud, which enabled us to use Gatsby JS on the
            frontend and WordPress as a headless CMS. This approach allowed for
            much greater flexibility and ease of use, and significantly reduced
            the cost of the website.
          </p>
          <p>
            The project required some custom workflows with Docker and Github
            Actions, along with React JS and WordPress development. I worked
            closely with the internal team at StackPath to understand their
            needs and tailor the website to their specific requirements. We also
            put in place a robust testing and QA process to ensure that the
            website was stable and reliable.
          </p>

          <p>
            The result of the project was a significant improvement in the
            functionality and performance of the website. The internal team at
            StackPath was able to easily update content, and the website was
            much faster and more responsive for users. The cost savings
            associated with the migration to Gatsby Cloud were also substantial,
            and the project was completed on time and within budget.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default StackPath;
