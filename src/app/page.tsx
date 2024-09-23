import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Square from "./components/Square";
import Label from "./components/Label";

export default function Home() {
  const cardStyle = {
    height: 200,
    width: 150,
    padding: 0,
    backgroundColor: "#FFF",
    WebkitFilter: "drop-shadow(0px 0px 5px #666)",
    filter: "drop-shadow(0px 0px 5px #666)"
  };

  return (
    <div style={cardStyle}>
      <Square color="#FF6663" />
      <Label text="User" />
    </div>
  );
}
