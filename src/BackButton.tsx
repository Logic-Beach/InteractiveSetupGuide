import { SlideButton } from "./SlideButton";

export const BackButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <SlideButton onClick={onClick}>
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
        <path d="M19 12H5M12 19l-7-7 7-7"></path>
      </svg>
      Back
    </SlideButton>
  );
};
