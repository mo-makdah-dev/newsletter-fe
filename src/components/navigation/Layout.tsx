import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <div className="w-full h-full flex-1 overflow-hidden">{children}</div>
    </div>
  );
};
