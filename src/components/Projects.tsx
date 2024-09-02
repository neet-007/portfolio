import React, { FC, ComponentProps, useState } from "react";
import { PROJECTS } from "../constants";
import { useThemeContext } from "../context/themeContext";
import { Button } from "./Button";

const Project: FC<ComponentProps<"div"> & { title: string, about: string, img: string, theme: "light" | "dark" }> = ({
  title, about, theme
}) => {

  return (
    <div className={`flex f-d-column gap-1 w-100 p-1
                    ${theme === "light" ? "bg-light-gray" :
        "bg-dark-gray"}
        `}>
      <div className="f-size-sm cap">
        {title}
      </div>
      <p dangerouslySetInnerHTML={{ __html: about }}></p>
      <div>
        <img src="/profile1.jpg" alt="" />
      </div>
      <div className="flex justify-content-between p-x-4 p-y-2">
        <a href="" >
          <Button theme={theme} className="animate-bg-color">
            github
          </Button>
        </a>
        <a href="" >
          <Button theme={theme} className="animate-bg-color">
            link
          </Button>
        </a>
      </div>
    </div>

  )
}

export const Projects: FC<ComponentProps<"div">> = () => {
  const [numElems, setNumElems] = useState<number>(3);
  const { theme } = useThemeContext();

  return (
    <div className="flex f-d-column gap-2">
      <div className="bold-800 cap f-size-m align-self-center">projects</div>
      <div className="grid g-t-columns-3-1fr gap-1 p-1 place-items-center">
        {PROJECTS.map((v, i) => {
          if (i + 1 > numElems) {
            return null
          }
          return <Project key={`project-${v.title}-${i}`} title={v.title} about={v.about}
            img={v.img} theme={theme} />
        })}
      </div>
      <Button className="button align-self-center w-fit-content h-auto"
        theme={theme}
        onClick={() => setNumElems(prev => prev * 2)}>
        load more
      </Button>
    </div>
  )
}

