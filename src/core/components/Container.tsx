type container = {
  children: React.ReactNode;
};
export default function Container({ children }: container) {
  return <div className="mx-auto flex w-3/4">{children}</div>;
}
