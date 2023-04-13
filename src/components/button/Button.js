import React, { useRef, useEffect } from "react";
import "./Button.scss";

export default function Button({ text, className, href, newTab, ariaLabel, ariaDescription }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      if (ariaLabel) {
        buttonRef.current.setAttribute("aria-label", ariaLabel);
      }
      if (ariaDescription) {
        buttonRef.current.setAttribute("aria-describedby", ariaDescription);
      }
    }
  }, [ariaLabel, ariaDescription]);

  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"} ref={buttonRef}>
        {text}
      </a>
    </div>
  );
}
