import { PageTransition } from "@steveeeie/react-page-transition";
import React, { useState } from "react";
import "./App.css";
import { BackButton } from "./BackButton";
import { NextButton } from "./NextButton";
import { slideData } from "./slides";

function App() {
  const [currentSlideId, setCurrentSlideId] = useState(0);
  const [direction, setDirection] = useState("fadeLeftFadeRight");

  const updateSlideId = async (newSlideId: number) => {
    setDirection(
      currentSlideId <= newSlideId ? "fadeLeftFadeRight" : "fadeRightFadeLeft"
    );
    await setTimeout(() => {}, 1);
    setCurrentSlideId(newSlideId);
  };

  const slide = slideData[currentSlideId];

  const nextSlideId = slide.back ? slide.back : slide.id + 1;
  const onNext = async () => {
    updateSlideId(nextSlideId);
  };

  const backSlideId = slide.back ? slide.back : slide.id - 1;
  const onBack = async () => {
    updateSlideId(backSlideId);
  };

  const hasContent = !!slide.content;
  const Buttons = slide.buttons ? (
    slide.buttons(slide, updateSlideId)
  ) : (
    <>
      <BackButton onClick={onBack} />
      <NextButton onClick={onNext} />
    </>
  );

  return (
    <div
      style={{
        position: "absolute",
        height: "89%",
        width: "100%",
        margin: "25px",
      }}
    >
      {/* @ts-ignore */}
      <PageTransition preset={direction} transitionKey={slide.id.toString()}>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            placeContent: "space-between",
            alignItems: "space-evenly",
          }}
        >
          <h1 style={{ textAlign: "center" }}>{slide.title}</h1>
          <div
            style={{
              height: "100%",
              display: "flex",
              placeContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {hasContent ? (
              slide.content
            ) : (
              <>
                {slide.leftColumn}
                {slide.rightColumn}
              </>
            )}
          </div>
        </div>
      </PageTransition>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {Buttons}
      </div>
    </div>
  );
}

export default App;
