import React from "react";
import Elixir from "src/types/Elixir";
import "../assets/style.css";

export default function ElixirsList({ elixirs }: any): JSX.Element {
  return (
    <ul className="list-unstyled list pl-5">
      {elixirs.map((elixir: Elixir, index: number) => (
        <li key={index}>
          <p>{elixir.name}</p>
        </li>
      ))}
    </ul>
  );
}
