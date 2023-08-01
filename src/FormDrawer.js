import React, { useCallback, useState, useEffect } from "react";

export default function FormDrawer(props) {
  const [openForm, setOpenForm] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("setTimeout called!");
      setOpenForm(true);
    }, 120000);

    return () => clearTimeout(timer);
  }, []);

  const toggleForm = () => {
    if (openForm) {
      setOpenForm(false);
    } else {
      setOpenForm(true);
    }
    console.log(openForm);
  };

  return (
    <div class={"form-drawer " + (openForm ? "open" : "closed")}>
      <div class={"form-drawer-toggle"} onClick={() => toggleForm()}>
        FEEDBACK
      </div>
      <div class={"form-drawer-content " + (openForm ? "show" : "hide")}>
        <div class="form-drawer-copy">
          <iframe
            src="https://survey.alchemer.com/s3/7453796/ARC-Direct-Connect-Feedback-Widget"
            frameborder="0"
            width="310"
            height="500"
            style={{ overflow: "hidden" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
