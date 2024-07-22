import { ComponentProps } from "react";

export default function Section(props: ComponentProps<"section">) {
  return (
    <section
      id={props.id}
      className={`px-0 py-0 h-screen ${props.className}`}
      // style={{ padding: "50px 10%" }}
    >
      {props.children}
    </section>
  );
}
