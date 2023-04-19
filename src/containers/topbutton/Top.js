import React, { useEffect } from "react";
import "./Top.scss";

export default function Top() {
  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    function scrollFunction() {
      const topButton = document.getElementById("topButton");
      if (!topButton) return; // check if the element exists before accessing it
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        topButton.style.visibility = "visible";
      } else {
        topButton.style.visibility = "hidden";
      }
    }
    window.onscroll = scrollFunction;
    window.onload = scrollFunction; //To make sure that this button is not visible at starting.
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <button onClick={TopEvent} id="topButton" title="Go to top">
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
