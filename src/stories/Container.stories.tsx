import React from "react";

export default {
  title: "wow",
  meta: { key: "value" },
  decorators: [
    (Story: React.FC) => (
      <div style={{ background: "blue", color: "white" }}>
        <Story />
      </div>
    ),
  ],
};

export const Container = () => {
  return <div style={{ padding: 200 }}>Child</div>;
};
