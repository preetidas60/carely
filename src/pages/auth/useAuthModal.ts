import { useState } from "react";

export type AuthMode = "login" | "signup" | null;

export function useAuthModal() {
  const [mode, setMode] = useState<AuthMode>(null);

  const openLogin = () => setMode("login");
  const openSignup = () => setMode("signup");
  const close = () => setMode(null);

  return {
    mode,
    openLogin,
    openSignup,
    close,
  };
}
