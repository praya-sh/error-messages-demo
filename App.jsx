const { useState } = React;

const errors = {
  network: "Check your internet connection and try again.",
  server: "Something went wrong on our side. Please try again later.",
  validation: "Please fill out all required fields correctly.",
  region: "We’re switching you to another server. Please wait...",
};

function App() {
  const [error, setError] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-6">Error Message Demo</h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {Object.keys(errors).map((key) => (
          <button
            key={key}
            onClick={() => setError(errors[key])}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
          >
            {key.charAt(0).toUpperCase() + key.slice(1)} Error
          </button>
        ))}
      </div>

      {error && (
        <div className="w-full max-w-md border border-red-200 bg-white shadow-lg rounded-2xl p-4">
          <h2 className="text-lg font-semibold text-red-600">Error</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      )}
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
