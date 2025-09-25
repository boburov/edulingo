import React from "react";

export default function Heading({ children }: { children: React.ReactNode }) {
  return <h1 className="text-2xl font-semibold text_color w-full truncate">{children}</h1>;
}
