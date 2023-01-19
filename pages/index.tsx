import Container from '@/components/Container';

const Home = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 md:col-span-1"></div>
        <div className="col-span-3 md:col-span-2"></div>
      </div>
    </Container>
  );
};

export default Home;
