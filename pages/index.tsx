import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Image from 'next/image';
import ProfilePic from '@/components/ProfilePic';

const Home = () => {
  return (
    <Layout>
      <Container>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 md:col-span-1">
            <ProfilePic />
          </div>
          <div className="col-span-3 md:col-span-2"></div>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
