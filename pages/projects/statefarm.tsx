import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Image from 'next/image';
import sf from '@/assets/projects/sf_graphic.png';
import Nav from '@/components/Nav';

const StateFarm = () => {
  return (
    <Layout>
      <Container>
        <Nav />
        <Image
          src={sf}
          className="hero"
          alt="Andrew Hewitt's Work on StackPath"
          width={1920}
        />
        <div className="text-white text-lg mt-10">
          <p>
            As the Lead Frontend Engineer for State Farm&apos;s &apos;Unicorn
            Team,&apos; I had the opportunity to work on two exciting internal
            web applications. The team consisted of Front and Backend
            Developers, DevOps Consultants, and a Project Manager, and we were
            tasked with creating two internal web applications that would help
            State Farm improve its internal processes and support the
            development of its staff.
          </p>
          <p>
            The first project was a learning platform designed to help State
            Farm&apos;s internal developers learn DevOps best practices. This
            platform was built using React JS and was designed to be highly
            interactive and user-friendly. We also used Docker and Kubernetes to
            ensure that the platform was scalable and could handle a large
            number of users. The project was a great success and was
            well-received by the internal development team at State Farm.
          </p>
          <p>
            The second project was a reporting tool that pulled project statuses
            from internal development projects that were intended to automate
            internal processes. This tool was built using React JS and a Python
            API, and it was designed to provide real-time updates on the
            progress of internal projects. The tool was also integrated with
            Docker and Kubernetes to ensure that it was highly available and
            could handle a large number of users.
          </p>

          <p>
            Both projects were completed within six months, which was a
            significant achievement considering the scope and complexity of the
            projects. The launch of the two web applications was a huge success,
            and they have since been widely adopted by State Farm&apos;s
            internal development team.
          </p>
          <p>
            Overall, working on these two projects for State Farm was a
            fantastic experience. I was able to lead a talented team of
            developers and work on cutting-edge technologies to create two web
            applications that have had a significant impact on State Farm&apos;s
            internal processes. The projects were delivered on time, within
            budget, and were well-received by the internal development team.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default StateFarm;
