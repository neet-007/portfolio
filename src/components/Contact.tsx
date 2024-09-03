import { FC, ComponentProps, useRef, useState, useEffect } from "react";
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


const EmailForm: FC<ComponentProps<"form"> & { theme: "light" | "dark" }> = ({
  theme, ...props }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMesage] = useState("")
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!formRef.current || !sent) {
      return
    }

    const button = formRef.current.children[formRef.current.children.length - 1].children[1];

    button.setAttribute("data-visible", "true");

    const timeOut = setTimeout(() => {
      setSent(false)
      button.setAttribute("data-visible", "false")
    }, 2000)

    return () => clearTimeout(timeOut)
  }, [sent])

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
          setSent(true)
          if (!formRef.current) {
            return
          }
          const children = formRef.current.children;
          //@ts-ignore
          children[1].value = ""
          //@ts-ignore
          children[3].value = ""
          //@ts-ignore
          children[5].value = ""
          setName("")
          setEmail("")
          setMesage("")
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSent(false)
          if (!formRef.current) {
            return
          }
          const children = formRef.current.children;
          //@ts-ignore
          children[1].value = ""
          //@ts-ignore
          children[3].value = ""
          //@ts-ignore
          children[5].value = ""
          setName("")
          setEmail("")
          setMesage("")
        },
      );
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}
      className="flex f-d-column gap-1" {...props}>
      <label>Name</label>
      <input type="text" name="from_name" className="p-1"
        placeholder="Your Name"
        onChange={e => setName(e.target.value)} />
      <label>Email</label>
      <input type="email" name="from_email" className="p-1"
        placeholder="Email@example.com"
        onChange={e => setEmail(e.target.value)} />
      <label>Message</label>
      <textarea name="message" className="p-1"
        placeholder="Your Message"
        onChange={e => setMesage(e.target.value)} />

      <div className="flex gap-2 align-items-center">
        <Button theme={theme} type="submit" className="w-fit-content"
          disabled={buttonDisabled}>
          <p className="cap">send</p>
        </Button>
        <div className="toast-success cap" data-visible="false">
          <p>
            email sent successfully
          </p>
        </div>
      </div>
    </form>
  );
};

export const Contact: FC<ComponentProps<"div">> = () => {
  const { theme } = useThemeContext();

  return (
    <div id="contact" className="grid gap-2 g-t-columns-2-1fr w-100 align-items-start p-2">
      <div className="flex f-d-column gap-2" >
        <div className="flex f-d-column gap-2 cap">
          <p>social media</p>
          <ul className="flex gap-2">
            <li>
              <a href="https://github.com/neet-007" target="_blank">
                <Github iconHeight="30" iconWidth="30" theme={theme} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/moayed-elkamel-0bbb2716a/" target="_blank">
                <Linkedin iconHeight="30" iconWidth="30" theme={theme} />
              </a>
            </li>
            <li>
              <a href="https://x.com/Moayed_Alkamel" target="_blank">
                <Twitter iconHeight="30" iconWidth="30" theme={theme} />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex f-d-column gap-2">
          <p className="cap">phone</p>
          <ul>
            <li>+966540098826</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="cap">email me</p>
        <EmailForm theme={theme} />
      </div>
    </div>
  )
}

