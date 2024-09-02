import React, { FC, ComponentProps } from "react";

const Credential: FC<ComponentProps<"div"> & { title: string, about: string, img: string }> = ({
  title, about
}) => {

  return (
    <div className="flex f-d-column gap-1 w-100 p-1" style={{ backgroundColor: "red" }}>
      <div className="f-size-sm cap">
        {title}
      </div>
      <div>
        {about}
      </div>
      <div>
        <img src="/profile1.jpg" alt="" />
      </div>
    </div>

  )
}

export const Credintails: FC<ComponentProps<"div">> = () => {

  return (
    <div className="flex f-d-column">
      <div className="bold-800 cap f-size-m align-self-center">Credintails</div>
      <div className="grid g-t-columns-4-1fr gap-4 p-1 place-items-center">
        {[
          { title: "title1", about: "about1", img: "" },
          { title: "title1", about: "about1", img: "" },
          { title: "title1", about: "about1", img: "" },
          { title: "title1", about: "about1", img: "" },
          { title: "title1", about: "about1", img: "" },
          { title: "title1", about: "about1", img: "" },
          { title: "title1", about: "about1", img: "" },
          { title: "title1", about: "about1", img: "" },
        ].map((v, i) => (
          <Credential key={`project-${v.title}-${i}`} title={v.title} about={v.about} img={v.img} />
        ))}
      </div>
    </div>
  )
}

