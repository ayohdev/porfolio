import Logo from '@/components/Logos';

const Container = () => (
  <div className="projects mt-10">
    <h2 className="text-2xl font-bold mb-5">Projects</h2>
    <div className="grid grid-cols-2 md:grid-cols-6 gap-1">
      <Logo logo="sp" width={50} />
      <Logo logo="sf" width={145} />
      <Logo logo="pace" width={85} />
      <Logo logo="uber" width={85} />
    </div>
  </div>
);

export default Container;
