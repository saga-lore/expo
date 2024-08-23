import React, { createContext, useContext } from 'react';

export type AuthContextProps = {};

export const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => useContext(AuthContext);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  // TODO: Implement auth logic here
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
