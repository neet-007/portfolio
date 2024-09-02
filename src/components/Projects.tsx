import React, { FC, ComponentProps, useState } from "react";
import { PROJECTS } from "../constants";

const Project: FC<ComponentProps<"div"> & { title: string, about: string, img: string }> = ({
  title, about
}) => {

  return (
    <div className="flex f-d-column gap-1 w-100 p-1" style={{ backgroundColor: "red" }}>
      <div className="f-size-sm cap">
        {title}
      </div>
      <p dangerouslySetInnerHTML={{ __html: about }}></p>
      <div>
        <img src="/profile1.jpg" alt="" />
      </div>
    </div>

  )
}

export const Projects: FC<ComponentProps<"div">> = () => {
  const [numElems, setNumElems] = useState<number>(3);

  return (
    <div className="flex f-d-column">
      <div className="bold-800 cap f-size-m align-self-center">projects</div>
      <div className="grid g-t-columns-3-1fr gap-4 p-1 place-items-center">
        {PROJECTS.map((v, i) => {
          if (i + 1 > numElems) {
            return null
          }
          return <Project key={`project-${v.title}-${i}`} title={v.title} about={v.about} img={v.img} />
        })}
      </div>
      <button className="button align-self-center w-fit-content h-auto"
        onClick={() => setNumElems(prev => prev * 2)}>
        load more
      </button>
    </div>
  )
}

