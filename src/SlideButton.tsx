
export const SlideButton: React.FC<{
  onClick: ()=>void
  children: React.ReactNode;
}> = ({ onClick, children, ...args }) => {
  return <button onClick={onClick} {...args}>{children}</button>;
};
