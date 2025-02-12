function Features() {
  const features = [
    {
      title: "Real-Time Energy & Emissions Forecasting",
      description: "Leverage cutting-edge machine learning algorithms to predict vehicle energy consumption and emissions in real time. This feature provides actionable insights into fuel and electricity usage, empowering users to make informed decisions that optimize efficiency while reducing their environmental footprint.",
      image: "src/assets/F1.png", // Replace with actual image path
    },
    {
      title: "Personalized Journey Analysis",
      description: "Customize energy and emissions predictions based on user-specific inputs like vehicle type, route, and driving patterns. This tailored approach ensures accurate and relevant insights, making it easy for users to understand the impact of their travel choices on energy consumption and air quality.",
      image: "src/assets/F2.png", // Replace with actual image path
    },
    {
      title: "Interactive Visual Insights",
      description: "Experience data-driven decision-making with intuitive dashboards and interactive visualizations. Explore detailed maps, charts, and comparative scenarios to assess how various factors, such as EV adoption or traffic conditions, influence energy use and emissions across the transportation system.",
      image: "src/assets/F3.png", // Replace with actual image path
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" bg-gray-100 shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
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