import React, { ComponentProps, useEffect, useRef } from "react";
import { useThemeContext } from "../context/themeContext";
import { Moon } from "./Moon.tsx";
import { Sun } from "./Sun.tsx";
import { useScrollDetector } from "../hooks/scrollDetector.ts";

const ThemeSwitch: React.FC<ComponentProps<"div"> & { theme: "light" | "dark", toggleTheme: () => void }> = ({
  theme, toggleTheme, ...props }) => {

  const toggleRef = useRef<HTMLButtonElement>(null);

  function onClick() {
    if (!toggleRef.current) {
      return
    }
    toggleTheme();
    const atrr = toggleRef.current.children[0].getAttribute("data-open")
    toggleRef.current.children[0].setAttribute("data-open", atrr === "true" ? "false" : "true")
  }

  return (
    <div className="flex gap-2 align-items-center" {...props}>
      {
        theme === "light" ?
          <Moon iconHeight="20" iconWidth="30" theme={theme} />
          :
          <Sun iconWidth="20" iconHeight="20" theme={theme} />
      }
      <div className="cursor-pointer">
        <button className="toggle-button cursor-poitner" onClick={onClick} ref={toggleRef}>
          <div className="toggle-switch cursor-pointer" data-open="true"></div>
        </button>
      </div>
    </div>
  )
}

export const Navbar: React.FC<ComponentProps<"nav">> = () => {
  const { theme, toggleTheme } = useThemeContext();
  const isScrolling = useScrollDetector();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navRef.current) {
      return
    }

    if (isScrolling) {
      navRef.current.setAttribute("data-hide", "true")
    } else {
      navRef.current.setAttribute("data-hide", "false")
    }

  }, [isScrolling])

  return (
    <nav className={`w-60 align-self-center p-y-2 p-x-8 sticky top-0 z-index-9999 b-radius-75
        ${theme === "light" ? "bg-light-gray color-light-secondary"
        :
        "bg-dark-gray color-dark-secondary"}`}
      ref={navRef}>
      <ul className="flex flex-wrap gap-2 align-items-center justify-content-between">
        <li>
          <a href="#about-me " className="text-decoration-none cap">
            about
          </a>
        </li>
        <li>
          <a href="#projects" className="text-decoration-none cap">
            projects
          </a>
        </li>
        <li>
          <a href="#credintails" className="text-decoration-none cap">
            credentials
          </a>
        </li>
        <li>
          <a href="#contact" className="text-decoration-none cap">
            contact
          </a>
        </li>
        <li>
          <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
        </li>
      </ul>
    </nav>
  )
}
