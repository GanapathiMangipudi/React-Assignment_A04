import React from "react";

export default function Greeting({ name }) {
  return (
      <div style={{ padding: "20px" }}>
      <h1>Greeting Demo</h1>
      <Greeting name="Alice" />
      <Greeting />
    </div>
  );
}
