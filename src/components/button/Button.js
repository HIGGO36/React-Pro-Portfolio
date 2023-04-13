import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, ariaLabel, ariaDescription}) {
  const buttonProps = {};

  if (ariaLabel) {
    buttonProps["aria-label"] = ariaLabel;
  }

  if (ariaDescription) {
    buttonProps["aria-describedby"] = ariaDescription;
  }

  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"} {...buttonProps}>
        {text}
      </a>
    </div>
  );
}
