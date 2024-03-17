"use client"

import Image from "next/image";
import { ReactElement, SetStateAction, useState } from "react";

function Slider(param: {handleClick: any}): ReactElement {
  return (
    <>
      <div className="absolute right-0 top-0 flex justify-center items-center h-full w-1/6 z-10 hover:bg-gradient-to-l from-gray-200" onClick={param.handleClick}>
        <Image src="/next.png" alt="next arrow icon" width={32} height={32} />
      </div>
    </>
  );
}

export default function Home() {
  const bgImagesList: string[] = ["/Slider11.jpg", "/Slider7.jpg", "/csm_patissier_traiteur_a_paris.jpg", "/csm_traiteur_creat.jpg", "/csm_traiteur.jpg", "/sale_sucre.jpg", "/traiteur_defile_mode.jpg"];
  const [bgIndex, setBgIndex] = useState<Number>(0);
  function changeBackground(next: Number, totalImages: Number) {
    if (next >= totalImages)
      return (0);
    else
      return (next);
  }
  function click() {
    const next = changeBackground(Number(bgIndex) + 1, bgImagesList.length);
    setBgIndex(next);
  }
  return (
    <>
      <main className="landing relative flex text-center pt-600 bg-no-repeat duration-1000 w-4/6 m-auto">
        <div style={{backgroundImage: `URL(${bgImagesList[Number(bgIndex)]})`}} className="w-full h-full bg-no-repeat bg-center"></div>
        <Slider handleClick={click}/>
        <section className="justify-end self-end m-30 absolute bottom-20 right-20 z-10">
          <h2><span className="text-orange-500">Gaumart</span><br />Traiteur et organisateur de réception</h2>
          <h3 className="text-orange-500">PARIS</h3>
        </section>
      </main>
    </>
  );
}
