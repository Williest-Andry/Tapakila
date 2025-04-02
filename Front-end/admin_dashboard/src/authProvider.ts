import { AuthProvider } from "react-admin";

const API_URL = "https://localhost:3001";

const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const request = new Request(`${API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    const response = await fetch(request);
    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    const { auth_token } = await response.json();
    localStorage.setItem("auth_token", auth_token);
  },

  logout: () => {
    localStorage.removeItem("auth_token");
    return Promise.resolve();
  },

  checkAuth: () => {
    return localStorage.getItem("auth_token")
      ? Promise.resolve()
      : Promise.reject();
  },

  checkError: (error) => {
    if (error.status === 401 || error.status === 403) {
      localStorage.removeItem("auth_token");
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getPermissions: () => Promise.resolve(), // Tu peux gérer les rôles ici
};

export default authProvider;
