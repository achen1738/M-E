import * as React from "react";

const Snake = ({ segments }) =>
  segments.map(({ x: cx, y: cy, r }, key) => (
    <circle
      {...{ key, cx, cy, r }}
      style={{
        fill: "navy",
        fillOpacity: 1 - key / segments.length
      }}
    />
  ));

export default Snake;
