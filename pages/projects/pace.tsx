import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Image from 'next/image';
import pace from '@/assets/projects/pace_graphic.png';
import Nav from '@/components/Nav';

const Pace = () => {
  return (
    <Layout>
      <Container>
        <Nav />
        <Image
          src={pace}
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
            that met the needs of Wells Fargo&apos;s customers. I used React JS,
            Typescript, Bootstrap 5, Javascript, and SCSS to build the website,
            which was designed to be highly responsive and optimized for all
            devices.
          </p>
          <p>
            Pepsico&apos;s project was a website redesign that focused on
            creating a more engaging and interactive user experience. I used
            React JS and TypeScript to create a highly interactive website that
            provided users with a wealth of information about Pepsico&apos;s
            products and services. The website was designed to be highly
            responsive and optimized for all devices, and it was a great
            success.
          </p>

          <p>
            BB&T Bank&apos;s project was a website redesign for their online
            banking platform. The goal was to provide a more seamless and
            efficient online banking experience for their customers. I used
            React JS, Typescript, Bootstrap 5, Javascript, and SCSS to build the
            website, which was designed to be highly responsive and optimized
            for all devices.
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
