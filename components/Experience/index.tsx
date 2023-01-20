import experience from './dataExperience';

const Experience = () => (
  <>
    <h2 className="font-poppins text-lg font-bold mb-5 mt-10 underline">
      Experience
    </h2>
    {experience.map((job, index) => {
      return (
        <div key={job.id} className="experience pb-10">
          <h3 className="font-semibold">{job.company}</h3>
          <h4>{job.role}</h4>
          <span className="date">{job.date} </span>
          <p>{job.desc}</p>
        </div>
      );
    })}
  </>
);

export default Experience;
