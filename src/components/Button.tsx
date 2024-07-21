import { PropsWithChildren } from "react";

export default function Button(props: PropsWithChildren) {
  return (
    <a className="px-4 py-4 transition duration-200 ease-in-out bg-pink-300 cursor-pointer text-secondary-color1 size-4 rounded-xl hover:bg-primary-color2 hover:text-white">
      {props.children}
    </a>
  );
}
