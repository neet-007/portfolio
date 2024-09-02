import React, { FC, ComponentProps } from "react";

export const BriefAboutMe: FC<ComponentProps<"div">> = () => {

  return (
    <div id="about-me" className="flex align-items-start justify-content-center gap-3">
      <div>
        <div className="bold-800 cap f-size-l">
          moayed alkamel
        </div>
        <div>

          about me
        </div>
      </div>
      <div className="img-container">
        <img src="/profile1.jpg" alt="" className="about-me-img b-1-solid-black b-radius-75" />
      </div>
    </div>
  )
}

