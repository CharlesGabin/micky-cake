import { ComponentProps } from "react";

export default function Section(props: ComponentProps<"section">) {
  return (
    <section
      id={props.id}
      className={`px-44 ${props.className}`}
      style={{ padding: "50px 10%" }}
    >
      {props.children}
    </section>
  );
}
