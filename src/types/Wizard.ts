import Elixir from "./Elixir";

export default interface Wizard {
  id: string;
  firstName?: string;
  lastName?: string;
  elixirs: Elixir[];
}
