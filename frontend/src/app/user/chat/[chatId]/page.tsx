"use client";

import { useParams } from "next/navigation";

export default function Chat() {
  const { chatId } = useParams();

  return <h1>Chat Page with id {chatId}</h1>;
}
