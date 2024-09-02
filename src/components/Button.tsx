import React, { ComponentProps } from "react";


export const Button: React.FC<ComponentProps<"button"> & { theme: "light" | "dark" }> = ({
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
