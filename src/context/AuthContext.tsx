import { createContext, useState, useEffect, ReactNode } from "react";
import * as authService from "../services/authService";

interface AuthContextData {
  token: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    const { access_token, token_type } = await authService.login({
      email,
      password,
    });
    const fullToken = `${token_type} ${access_token}`;
    setToken(fullToken);
    localStorage.setItem("token", fullToken);
  };

  const signOut = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        signIn,
        signOut,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
