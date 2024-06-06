// src/app/page.tsx
"use client";

import { useAuthContext } from "@/components/AuthContext";
import { pusherDetails } from "@/lib/pusher";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect } from "react";

export default function Page() {
  const auth = useAuthContext();
  const { setUserName, setRoomName, userName, roomName } = auth;

  useEffect(() => {
    setUserName(userName);
    setRoomName(roomName);
  }, [roomName, userName]);

  const router = useRouter();

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/room/${roomName}`);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {" "}
      <h1 className="text-center mb-20 text-4xl">Video Chat App</h1>
      <form className="w-96 h-96 flex flex-col" onSubmit={handleLogin}>
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          className="mb-3 h-10"
          placeholder="Enter Username"
          required
        />
        <input
          onChange={(e) => setRoomName(e.target.value)}
          value={roomName}
          className="mb-3 h-10"
          placeholder="Enter Room Name"
          required
        />
        <button
          type="submit"
          className="bg-white bg-opacity-50 h-8 rounded-full hover:bg-green-600 active:bg-green-600 focus:outline-none focus:ring focus:ring-green-200"
        >
          Join Room
        </button>
        <br />
        <div>{pusherDetails.appId}</div>
        <br />
        <div>{pusherDetails.key}</div>
        <br />
        <div>{pusherDetails.secret}</div>
        <br />
        <div>{pusherDetails.cluster}</div>
      </form>
    </div>
  );
}
