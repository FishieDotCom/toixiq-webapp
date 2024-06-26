"use client";

import React from "react";
import Logo from "../../public/images/toxiq.svg";
import Image from "next/image";
import Cards from "@/components/comments/cards";
import { User2 } from "lucide-react";
import { Search } from "lucide-react";
function Home() {
  return (
    <>
      <section className="flex items-start justify-center bg-black text-white min-h-screen overflow-hidden">
        <main className="flex flex-col gap-5">
          <div className="bg-g-black p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Search />
              <Image
                src={Logo}
                alt="Description of the image"
                width={150} // Specify the width
                height={10} // Specify the height
              />
              <User2 />
            </div>
          </div>
          <div>
            <div className="flex flex-col text-white text-center gap-4">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Home;
