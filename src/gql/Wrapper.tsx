"use client";
import { ReactNode } from "react";
import { Provider } from "urql";
import { client } from "./client";

export default function Wrapper({ children }: { children: ReactNode }) {
  return <Provider value={client}>{children}</Provider>;
}
