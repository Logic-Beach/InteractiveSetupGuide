import { PageTransition } from "@steveeeie/react-page-transition";
import React, { useState } from "react";
import "./App.css";
import { BackButton } from "./BackButton";
import { DEFAULT_BACK_TRANSITION, DEFAULT_NEXT_TRANSITION } from "./constants";
import { NextButton } from "./NextButton";
import { slideData } from "./slides";

function App() {
  const [currentSlideId, setCurrentSlideId] = useState(0);
  const [transition, setTransition] = useState(DEFAULT_NEXT_TRANSITION);
  const slide = slideData[currentSlideId];

  const updateSlideId = async (newSlideId: number) => {
    setTransition(getTransition(newSlideId));
    await setTimeout(() => {}, 1);
    setCurrentSlideId(newSlideId);
  };

  const getTransition = (newSlideId: number): string => {
    const isGoingForward = currentSlideId <= newSlideId;
    if (slide.transition) {
      return isGoingForward ? slide.transition.next : slide.transition.back;
    }
    return isGoingForward ? DEFAULT_NEXT_TRANSITION : DEFAULT_BACK_TRANSITION;
  };

  const nextSlideId = slide.next ? slide.next : slide.id + 1;
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
        height: "90%",
        width: "100vw",
      }}
    >
      {/* @ts-ignore */}
      <PageTransition preset={transition} transitionKey={slide.id.toString()}>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            placeContent: "space-between",
            alignItems: "space-evenly",
            margin: "5rem",
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
