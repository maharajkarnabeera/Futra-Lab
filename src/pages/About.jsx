import TeamMember from "../components/TeamMember";

const About = () => {
  const teamMembers = [
    {
      image: "https://via.placeholder.com/150",
      name: "Alex Johnson",
      position: "CEO",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Emily Carter",
      position: "CTO",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Michael Brown",
      position: "COO",
    },
  ];

  return (
    <div className="bg-white min-h-screen px-6 py-10">

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our History</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* <img
            src="https://via.placeholder.com/500x300"
            alt="History"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          /> */}
          <p className="text-gray-700 md:w-1/2 text-lg leading-relaxed">
            Founded in 1998, SiteDesign began as a small startup with a vision to
            revolutionize the digital landscape. Over the years, we have grown into a
            leading company, offering innovative solutions that have transformed the
            industry.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
        <div className="bg-gray-100 rounded-lg p-6 shadow-md">
          <p className="text-gray-700 text-lg leading-relaxed">
            At SiteDesign, our mission is to deliver cutting-edge digital solutions
            that empower our clients to achieve their goals. We are committed to
            innovation, excellence, and creating value for our stakeholders.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
