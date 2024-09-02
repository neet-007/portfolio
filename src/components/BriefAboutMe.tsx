import React, { FC, ComponentProps } from "react";

export const BriefAboutMe: FC<ComponentProps<"div">> = () => {

  return (
    <div className="flex align-items-center justify-content-center">
      <div>
        <div className="bold-800 cap f-size-l">
          moayed alkamel
        </div>
        <div>

          about me
        </div>
      </div>
      <div className="img-container">
        <img src="/profile1.jpg" alt="" />
      </div>
    </div>
  )
}

