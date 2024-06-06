// src/components/AuthContext.tsx
import { Dispatch, SetStateAction, createContext, useContext } from "react";

interface AuthContextProps {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  roomName: string;
  setRoomName: Dispatch<SetStateAction<string>>;
}

export const AuthContext = createContext<AuthContextProps>({
  userName: "randomUser",
  setUserName: () => {},
  roomName: "randomRoom",
  setRoomName: () => {},
});

export function useAuthContext() {
  return useContext(AuthContext);
}
