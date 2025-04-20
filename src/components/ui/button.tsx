import { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onclick?: () => void;
  newClasses?: string;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const defaultStyles = "rounded-md";
const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={` ${defaultStyles} ${sizeStyles[props.size ?? "md"]} ${
        variantStyles[props.variant]
      }`}
    >
      <div className="flex justify-center items-center">
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
        <span>{props.text}</span>
        {props.endIcon ? <div className="pr-2">{props.endIcon}</div> : null}
      </div>
    </button>
  );
};
