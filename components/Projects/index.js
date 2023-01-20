import Logo from '@/components/Logos';
import Link from 'next/link';

const Container = () => (
  <div className="projects mt-10">
    <h2 className="text-2xl font-bold mb-5">Projects</h2>
    <div className="grid grid-cols-2 md:grid-cols-6 gap-1">
      <Link href="/projects/stackpath/">
        <Logo logo="sp" width={50} />
      </Link>
      <Link href="/projects/statefarm/">
        <Logo logo="sf" width={145} />
      </Link>
      <Link href="/projects/pace/">
        <Logo logo="pace" width={85} />
      </Link>
      <Link href="/projects/uber/">
        <Logo logo="uber" width={85} />
      </Link>
    </div>
  </div>
);

export default Container;
