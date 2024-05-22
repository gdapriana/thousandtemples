import React from "react";
import type {Metadata} from "next";
import axios from "axios";

export const metadata: Metadata = {
  title: "activities | thousandtemples",
  description: "Generated by create next app",
};


export default async function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full">{children}</main>
  )
}
