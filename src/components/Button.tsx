import { FC, ComponentProps } from "react";


export const Button: FC<ComponentProps<"button"> & { theme: "light" | "dark" }> = ({
  children, theme, className, ...props }) => {
  return (
    <button className={`button ${theme === "light" ?
      "bg-light-secondary color-light-primary" :
      "bg-dark-secondary color-dark-primary"}
      ${className}`} {...props}>
      {children}
    </button>
  )
}
