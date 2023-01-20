import Layout from '@/components/Layout';
import Container from '@/components/Container';
import ProfilePic from '@/components/ProfilePic';
import Button from '@/components/Button';
import Logo from '@/components/Logos';

const Home = () => {
  return (
    <Layout>
      <Container>
        <div className="grid grid-cols-3 gap-4">
          <div className="sidebar col-span-3 md:col-span-1">
            <ProfilePic />
            <div className="buttons flex flex-col">
              <Button>Book a Intro Call</Button>
              <Logo />
            </div>
          </div>
          <div className="col-span-3 md:col-span-2"></div>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
