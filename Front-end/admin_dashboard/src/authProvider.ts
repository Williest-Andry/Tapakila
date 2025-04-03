import { AuthProvider } from "react-admin";

const API_URL = "http://localhost:3001";

const authProvider: AuthProvider = {
  login: async (params: any) => {
    const { email, password } = params;
    const request = new Request(`${API_URL}/users/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    let response;
    try {
      response = await fetch(request);
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      const finalResponse = await response.json();
      localStorage.setItem("authToken", finalResponse.finalUser.authToken);
      return Promise.resolve();
    }
    catch (e: any) {
      throw new Error(e);
    }
  },

  logout: () => {
    localStorage.removeItem("authToken");
    return Promise.resolve();
  },

  checkAuth: () => {
    return localStorage.getItem("authToken")? Promise.resolve() : Promise.reject();
  },

  checkError: (error) => {
    if (error.status === 401 || error.status === 403) {
      console.log(localStorage.getItem("authToken"));
      
      localStorage.removeItem("authToken");
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getPermissions: () => Promise.resolve(),
};

export default authProvider;
