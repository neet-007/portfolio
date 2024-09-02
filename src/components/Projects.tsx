import React, { FC, ComponentProps, useState, useRef, useEffect } from "react";
import { PROJECTS } from "../constants";
import { useThemeContext } from "../context/themeContext";
import { Button } from "./Button";
import { useFadeIn } from "../hooks/fadeIn";
import { Github } from "./Github";

const Project: FC<ComponentProps<"div"> & {
  title: string, about: string, img: string,
  theme: "light" | "dark", appear: string
}> = ({
  title, about, theme, appear
}) => {

    return (
      <div className={`flex f-d-column gap-1 w-100 p-1 b-radius-1 p-4
                    ${theme === "light" ? "bg-light-gray" :
          "bg-dark-gray"}
        fade-in`} data-appear={appear}>
        <div className="f-size-sm cap">
          {title}
        </div>
        <p dangerouslySetInnerHTML={{ __html: about }}></p>
        <div>
          <img src="/profile1.jpg" alt="" className="b-1-solid-black b-radius-75" />
        </div>
        <div className="flex justify-content-between align-items-center p-x-4 p-y-2">
          <a href="" >
            <Button theme={theme} className="animate-bg-color flex align-items-center gap-1">
              <Github iconWidth="20" iconHeight="20" theme={theme} util />
              <p>github</p>
            </Button>
          </a>
          <a href="" >
            <Button theme={theme} className="animate-bg-color">
              <p>link</p>
            </Button>
          </a>
        </div>
      </div>

    )
  }

export const Projects: FC<ComponentProps<"div">> = () => {
  const [numElems, setNumElems] = useState<number>(3);
  const { theme } = useThemeContext();
  const containerRef = useRef<HTMLDivElement>(null);

  useFadeIn(containerRef);

  return (
    <div id="projects" className="flex f-d-column gap-2">
      <div className="bold-800 cap f-size-m align-self-center">projects</div>
      <div className="grid g-t-columns-3-1fr gap-2 p-2 place-items-center" ref={containerRef}>
        {PROJECTS.map((v, i) => {
          if (i + 1 > numElems) {
            return null
          }
          return <Project key={`project-${v.title}-${i}`} title={v.title} about={v.about}
            img={v.img} theme={theme} appear="false" />
        })}
      </div>
      <Button className="button align-self-center w-fit-content h-auto"
        theme={theme}
        onClick={() => setNumElems(prev => prev * 2)}>
        <p>load more</p>
      </Button>
    </div>
  )
}

