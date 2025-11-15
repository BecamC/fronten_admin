import { useToken } from "../contexts/TokenContext";
import { useNavigate } from "react-router-dom";
import Clock from "../components/Clock";
import Header from "../components/Header";

export default function Dashboard() {
  const { removeToken, token } = useToken();
  const navigate = useNavigate();

  function handleLogout() {
    removeToken();
    navigate("/login");
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black bg-opacity-80 rounded-lg shadow-lg p-8 border-2 border-white">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Pagina Administrativa</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors duration-200 font-semibold border-2 border-black"
            >
              Logout
            </button>
          </div>

          <div className="mb-6">
            <p className="text-white mb-4">Welcome! You are logged in.</p>
            <div className="mb-4">
              <Clock />
            </div>
            {token && (
              <p className="text-sm text-white mt-2">
                Token: {token.substring(0, 30)}...
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button
              className="bg-red-600 text-white px-6 py-4 rounded-lg hover:bg-red-800 transition-colors duration-200 font-semibold text-left border-2 border-black"
              onClick={() => alert("Button 1 clicked!")}
            >
              Preparando Comida
            </button>

            <button
              className="bg-red-600 text-white px-6 py-4 rounded-lg hover:bg-red-800 transition-colors duration-200 font-semibold text-left border-2 border-black"
              onClick={() => alert("Button 2 clicked!")}
            >
              Despachando Comida
            </button>

            <button
              className="bg-red-600 text-white px-6 py-4 rounded-lg hover:bg-red-800 transition-colors duration-200 font-semibold text-left border-2 border-black"
              onClick={() => alert("Button 3 clicked!")}
            >
              Motorizado Recogio
            </button>

            <button
              className="bg-red-600 text-white px-6 py-4 rounded-lg hover:bg-red-800 transition-colors duration-200 font-semibold text-left border-2 border-black"
              onClick={() => alert("Button 4 clicked!")}
            >
              Cliente recibio su pedido
            </button> 
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

