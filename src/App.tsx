import { PageTransition } from "@steveeeie/react-page-transition";
import React, { useState } from "react";
import "./App.css";
import { BackButton } from "./BackButton";
import { NextButton } from "./NextButton";
import { slideData } from "./slides";

function App() {
  const [currentSlideId, setCurrentSlideId] = useState(0);
  const slide = slideData[currentSlideId];
  const Buttons = slide.buttons
    ? slide.buttons(slide, setCurrentSlideId)
    : null;
  const backSlideId = slide.back ? slide.back : slide.id - 1;
  const onBack = () => setCurrentSlideId(backSlideId);
  const nextSlideId = slide.back ? slide.back : slide.id + 1;
  const onNext = () => setCurrentSlideId(nextSlideId);
  const hasContent = !!slide.content;

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        placeContent: "space-between",
        alignItems: "space-evenly",
      }}
    >
      {/* @ts-ignore */}
      <PageTransition preset="moveToLeftFromRight" transitionKey={slide.id.toString()}>
          <div>
            <h1 style={{ textAlign: "center" }}>{slide.title}</h1>
            {hasContent ? (
              slide.content
            ) : (
              <>
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    placeContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  {slide.leftColumn}
                  {slide.rightColumn}
                </div>
              </>
            )}
          </div>
        </PageTransition>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {Buttons ? (
          Buttons
        ) : (
          <>
            <BackButton onClick={onBack} />
            <NextButton onClick={onNext} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
