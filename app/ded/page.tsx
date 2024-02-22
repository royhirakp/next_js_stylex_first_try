import React from "react";
import * as stylex from "@stylexjs/stylex";

const s = stylex.create({
  hirak: {
    color: "red",
  },
});

const page = () => {
  return (
    <div>
      <h1 {...stylex.props(s.hirak)}>hirak</h1>
    </div>
  );
};

export default page;
