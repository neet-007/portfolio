import React, { FC, ComponentProps } from "react";
import { Github } from "./Github";
import { Linkedin } from "./Linkedin";
import { Twitter } from "./Twitter";
import { useThemeContext } from "../context/themeContext";

export const Contact: FC<ComponentProps<"div">> = () => {
  const { theme } = useThemeContext();

  return (
    <div id="contact" className="flex w-100 align-items-start p-2">
      <div className="f-basis-50 flex f-d-column gap-2" >
        <div className="flex f-d-column gap-2 cap">
          <p>social media</p>
          <ul className="flex gap-2">
            <li>
              <a href="https://github.com/neet-007">
                <Github iconHeight="30" iconWidth="30" theme={theme} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/moayed-elkamel-0bbb2716a/">
                <Linkedin iconHeight="30" iconWidth="30" theme={theme} />
              </a>
            </li>
            <li>
              <a href="https://x.com/Moayed_Alkamel">
                <Twitter iconHeight="30" iconWidth="30" theme={theme} />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex f-d-column gap-2">
          <p>other</p>
          <ul>
            <li>+966540098826</li>
          </ul>
        </div>
      </div>
      <div className="f-basis-50">
        <p>email</p>
      </div>
    </div>
  )
}

