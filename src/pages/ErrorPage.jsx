import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-500">404</h1>
        <h2 className="text-2xl md:text-4xl font-semibold mt-4">
          Oops! Page not found.
        </h2>
        <p className="mt-2 text-gray-600">
          The page you&#39;re looking for does&#39;nt exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 text-white bg-teal-500 rounded hover:bg-teal-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
