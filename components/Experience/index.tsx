import experience from './dataExperience';

const Experience = () => (
  <>
    <h2 className="text-2xl font-bold mt-10 mb-5">Experience</h2>
    {experience.map((job, index) => {
      return (
        <div className="experience pb-10">
          <h3>{job.company}</h3>
          <h4>{job.role}</h4>
          <span>{job.date} </span>
          <p>{job.desc}</p>
        </div>
      );
    })}
  </>
);

export default Experience;
