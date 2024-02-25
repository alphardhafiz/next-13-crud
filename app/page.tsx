"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/products");
  }, []);
  return <div>Home Page</div>;
};

export default Home;
