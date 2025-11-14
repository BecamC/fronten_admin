import { useToken } from "../contexts/TokenContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { removeToken, token } = useToken();
  const navigate = useNavigate();

  function handleLogout() {
    removeToken();
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 font-semibold"
            >
              Logout
            </button>
          </div>

          <div className="mb-6">
            <p className="text-gray-600">Welcome! You are logged in.</p>
            {token && (
              <p className="text-sm text-gray-500 mt-2">
                Token: {token.substring(0, 30)}...
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button
              className="bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-left"
              onClick={() => alert("Button 1 clicked!")}
            >
              Button 1
            </button>

            <button
              className="bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold text-left"
              onClick={() => alert("Button 2 clicked!")}
            >
              Button 2
            </button>

            <button
              className="bg-purple-600 text-white px-6 py-4 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold text-left"
              onClick={() => alert("Button 3 clicked!")}
            >
              Button 3
            </button>

            <button
              className="bg-orange-600 text-white px-6 py-4 rounded-lg hover:bg-orange-700 transition-colors duration-200 font-semibold text-left"
              onClick={() => alert("Button 4 clicked!")}
            >
              Button 4
            </button>

            <button
              className="bg-teal-600 text-white px-6 py-4 rounded-lg hover:bg-teal-700 transition-colors duration-200 font-semibold text-left"
              onClick={() => alert("Button 5 clicked!")}
            >
              Button 5
            </button>

            <button
              className="bg-pink-600 text-white px-6 py-4 rounded-lg hover:bg-pink-700 transition-colors duration-200 font-semibold text-left"
              onClick={() => alert("Button 6 clicked!")}
            >
              Button 6
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

