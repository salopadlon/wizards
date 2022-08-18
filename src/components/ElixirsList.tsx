import React from "react";
import Elixir from "src/types/Elixir";

export default function ElixirsList({ elixirs }: any): JSX.Element {
  return (
    <div className="list row">
      <div className="col-md-6">
        <strong>Elixirs:</strong>
        <ul className="list-group">
          {elixirs.map((elixir: Elixir, index: number) => (
            <li key={index}>
              <p>{elixir.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
