const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-6 text-center">
      
      {/* SVG Illustration */}
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        className="w-72 md:w-96 mb-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle cx="150" cy="150" r="140" fill="#E0E7FF" opacity="0.5" />
        
        {/* 404 Text */}
        <text
          x="150"
          y="100"
          fontSize="80"
          fontWeight="bold"
          textAnchor="middle"
          fill="#4F46E5"
          fontFamily="Arial, sans-serif"
        >
          404
        </text>

        {/* Sad face */}
        <circle cx="150" cy="180" r="35" fill="#FCD34D" stroke="#F59E0B" strokeWidth="2" />
        
        {/* Eyes */}
        <circle cx="135" cy="170" r="4" fill="#1F2937" />
        <circle cx="165" cy="170" r="4" fill="#1F2937" />
        
        {/* Sad mouth */}
        <path
          d="M 135 190 Q 150 185 165 190"
          stroke="#1F2937"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Floating elements */}
        <circle cx="80" cy="80" r="8" fill="#818CF8" opacity="0.6" />
        <circle cx="240" cy="120" r="12" fill="#A78BFA" opacity="0.5" />
        <circle cx="260" cy="220" r="6" fill="#C7D2FE" opacity="0.7" />
        <rect x="50" y="240" width="15" height="15" fill="#E0E7FF" opacity="0.6" />
      </svg>

      {/* Text */}
      <h1 className="text-4xl font-bold text-indigo-600 mb-3">
        Page Not Found
      </h1>

      <p className="text-gray-600 max-w-md mb-8 text-lg">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      {/* Button */}
      <button
        onClick={() => window.location.href = '/'}
        className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;