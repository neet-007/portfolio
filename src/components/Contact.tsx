import React, { FC, ComponentProps, useRef, useState } from "react";
import { Github } from "./Github";
import { Linkedin } from "./Linkedin";
import { Twitter } from "./Twitter";
import { useThemeContext } from "../context/themeContext";
import emailjs from '@emailjs/browser';
import { Button } from "./Button";


function validateEmail(email: string) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


const EmailForm: React.FC<ComponentProps<"form"> & { theme: "light" | "dark" }> = ({
  theme, ...props }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMesage] = useState("")

  let buttonDisabled = true;

  if (name !== "" && validateEmail(email) && message !== "") {
    buttonDisabled = false
  }

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    if (!formRef.current) {
      return
    }
    e.preventDefault();

    emailjs
      .sendForm(`${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`, formRef.current, {
        publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}
      className="flex f-d-column gap-1" {...props}>
      <label>Name</label>
      <input type="text" name="from_name" className="p-1"
        onChange={e => setName(e.target.value)} />
      <label>Email</label>
      <input type="email" name="from_email" className="p-1"
        onChange={e => setEmail(e.target.value)} />
      <label>Message</label>
      <textarea name="message" className="p-1"
        onChange={e => setMesage(e.target.value)} />

      <Button theme={theme} type="submit" className="w-fit-content"
        disabled={buttonDisabled}>
        <p className="cap">send</p>
      </Button>
    </form>
  );
};

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
        <p className="cap">email me</p>
        <EmailForm theme={theme} />
      </div>
    </div>
  )
}

