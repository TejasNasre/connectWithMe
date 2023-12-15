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
      link : "https://github.com/TejasNasre/connectWithMe"
    },
    {
      description: "Connect Me On My Linkedin",
      filesize: "2 GB",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "On Linkedin🍻",
        tagColor: "blue",
      },
      link : "https://in.linkedin.com/in/tejasnasre"
    },
    {
      description: "Connect With Me On Twitter",
      filesize: "0.5 GB",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "On Twitter🙆‍♂️",
        tagColor: "green",
      },
      link : "https://twitter.com/tejas_nasre"
    },
    {
      description: "Connect With Me On Instagram",
      filesize: "4 GB",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "On Instagram 😁",
        tagColor: "blue",
      },
      link : "https://instagram.com/tejas_nasre"
    },
    {
      description: "Connect With Me On Github",
      filesize: "10 GB",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "On Github 😁",
        tagColor: "blue",
      },
      link : "https://github.com/TejasNasre"
    },
  ];
  return (
    <>
      <div ref={ref} className="w-full h-full fixed top-0 left-0 z-[3] flex gap-10 flex-wrap p-5">
        {data.map((item, index) => (
          <Card data={item} referance={ref} key={index}/>
        ))}
      </div>
    </>
  );
}
