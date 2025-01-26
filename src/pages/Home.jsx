import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  return (
    <div>
       <main className="text-center py-20 bg-white">
        <h2 className="text-3xl font-bold mb-4">
          Welcome to <span className="text-blue-600">Futra Lab</span>
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Discover the future with our innovative web solutions.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
        onClick={() => navigate("/predict")}>
          Get Started
        </button>
      </main>

        {/* Features Section */}
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-10 px-4">
        <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Explore Our Features</h3>
          <p className="text-gray-600 mb-4">
            Experience cutting-edge technology and exceptional service.
          </p>
          <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
          onClick={() => navigate("/features")}>
            Learn More
          </button>
        </div>
        <div className="bg-black p-6 rounded-lg shadow-md text-center text-white">
          <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
          <p className="text-gray-300 mb-4">
            We are committed to delivering excellence and innovation.
          </p>
          <button className="px-4 py-2 bg-teal-500 rounded hover:bg-teal-600 transition"
           onClick={() => navigate("/about")}>
            Discover More
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home