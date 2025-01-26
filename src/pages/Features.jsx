function Features() {
  const features = [
    {
      title: "Advanced Analytics",
      description: "Utilize cutting-edge analytics to gain insights into your data, helping you make informed decisions.",
      image: "src/assets/advancedAnalytics.png", // Replace with actual image path
    },
    {
      title: "Real-time Collaboration",
      description: "Collaborate with your team in real-time, ensuring everyone is on the same page and projects progress smoothly.",
      image: "src/assets/realtimeCollab.png", // Replace with actual image path
    },
    {
      title: "Seamless Integration",
      description: "Integrate effortlessly with existing platforms and tools to streamline your workflow and increase efficiency.",
      image: "src/assets/seamlessInteg.png", // Replace with actual image path
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-40 h-40 mb-6 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features