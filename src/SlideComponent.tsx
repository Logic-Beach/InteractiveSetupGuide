import React from "react";
import { Slide } from "./slides";

export const SlideComponent: React.FC<{
  slide: Slide
}> = ({ slide }) => {
 
  return (
      <div>{slide.content}</div>
     
  );
};
