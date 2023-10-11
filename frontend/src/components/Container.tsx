import react from "react";

interface Props {
  children: react.ReactElement;
}

export default function Container({ children }: Props) {
  return (
    <div className="w-screen h-screen grid place-items-center bg-[#313131] text-white">
      {children}
    </div>
  );
}
