import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HIMATIFTEXAPP" },
    { name: "description", content: "HIMATIFTEXAPP" },
  ];
}

export default function Home() {
  return <Welcome />;
}