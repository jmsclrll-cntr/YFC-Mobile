import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  username: string | null;
  login: (username?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  username: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        username,
        login: (user?: string) => {
          setIsAuthenticated(true);
          if (user) setUsername(user);
        },
        logout: () => {
          setIsAuthenticated(false);
          setUsername(null);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
