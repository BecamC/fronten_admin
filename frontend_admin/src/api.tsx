// Mock login for frontend development (no backend)
export function useLogin() {
  async function login(user: { email: string; password: string }) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Accept any email and password for now (mock login)
    // You can change this to check for specific credentials if needed
    if (user.email && user.password) {
      // Generate a mock token
      const mockToken = `mock_token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      return { success: true, token: mockToken };
    }

    return { success: false, error: "Usuario o contraseña incorrecta" };
  }

  return { login };
}