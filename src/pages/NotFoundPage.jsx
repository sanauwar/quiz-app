import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 max-w-md">
          {/* Image */}
          <img
            src="https://img.freepik.com/free-vector/404-error-isometric-illustration_23-2148509538.jpg?t=st=1746377615~exp=1746381215~hmac=56295a5edcefff581fa3cb29254d0874b3746c243d840787ef2a3d810cb69736&w=826"
            alt="Page not found"
            className="mx-auto mb-6 w-64"
          />
          <p className="text-2xl mt-4 text-gray-600">Oops! Page not found.</p>
          <p className="mt-2 text-gray-500">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <a
            href="/"
            className="inline-block mt-6 px-6 py-2 bg-blue-600 text-black rounded-lg hover:bg-blue-700 transition"
          >
            Go Home
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-200 text-gray-600 text-sm">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </footer>
    </div>
  );
};

export default NotFoundPage;
