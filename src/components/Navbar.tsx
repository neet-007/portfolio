import React, { ComponentProps, useEffect, useRef } from "react";
import { useThemeContext } from "../context/themeContext";
import { useScrollTracker } from "../hooks/scrollTracker";
import { Moon } from "./Moon.tsx";
import { Sun } from "./Sun.tsx";

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
      <div>
        <button className="toggle-button" onClick={onClick} ref={toggleRef}>
          <div className="toggle-switch" data-open="true"></div>
        </button>
      </div>
    </div>
  )
}

export const Navbar: React.FC<ComponentProps<"nav">> = () => {
  const { theme, toggleTheme } = useThemeContext();
  const { prevScroll, currentScroll } = useScrollTracker();
  const navRef = useRef<HTMLDivElement>(null);

  console.log(prevScroll, currentScroll)
  /*
  useEffect(() => {
    if (!navRef.current) {
      return
    }
    if (prevScroll > currentScroll) {
      navRef.current.style.opacity = "1"
    } else {

      navRef.current.style.opacity = "0"
    }
  }, [prevScroll, currentScroll])
*/
  return (
    <nav className={`w-60 align-self-center p-y-2 p-x-8 sticky top-0 z-index-9999 b-radius-75
        ${theme === "light" ? "bg-light-gray color-light-secondary"
        :
        "bg-dark-gray color-dark-secondary"}`}
      ref={navRef}>
      <ul className="flex align-items-center justify-content-between">
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
          <a href="#credentials" className="text-decoration-none cap">
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
