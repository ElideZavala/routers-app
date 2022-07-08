import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export default function useAuth() {
  // Nos regresara los valores que traemos del contexto.(login, login y logout)
  return useContext(AuthContext);
}
