import TeamMember from "../components/TeamMember";

const About = () => {
  const teamMembers = [
    {
      image: "https://facultyweb.kennesaw.edu/mamirgho/images/Pic_MA3.jpeg",
      name: "Dr. Mahyar Amirgholy",
      position: "Assistant Professor",
    },
    {/*
      image: "https://via.placeholder.com/150",
      name: "Emily Carter",
      position: "CTO",
    */},
    {/*
      image: "https://via.placeholder.com/150",
      name: "Michael Brown",
      position: "COO",
    */},
  ];

  return (
    <div className="bg-white min-h-screen px-6 py-10">

      {/* <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our History</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* <img
            src="https://via.placeholder.com/500x300"
            alt="History"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          /> 
          <p className="text-gray-700 md:w-1/2 text-lg leading-relaxed">
            Founded in 1998, SiteDesign began as a small startup with a vision to
            revolutionize the digital landscape. Over the years, we have grown into a
            leading company, offering innovative solutions that have transformed the
            industry.
          </p>
        </div>
      </section> */}

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
        <div className="bg-gray-100 rounded-lg p-6 shadow-md">
          <p className="text-gray-700 text-lg leading-relaxed">
          Futra Lab pioneers intelligent transportation solutions, leveraging advancements in data science, machine learning, and communication technologies to enhance mobility, efficiency, safety, and sustainability. Our mission is to transform transportation systems into adaptive, real-time networks that optimize traffic flow, reduce emissions, and improve energy efficiency and safety. Committed to inclusivity, we design equitable solutions that benefit underserved communities and foster societal impact. Through interdisciplinary collaboration with public, private, and community stakeholders, we address complex challenges with holistic, practical innovations. At Futra Lab, we envision a future where transportation bridges barriers, connecting people seamlessly in a safer, sustainable, and equitable world.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Team</h2>
        <div className="flex flex-wrap justify-right gap-8">
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
