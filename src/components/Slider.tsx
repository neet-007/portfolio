import React, { ComponentProps, useEffect, useRef } from "react";
import { JavaScript } from "./JavaScript";
import { Typescript } from "./Typescript";
import { Tailwind } from "./Tailwind";
import { Python } from "./Python";
import { ReactLogo } from "./ReactLogo";
import { Django } from "./Django";

export const Slider: React.FC<ComponentProps<"div">> = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current || window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
      return
    }

    sliderRef.current.setAttribute("data-animate", "true")
  }, [])

  return (
    <div className="align-self-center flex f-d-column gap-2">
      <p className="bold-800 cap f-size-m align-self-center">tech stack</p>
      <div className="slider-container">
        <div className="slider-slider" data-animate="false" ref={sliderRef}>
          <JavaScript width={"60"} height={"60"} />
          <Typescript width={"60"} height={"60"} />
          <ReactLogo width={"60"} height={"60"} />
          <Tailwind width={"60"} height={"60"} />
          <Python width={"60"} height={"60"} />
          <Django width={"60"} height={"60"} />
          <JavaScript width={"60"} height={"60"} />
          <Typescript width={"60"} height={"60"} />
          <ReactLogo width={"60"} height={"60"} />
          <Tailwind width={"60"} height={"60"} />
          <Python width={"60"} height={"60"} />
          <Django width={"60"} height={"60"} />
        </div>
      </div>
    </div>
  )
}
