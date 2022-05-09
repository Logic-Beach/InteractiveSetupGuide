import React, { ReactNode } from "react";
import { SlideButton } from "./SlideButton";

export type Slide = {
  id: number;
  title?: string;
  back?: number;
  next?: number;
  buttons?: (slide: Slide, ...params: any) => ReactNode;
  content?: ReactNode;
  leftColumn?: ReactNode;
  rightColumn?: ReactNode 
} 


export const slideData: Slide[] = [
  {
    id: 0,
    back: NaN,
    title: "Grid+ Lattice1 Setup Guide",
    buttons: (slide: Slide, setCurrentSlideId: (x: number) => void) => (
      <SlideButton
        onClick={() => {
          setCurrentSlideId(slide.id + 1);
        }}
      >
        Start
      </SlideButton>
    ),
    content: (
        <p>
          You have just begun the journey to fully owning and protecting your
          assets! We are here to help you as you learn the best, safest way to
          make sure you are always in control.
        </p>
    ),
  },
  {
    id: 1,
    title: "Welcome to your new Grid+ Lattice¹",
    leftColumn: <img src="/open-box.gif" alt="opening box" />,
    rightColumn: <p>For the Sovereign Individual</p>,
  },
  {
    id: 2,
    title: "Inside, you will find",
    leftColumn: (
      <img
        src="/inside-box.gif"
        alt="inside box"
        style={{ height: "33%", width: "33%" }}
      />
    ),
    rightColumn: (
      <ul>
        <li>The Lattice¹ Device</li>
        <li>A SafeCard</li>
        <li>A power adapter</li>
        <li>A LAN cable</li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "Plug your Lattice¹ in!",
    
    content: (
      <>
        <div style={{ display: "flex" }}>
          <ul>
            <li>The Lattice¹ Device</li>
            <li>A SafeCard</li>
            <li>A power adapter</li>
            <li>A LAN cable</li>
          </ul>
        </div>
      </>
    ),
  },
];
