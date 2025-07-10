import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6">
      <h1 className="text-7xl font-bold mb-4 animate-bounce">404</h1>
      <h2 className="text-2xl mb-2">Website Not Found</h2>
      <p className="text-center text-lg mb-6 max-w-md">
        You’ve wandered into an unknown dimension. The page you’re looking for doesn't exist in this reality.
      </p>
      <Link
        to="/"
        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 animate-pulse"
      >
        Return to Main Page
      </Link>
    </div>
  );
};

export default Error;
