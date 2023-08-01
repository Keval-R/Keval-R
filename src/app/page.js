"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const navigation = useRouter();
  return (
    <div className="flex justify-center items-center h-screen w-full gap-3">
      <button
        type="button"
        onClick={() => navigation.push("/server")}
        className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Server Side Demo
      </button>
      <button
        type="button"
        onClick={() => navigation.push("/client")}
        className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Client Side demo
      </button>
    </div>
  );
};

export default Home;
