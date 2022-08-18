import React from "react";
import Elixir from "src/types/Elixir";

export default function ElixirsList({ elixirs }: any): any {
  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Elixirs List</h4>
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
