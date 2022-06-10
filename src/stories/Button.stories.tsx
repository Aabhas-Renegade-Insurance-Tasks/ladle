import * as React from "react";
import { useLink } from "@ladle/react";

export const Link = () => {
  const to = useLink();
  return <button onClick={() => to("title--title")}>Controls</button>;
};
