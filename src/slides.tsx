import React, { ReactNode } from "react";
import { SlideButton } from "./SlideButton";

const imgStyle = {
  size: "50%",
}

export type Slide = {
  id: number;
  title?: string;
  back?: number;
  next?: number;
  buttons?: (slide: Slide, ...params: any) => ReactNode;
  content?: ReactNode;
  leftColumn?: ReactNode;
  rightColumn?: ReactNode;
  transition?: {
    back: string,
    next: string
  }
}

export const slideData: Slide[] = [
  {
    id: 0,

    back: NaN,
    transition: {
      back:"",
      next:""
    },
    title: "Grid+ Lattice1 Setup Guide",
    buttons: (slide: Slide, goToSlide: (x: number) => void) => (
      <SlideButton
        onClick={() => {
          goToSlide(slide.id + 1);
        }}
      >
        Start
      </SlideButton>
    ),
    //leftColumn: <p style={{right: "100px"}}>Press Start</p> ,
    content: <img src="/images/0 box-intro/splash.png" style={{}} />,
  },

  {
    id: 1,
    transition: {
      back:"",
      next:""
    },
    title: "Welcome to your new Grid+ Lattice¹",
    content: (
      <>
        <img
          src="/open-box.gif" 
          alt="opening box" 
          style={{width: "735px"}} 
        />
        <div id="fadeInText" style={{position:"absolute", right:"100px",
                                    animation: "5s ease 0s normal forwards 1 fadein"}}>
          For the Sovereign Individual
       </div>
      </>
    )
    
  },


  {
    id: 2,
    title: "Inside, you will find",
    transition: {
      back:"",
      next:""
    },
    content: (
      <>
      <img
        src="images/2 contents/video.gif"
        style={{width: "735px"}}
      />
      <div id="fadeInText" style={{position:"absolute", right:"100px"}}>
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


  
  {
    id: 3,
    title: "Plug your Lattice¹ in!",
    content: (
      <>
      <img
        src="images/3 startup/video.gif"
        style={{width: "735px"}}
      />
      <div id="fadeInText" style={{position:"absolute", left:"100px"}}>
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
