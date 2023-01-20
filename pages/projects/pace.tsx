import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Image from 'next/image';
import sp from '@/assets/projects/placeholder-graphic.png';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import SocialIcons from '@/components/SocialIcons';

const Pace = () => {
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
            As a Frontend UX/UI developer, I had the opportunity to work with
            Pace Communications, a leading digital agency, on several
            high-profile projects for some of the biggest brands in the world.
            My main responsibilities were to design and develop the frontend of
            websites for Wells Fargo, Pepsico, and BB&T Bank (Now Truist).
          </p>
          <p>
            The Wells Fargo project was a large-scale website redesign that
            required extensive UX/UI design work. I worked closely with the
            design team to create a user-friendly and visually appealing website
            that met the needs of Wells Fargo's customers. I used React JS,
            Typescript, Bootstrap 5, Javascript, and SCSS to build the website,
            which was designed to be highly responsive and optimized for all
            devices.
          </p>
          <p>
            Pepsico's project was a website redesign that focused on creating a
            more engaging and interactive user experience. I used React JS and
            TypeScript to create a highly interactive website that provided
            users with a wealth of information about Pepsico's products and
            services. The website was designed to be highly responsive and
            optimized for all devices, and it was a great success.
          </p>

          <p>
            BB&T Bank's project was a website redesign for their online banking
            platform. The goal was to provide a more seamless and efficient
            online banking experience for their customers. I used React JS,
            Typescript, Bootstrap 5, Javascript, and SCSS to build the website,
            which was designed to be highly responsive and optimized for all
            devices.
          </p>

          <p>
            All three projects were completed on time and within budget, and the
            final websites were well-received by the clients. The projects gave
            me valuable experience working on large-scale projects for
            well-known brands and I was able to learn and utilize new
            technologies like React JS, Typescript, Bootstrap 5, Javascript, and
            SCSS. It was a great opportunity to work with a talented team of
            developers, designers and project managers, and I am proud of the
            final product that we delivered.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default Pace;
