import { FC, ComponentProps, useState, useRef } from "react";
import { PROJECTS } from "../constants";
import { useThemeContext } from "../context/themeContext";
import { Button } from "./Button";
import { useFadeIn } from "../hooks/fadeIn";
import { Github } from "./Github";

const Project: FC<ComponentProps<"div"> & {
  title: string, about: string, img: string,
  theme: "light" | "dark", appear: string,
  gif: string, link: string, github: string,
}> = ({
  title, about, theme, appear, img, gif, github, link, className
}) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
      <div className={`flex f-d-column gap-1 w-100 p-1 b-radius-1 p-4 h-100
                    ${theme === "light" ? "bg-light-gray" :
          "bg-dark-gray"}
        fade-in ${className}`} data-appear={appear}>
        <div className="f-size-sm cap">
          {title}
        </div>
        <div className="text-container">
          {about}
        </div>
        <div className="flex f-d-column gap-1 m-top-auto">
          <div>
            <img src={`${img === "" ? "/suffix_tree_still.png" : isHovered ? gif : img}`} alt=""
              className="b-1-solid-black b-radius-75 cursor-pointer" onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)} />
          </div>
          <div className="flex justify-content-between align-items-center p-x-4 p-y-2">
            <a href={github} target="_blank">
              <Button theme={theme} className="animate-bg-color flex align-items-center gap-1">
                <Github iconWidth="20" iconHeight="20" theme={theme} util />
                <p>github</p>
              </Button>
            </a>
            {link &&
              <a href={link} target="_blank">
                <Button theme={theme} className="animate-bg-color">
                  <p>link</p>
                </Button>
              </a>
            }
          </div>
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
            img={v.img} gif={v.gif} github={v.github} link={v.link} theme={theme}
            appear={`${i < 3 ? "false" : "true"}`}
            className={`${i < 3 ? "" : "animate-project"}`} />
        })}
      </div>
      <Button className="button align-self-center w-fit-content h-auto"
        theme={theme}
        onClick={() => setNumElems(prev => prev * 2)}
        disabled={numElems >= PROJECTS.length}>
        <p>load more</p>
      </Button>
    </div>
  )
}

