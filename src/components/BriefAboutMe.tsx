import React, { FC, ComponentProps } from "react";

export const BriefAboutMe: FC<ComponentProps<"div">> = () => {

  return (
    <div id="about-me" className="flex align-items-start justify-content-center gap-3">
      <div>
        <div className="bold-800 cap f-size-l">
          moayed alkamel
        </div>
        <div className="w-50ch">
          I am a web developer with a primary focus on front-end development, though my skills extend beyond that.
          I design web applications with a mobile-first approach, utilizing React and TypeScript. For routing,
          I work with React Router and TanStack Router. On the back end, I use Django along with SQLite and PostgreSQL.
          I am based in Riyadh, Saudi Arabia.
        </div>
      </div>
      <div className="img-container">
        <img src="/profile1.jpg" alt="" className="about-me-img b-1-solid-black b-radius-75" />
      </div>
    </div>
  )
}

