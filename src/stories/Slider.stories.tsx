import { Story } from "@ladle/react";

export const Slider: Story<{
  name: string;
  height: number;
  color: string;
  theme: string;
}> = ({ name, height, color, theme }) => {
  return (
    <>
      <div style={{ height, background: color }}>Slider: {name}</div>
      <div>{JSON.stringify(theme)}</div>
    </>
  );
};

Slider.args = {
  name: "",
  height: 4000,
  color: "pink",
};

Slider.argTypes = {
  theme: {
    options: ["light", "dark"],
    control: { type: "select" },
  },
};
