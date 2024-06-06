// src/app/layout.tsx
"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { AuthContext } from "@/components/AuthContext";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }: any) {
const [userName, setUserName] = useState("")
const [roomName, setRoomName] = useState("")

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext.Provider
          value={{
            userName,
            setUserName,
            roomName,
            setRoomName
          }}
        >
          {children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}
