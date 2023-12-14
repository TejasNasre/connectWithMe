//ForeGround Component

// import { useState } from "react";
import { useRef } from "react";
import Card from "./Card";

export default function Fg() {
    const ref = useRef(null)
  const data = [
    {
      description: "Don't Forgot To Give Me Star On Github",
      filesize: "1.5 GB",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Give Star💓",
        tagColor: "green",
      },
    },
    {
      description: "Connect Me On My Linkedin",
      filesize: "2 GB",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Connect With Me🍻",
        tagColor: "blue",
      },
    },
    {
      description: "Connect With Me On Twitter",
      filesize: "0.5 GB",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Connect With Me🙆‍♂️",
        tagColor: "green",
      },
    },
    {
      description: "I Am A FullStack Web Developer And Ai Enginner",
      filesize: "4 GB",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Hire Me 😁",
        tagColor: "blue",
      },
    },
  ];
  return (
    <>
      <div ref={ref} className="w-full h-full fixed top-0 left-0 z-[3] flex gap-10 flex-wrap p-5">
        {data.map((item, index) => (
          <Card data={item} referance={ref} />
        ))}
      </div>
    </>
  );
}
