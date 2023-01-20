import Layout from '@/components/Layout';
import Container from '@/components/Container';
import ProfilePic from '@/components/ProfilePic';
import Button from '@/components/Button';
import Logo from '@/components/Logos';
import Projects from '@/components/Projects';

const Home = () => {
  return (
    <Layout>
      <Container>
        <div className="grid grid-cols-3 gap-4">
          <div className="sidebar col-span-3 md:col-span-1">
            <ProfilePic />
            <div className="buttons flex flex-col">
              <Button>Book a Intro Call</Button>
              <Logo width={90} center={true} />
            </div>
          </div>
          <div className="col-span-3 md:col-span-2 text-white">
            <Projects />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
