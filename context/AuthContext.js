import { useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../configs/FirebaseConfig";

const AuthContext = createContext({ user: null });

export const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.replace("/auth/sign-in");
      }
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
