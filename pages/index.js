import Dashboard from "@/components/Dashboard";
import Head from "next/head";
import Image from "next/image";
// import { Lato } from "next/font/google";

// const lato = Lato({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Board.</title>
        <meta name="description" content="Board dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </>
  );
}
