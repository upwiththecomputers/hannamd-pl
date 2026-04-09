import { ReactNode } from "react";

interface Typography {
  children: ReactNode;
}

export function TypographyHeader({ children: text }: Typography) {
  return (
    <h1 className="scroll-m-20 p-4 text-center uppercase text-xl font-sans font-extrabold tracking-tight text-balance">
      {text}
    </h1>
  );
}

export function TypographyH1({ children: text }: Typography) {
  return (
    <h1 className="scroll-m-20 p-4 text-center text-8xl font-heading font-extrabold tracking-loose text-balance">
      {text}
    </h1>
  );
}

export function TypographyLead({ children: text }: Typography) {
  return <p className="text-2xl/10 text-mist-200 font-sans">{text}</p>;
}

export function TypographyP({ children: text }: Typography) {
  return (
    <p className="text-lg/8 [&:not(:first-child)]:mt-6 font-sans">{text}</p>
  );
}
