import Layout from '@/components/Layout';
import Container from '@/components/Container';
import ProfilePic from '@/components/ProfilePic';
import Button from '@/components/Button';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import SocialIcons from '@/components/SocialIcons';

const Home = () => {
  return (
    <Layout>
      <Container>
        <div className="grid grid-cols-3 gap-4">
          <div className="sidebar col-span-3 md:col-span-1 md:sticky md:top-10">
            <ProfilePic />
            <div className="buttons flex flex-col">
              <Button>Book a Intro Call</Button>
              <SocialIcons />
            </div>
          </div>
          <div className="col-span-3 md:col-span-2 text-white">
            <Projects />
            <Experience />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
