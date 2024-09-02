import React, { FC, ComponentProps, useRef } from "react";
import { useThemeContext } from "../context/themeContext";
import { Button } from "./Button";
import { useFadeIn } from "../hooks/fadeIn";
import { PatchCheck } from "./PatchCheck";
import { CREDINTAILS } from "../constants";

const Credential: FC<ComponentProps<"div"> & {
  title: string, img: string,
  theme: "light" | "dark", link: string
}> = ({
  title, img, link, theme
}) => {

    return (
      <div className={`flex f-d-column gap-1 w-100 p-4 b-radius-1 p-4 
        ${theme === "light" ?
          "bg-light-gray" : "bg-dark-gray"}
        fade-in`}
        data-appear="false">
        <div className="f-size-sm cap">
          {title}
        </div>
        <div>
          <img src={img} alt="" className="b-1-solid-black b-radius-75" />
        </div>
        <a href={link} target="_blank" className="p-y-2 ">
          <Button theme={theme} className="animate-bg-color flex align-items-center gap-1">
            <PatchCheck iconHeight="20" iconWidth="20" theme={theme} util />
            <p>verify</p>
          </Button>
        </a>
      </div>

    )
  }

export const Credintails: FC<ComponentProps<"div">> = () => {
  const { theme } = useThemeContext();
  const containerRef = useRef<HTMLDivElement>(null);

  useFadeIn(containerRef);

  return (
    <div id="credintails" className="flex f-d-column">
      <div className="bold-800 cap f-size-m align-self-center">Credintails</div>
      <div className="grid g-t-columns-4-1fr gap-2 p-2 place-items-center" ref={containerRef}>
        {CREDINTAILS.map((v, i) => (
          <Credential key={`project-${v.title}-${i}`} title={v.title}
            img={v.img} theme={theme} link={v.link} />
        ))}
      </div>
    </div>
  )
}

