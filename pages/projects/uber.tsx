import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Image from 'next/image';
import sp from '@/assets/projects/placeholder-graphic.png';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import SocialIcons from '@/components/SocialIcons';

const Uber = () => {
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
            I had the opportunity to work with Fair, a company owned by Uber, as
            a Frontend developer. The project consisted of building React JS
            pages that were intended to be used as part of a new website for the
            company. One of the main challenges of the project was that the
            designs for the pages were quite modern and required some advanced
            development skills to implement.
          </p>
          <p>
            One of the key requirements for the project was that the pages
            needed to use Contentful as a CMS. This meant that I had to work
            closely with the backend team to ensure that the pages were properly
            integrated with the CMS and that the data was being displayed
            correctly.
          </p>
          <p>
            The project was quite challenging, but I was able to successfully
            deliver the pages on time and to a high standard. One of the
            benefits of working on this project was that I received some good
            experience going through detailed code reviews and git history best
            practices. Uber had lead engineers reviewing Pull Requests and it
            was a great opportunity to learn from their experience and improve
            my development skills.
          </p>

          <p>
            I also had to work closely with the design team to ensure that the
            pages were visually accurate and consistent with the designs
            provided. I was able to use my skills in React JS, Contentful, and
            design to deliver a website that met the client's expectations and
            was visually pleasing.
          </p>
          <p>
            Overall, working with Fair was a great experience. I was able to
            work on a challenging project and learn from experienced engineers,
            which helped me to improve my skills as a developer. The project was
            a success and the website was well-received by the client. I am
            proud of the work that I did on this project, and I am glad to have
            had the opportunity to work with Fair and contribute to their
            success.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default Uber;
