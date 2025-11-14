import { useToken } from "../contexts/TokenContext";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../api";
import { type FormEvent } from "react";


export default function Login() {
  const { saveToken } = useToken();
  const navigate = useNavigate();
  const { login } = useLogin();

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await login({ email, password });

    if (result.success && result.token) {
      saveToken(result.token);
      navigate("/dashboard");
    } else {
      alert(result.error || "Login failed");
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-2 border-black">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            className="w-full px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-black bg-white"
            placeholder="Email"
            type="email"
            name="email"
            required
          />
          <input
            className="w-full px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-black bg-white"
            placeholder="Password"
            type="password"
            name="password"
            required
          />
          <button
            className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-800 transition-colors duration-200 font-semibold border-2 border-black"
            type="submit"
          >
            Log in
          </button>
        </form>
        <p className="mt-4 text-sm text-black text-center">
          Enter any email and password to login (mock mode)
        </p>
      </div>
    </div>
  );
}