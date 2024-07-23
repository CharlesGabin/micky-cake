import { ComponentProps } from "react";

export default function Section(props: ComponentProps<"section">) {
  return (
    <section
      id={props.id}
      className={`px-0 py-0 min-h-screen bg-pink-50 ${props.className}`}
    >
      {props.children}
    </section>
  );
}
