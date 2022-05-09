import { SlideButton } from "./SlideButton";
import { Slide } from "./slides";

export const NextButton: React.FC<{ onClick: () => void }> = ({ ...args }) => {
  return (
    <SlideButton {...args}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        preserveAspectRatio="xMidYMid meet"
        style={{ verticalAlign: "middle" }}
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
      Next
    </SlideButton>
  );
};
