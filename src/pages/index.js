import React, { useState } from "react";
import Content from "../components/Content";
import Button from "../components/Button";
import Card from "../components/Card";
import Socials from "../components/Socials";
import Navigation from "../components/Navigation";
import Introduction from "../content/Introduction";
import HelloProgramming from "../content/HelloProgramming";
import HowWell from "../content/HowWell";
import GuessNumber from "../content/GuessNumber";
import OddEvenZero from "../content/OddEvenZero";
import Outro from "../content/Outro";

export default function IndexPage() {
  const [page, setPage] = useState(0);

  const cards = [
    "Introduction",
    "Hello, Programming",
    "How Well Do You Know Me",
    "Guess the Number",
    "Odd, Even, or Zero?",
    "Outro",
  ];

  const contents = [
    <Introduction/>,
    <HelloProgramming/>,
    <HowWell/>,
    <GuessNumber/>,
    <OddEvenZero/>,
    <Outro/>,
  ];

  function nextPage() {
    if (page + 1 >= cards.length) {
      return;
    }
    setPage(page + 1);
  }

  function previousPage() {
    if (page - 1 < 0) {
      return;
    }
    setPage(page - 1);
  }

  return (
    <div className="flex flex-col w-full h-full bg-gray-100 min-h-screen">
      {/** Navigation Bar */}
      <Navigation />
      <div className="flex flex-row grow max-w-[1000px] w-[1000px] mx-auto">
        {/** Navigation Cards */}
        <div className="flex flex-col gap-1 w-80">
          {cards.map((text, number) => (
            <Card
              number={number}
              text={text}
              onClick={() => setPage(number)}
              active={page === number}
            />
          ))}
           <Socials />
        </div>

        <div className="flex flex-col relative w-full h-full justify-self-stretch">
          {/** Content */}
          <div className="grow justify-self-around mx-20 ">
            <p className="text-center text-5xl text-gray-700"> Hour of Code </p>
            <Content title={page.toString() +". " + cards[page]} statement={contents[page]} />
          </div>

          {/** Buttons */}
          <div className="my-16 bottom-52 flex flex-row w-full px-20">
            <Button text={"Back"} onClick={previousPage} /> {/** Back */}
            <div className="grow"></div>
            <Button text={"Next"} onClick={nextPage} type="NEXT" />{/** Next */}
          </div>
        </div>
      </div>
    </div>
  );
}
