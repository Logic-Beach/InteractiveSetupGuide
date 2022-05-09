
export const SlideButton: React.FC<{
  onClick: ()=>void
  children: React.ReactNode;
}> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
